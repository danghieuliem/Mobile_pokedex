import { getListPokemon } from '@/apis'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState, useTransition } from 'react'

export const useHooks = () => {
  const [value, setValue] = useState('')
  const [searchList, setSearchList] = useState<
    {
      name: string
      url: string
      id: number
    }[]
  >()
  const [isPending, transition] = useTransition()
  const [filter, setFilter] = useState({
    limit: 1_025, // https://pokeapi.co
    offset: 0,
  })

  const {
    data,
    mutateAsync: mutateGetAll,
    isPending: isPendingGetListName,
  } = useMutation<IGetAllResolve | null>({
    mutationKey: ['getListPokemon', { ...filter }],
    mutationFn: () => getListPokemon(filter),
    retry: false,
  })

  useEffect(() => {
    mutateGetAll()
  }, [filter])

  const formatListData = useMemo(() => {
    return (
      data?.results.map(({ name, url }, idx) => {
        return {
          name,
          url,
          id: idx + 1,
        }
      }) || []
    )
  }, [data])

  const handleChangeText = (e: string) => transition(() => setValue(e))
  // const handleSearch = () => mutateAsync()
  const handleSearch = () => {
    setSearchList(
      value.trim().length === 0
        ? formatListData
        : (formatListData
            ?.map(({ name, url }, idx) => {
              if (!name.includes(value.trim().toLocaleLowerCase())) return null
              return {
                name,
                url,
                id: idx + 1,
              }
            })
            .filter((e) => !!e) as never),
    )
  }

  return {
    handleChangeText,
    handleSearch,
    formatListData,
    filter,
    isPendingGetListName,
    value,
    searchList,
  }
}
