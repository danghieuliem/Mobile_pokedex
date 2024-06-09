import { getListPokemon, getListPokemonByType } from '@/apis'
import { BackgroundColorTypes } from '@/constants/typeColor'
import { getIdFrom } from '@/utils'
import { useMutation } from '@tanstack/react-query'
import { sortBy } from 'lodash'
import { useCallback, useEffect, useMemo, useState, useTransition } from 'react'

// const MAX_SIZE = 30
const MAX_SIZE = 1_025

export type TFormatResList = {
  name: string
  url: string
  id: number
}

export const useHooks = () => {
  const [data, setData] = useState<TBaseVale[]>([])
  const [value, setValue] = useState('')
  const [isShowFilter, setIsShowFilter] = useState(false)
  const [searchList, setSearchList] = useState<TFormatResList[]>()
  const [isPending, transition] = useTransition()
  const [isSortNumber, setIsSortNumber] = useState(true)

  const [filter, setFilter] = useState<{
    limit: number
    offset: number
    type: TUnionType | null
  }>({
    limit: MAX_SIZE,
    offset: 0,
    type: null,
  })

  const { mutateAsync: mutateGetAll, isPending: isPendingGetListName } =
    useMutation<TTypeResponse | IGetAllResolve | null>({
      mutationKey: ['getListPokemon', filter.limit, filter.offset, filter.type],
      mutationFn: () =>
        filter.type !== 'all' && filter.type
          ? getListPokemonByType(filter.type as never)
          : getListPokemon(filter),
      onSuccess(data) {
        filter.type !== 'all' && filter.type
          ? setData((data as TTypeResponse).pokemon.map((e) => e.pokemon))
          : setData((data as IGetAllResolve).results)
      },
      retry: false,
    })

  useEffect(() => {
    mutateGetAll()
  }, [filter])

  const formatListData = useMemo<TFormatResList[]>(() => {
    return (
      data.map(({ name, url }, idx) => {
        return {
          name,
          url,
          id: getIdFrom(url),
        }
      }) || []
    ).filter((e) => e.id <= MAX_SIZE)
  }, [data, filter.offset])

  useEffect(() => {
    handleSearch()
  }, [isSortNumber, formatListData])

  const handleChangeText = (e: string) => transition(() => setValue(e))

  const handleSearch = () => {
    const val = value.trim()
    // if search by Id
    if (!isNaN(+val) && +val > 0 && MAX_SIZE >= +val)
      return setSearchList([formatListData[+val - 1]])

    const newList =
      val.length === 0
        ? formatListData
        : (formatListData
            ?.map(({ name, url }, idx) => {
              if (!name.includes(val.toLocaleLowerCase())) return null
              return {
                name,
                url,
                id: getIdFrom(url),
              }
            })
            .filter((e) => !!e) as never)

    setSearchList(newList)
    if (isSortNumber) {
      setSearchList(sortBy(newList, ['id']))
    } else {
      setSearchList(sortBy(newList, ['name']))
    }
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

  const listTypeName = useMemo<TUnionType[]>((): TUnionType[] => {
    return Object.keys(BackgroundColorTypes) as never
  }, [])

  const toggleFilter = useCallback(() => {
    setIsShowFilter(!isShowFilter)
  }, [isShowFilter])

  const updateSearchType = (type: TUnionType) => {
    setFilter({ ...filter, type })
  }

  return {
    handleChangeText,
    handleSearch,
    getItemCount,
    getItem,
    keyExtractor,
    toggleFilter,
    updateSearchType,
    isShowFilter,
    formatListData,
    filter,
    isPendingGetListName,
    value,
    searchList,
    listTypeName,
    isSortNumber,
    setIsSortNumber,
  }
}
