type TVersions = {
  'generation-i': TGenerationI
  'generation-ii': TGenerationII
  'generation-iii': TGenerationIII
  'generation-iv': TGenerationIV
  'generation-v': TGenerationV
  'generation-vi': TGenerationVI
  'generation-vii': TGenerationVII
  'generation-viii': TGenerationVIII
}
type TGenerationVIII = {
  icons: Icons
}
type Icons = {
  front_default: string
  front_female: string
}
type TGenerationVII = {
  icons: TDreamWorld
  'ultra-sun-ultra-moon': THome
}
type TGenerationVI = {
  'omegaruby-alphasapphire': THome
  'x-y': THome
}
type TGenerationV = {
  'black-white': TBlackWhite
}
type TBlackWhite = {
  animated: TDiamondPearl
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}
type TGenerationIV = {
  'diamond-pearl': TDiamondPearl
  'heartgold-soulsilver': TDiamondPearl
  platinum: TDiamondPearl
}
type TDiamondPearl = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}
type TGenerationIII = {
  emerald: TOfficialartwork
  'firered-leafgreen': TFireredLeafGreen
  'ruby-sapphire': TFireredLeafGreen
}
type TFireredLeafGreen = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}
type TGenerationII = {
  crystal: TCrystal
  gold: TGold
  silver: TGold
}
type TGold = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}
type TCrystal = {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}
type TGenerationI = {
  'red-blue': TRedBlue
  yellow: TRedBlue
}
type TRedBlue = {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}
type TOther = {
  dream_world: TDreamWorld
  home: THome
  'official-artwork': TOfficialartwork
  showdown: TShowdown
}
type TShowdown = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}
type TOfficialartwork = {
  front_default: string
  front_shiny: string
}
type THome = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}
type TDreamWorld = {
  front_default: string
  front_female?: any
}
