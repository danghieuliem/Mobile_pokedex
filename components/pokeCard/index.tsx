import { capitalize } from '@/utils'
import { useMemo } from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

type TProps = {
  name: string
  imageUrl: string
  id: number
}
export const PokeCard = ({ name, imageUrl, id = 1 }: TProps) => {
  const formatId = useMemo(() => {
    return '#0000'.slice(0, 5 - id.toString().length) + id
  }, [id])
  return (
    <View style={styles.pokeCardMain}>
      <Text style={styles.id}>{formatId}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image}></Image>
      <Text style={styles.name}>{capitalize(name)}</Text>
      <Text style={styles.itemBg}></Text>
    </View>
  )
}
