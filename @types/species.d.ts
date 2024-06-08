type TSpecies = {
  base_happiness: number
  capture_rate: number
  color: TBaseVale
  egg_groups: TBaseVale[]
  evolution_chain: TEvolutionChain
  evolves_from_species: any
  flavor_text_entries: TFlavorTextEntry[]
  form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: TGenera[]
  generation: TBaseVale
  growth_rate: TBaseVale
  habitat: TBaseVale
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: TName[]
  order: number
  pal_park_encounters: TPalParkEncounter[]
  pokedex_numbers: TPokedexNumber[]
  shape: TBaseVale
  varieties: TVariety[]
}

type TEvolutionChain = {
  url: string
}

type TFlavorTextEntry = {
  flavor_text: string
  language: TBaseVale
  version: TBaseVale
}

type TGenera = {
  genus: string
  language: TBaseVale
}

type TName = {
  language: TBaseVale
  name: string
}

type TPalParkEncounter = {
  area: TBaseVale
  base_score: number
  rate: number
}

type TPokedexNumber = {
  entry_number: number
  pokedex: TBaseVale
}

type TVariety = {
  is_default: boolean
  pokemon: TBaseVale
}
