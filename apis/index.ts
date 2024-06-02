const promise = <T>(url: string) =>
  fetch(url, {
    method: 'get',
  })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      return res as T
    })
    .catch((e) => {
      console.error(e)
      return null
    })

export const getPokemonByName = async (
  name: string,
): Promise<TPokemon | null> => {
  return promise(`https://pokeapi.co/api/v2/pokemon/${name}`)
}

export const getListPokemon = ({
  limit = 20,
  offset = 0,
}): Promise<IGetAllResolve | null> => {
  return promise(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  )
}
