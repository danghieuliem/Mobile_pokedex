import { getPokemonByNameOrId, getPokemonSpeciesNameOrId } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'

export const useHooks = () => {
  const { id = 1 } = useLocalSearchParams<{ id: string }>()

  const pokemon = useQuery<TPokemon | null>({
    queryKey: ['getPokemon', id],
    queryFn: () => getPokemonByNameOrId(id),
    retry: false,
  })
  const species = useQuery<TSpecies | null>({
    queryKey: ['getPokemonSpecies', id],
    queryFn: () => getPokemonSpeciesNameOrId(id),
    retry: false,
  })

  return { pokemon, species }
}
