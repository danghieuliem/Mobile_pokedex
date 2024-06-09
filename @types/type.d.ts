type TTypeResponse = {
  damage_relations: TDamageRelations
  game_indices: TGameIndex[]
  generation: TBaseVale
  id: number
  move_damage_class: TBaseVale
  moves: TBaseVale[]
  name: string
  names: TName[]
  past_damage_relations: any[]
  pokemon: TSlotPokemon[]
}

type TDamageRelations = {
  double_damage_from: TBaseVale[]
  double_damage_to: TBaseVale[]
  half_damage_from: TBaseVale[]
  half_damage_to: TBaseVale[]
  no_damage_from: TBaseVale[]
  no_damage_to: TBaseVale[]
}

type TSlotPokemon = {
  pokemon: TBaseVale
  slot: number
}
