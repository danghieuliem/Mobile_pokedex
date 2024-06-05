type TPokemon = {
  abilities: TAbility[]
  base_experience: number
  cries: TCries
  forms: TBaseVale[]
  game_indices: TGameIndex[]
  height: number
  held_items: THeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: TMove[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: TBaseVale
  sprites: TSprites
  stats: TStat[]
  types: Type[]
  weight: number
}
type TUnionType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'normal'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water'

type Type = {
  slot: number
  type: TBaseVale & { name: TUnionType }
}
type TStat = {
  base_stat: number
  effort: number
  stat: TBaseVale
}
type TSprites = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
  other: Other
  versions: Versions
}
type TMove = {
  move: TBaseVale
  version_group_details: TVersionGroupDetail[]
}
type TVersionGroupDetail = {
  level_learned_at: number
  move_learn_method: TBaseVale
  version_group: TBaseVale
}
type THeldItem = {
  item: TBaseVale
  version_details: TVersionDetail[]
}
type TVersionDetail = {
  rarity: number
  version: TBaseVale
}
type TGameIndex = {
  game_index: number
  version: TBaseVale
}
type TCries = {
  latest: string
  legacy: string
}
type TAbility = {
  ability: TBaseVale
  is_hidden: boolean
  slot: number
}
type TBaseVale = {
  name: string
  url: string
}
