import { getListPokemon } from '@/apis'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState, useTransition } from 'react'

// const MAX_SIZE = 30
const MAX_SIZE = 1_025

export type TFormatResList = {
  name: string
  url: string
  id: number
}

export const useHooks = () => {
  const [value, setValue] = useState('')
  const [searchList, setSearchList] = useState<TFormatResList[]>()
  const [isPending, transition] = useTransition()
  const [filter, setFilter] = useState({
    limit: MAX_SIZE, // https://pokeapi.co
    offset: 0,
  })

  const {
    data,
    mutateAsync: mutateGetAll,
    isPending: isPendingGetListName,
  } = useMutation<IGetAllResolve | null>({
    mutationKey: ['getListPokemon', filter.limit, filter.offset],
    mutationFn: () => getListPokemon(filter),
    retry: false,
  })

  useEffect(() => {
    mutateGetAll()
  }, [filter])

  const formatListData = useMemo<TFormatResList[]>(() => {
    return (
      data?.results.map(({ name, url }, idx) => {
        return {
          name,
          url,
          id: idx + 1 + filter.offset,
        }
      }) || []
    )
  }, [data, filter.offset])

  const handleChangeText = (e: string) => transition(() => setValue(e))

  const handleSearch = () => {
    const val = value.trim()
    // if search by Id
    if (!isNaN(+val) && +val > 0 && MAX_SIZE >= +val)
      return setSearchList([formatListData[+val - 1]])

    setSearchList(
      val.length === 0
        ? formatListData
        : (formatListData
            ?.map(({ name, url }, idx) => {
              if (!name.includes(val.toLocaleLowerCase())) return null
              return {
                name,
                url,
                id: idx + 1,
              }
            })
            .filter((e) => !!e) as never),
    )
  }

  const getItemCount = (data: TFormatResList[]) => {
    const listSize = (searchList || formatListData).length
    return listSize + (listSize % 3 === 0 ? 0 : 1)
  }

  const getItem = (data: any, index: number) => {
    const listSize = searchList || formatListData
    return listSize.slice(index * 3, index * 3 + 3)
  }

  const keyExtractor = (item: any, index: number) => {
    return `${index * 3}-${index * 3 + 3}`
  }

  return {
    handleChangeText,
    handleSearch,
    getItemCount,
    getItem,
    keyExtractor,
    formatListData,
    filter,
    isPendingGetListName,
    value,
    searchList,
  }
}
