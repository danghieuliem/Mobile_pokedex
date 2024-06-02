export const imagePokemonUrlById = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
