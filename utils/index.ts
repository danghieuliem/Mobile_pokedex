import { isNumber } from 'lodash'

export const imagePokemonUrlById = (id: number) => {
  const i = id > 1025 ? 10000 + (id - 1025) : id
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
  // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const FormatIdToSting = (id: number | string) => {
  if (isNumber(id)) {
    return '#0000'.slice(0, 5 - id.toString().length) + id
  }
  return id
}
