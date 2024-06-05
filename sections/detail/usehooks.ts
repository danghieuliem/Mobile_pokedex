import { getPokemonByNameOrId } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'

export const useHooks = () => {
  const { id = 1 } = useLocalSearchParams<{ id: string }>()

  return useQuery<TPokemon | null>({
    queryKey: ['getPokemon', id],
    queryFn: () => getPokemonByNameOrId(id),
    retry: false,
  })
}
