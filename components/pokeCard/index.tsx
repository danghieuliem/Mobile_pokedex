import { FormatIdToSting, capitalize, imagePokemonUrlById } from '@/utils'
import { Link } from 'expo-router'
import { useEffect, useMemo, useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from './styles'

type TProps = {
  name: string
  id: number
  viewMode?: 'quality' | 'pixel' | 'anime'
}
export const PokeCard = ({ name, id = 1, viewMode = 'quality' }: TProps) => {
  const formatId = useMemo(() => {
    return '#0000'.slice(0, 5 - id.toString().length) + id
  }, [id])

  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    const url = imagePokemonUrlById(id, viewMode)
    fetch(url)
      .then((res) => {
        if (res.status !== 404)
          return setImageUrl(imagePokemonUrlById(id, viewMode))
      })
      .catch(() => {
        return setImageUrl(imagePokemonUrlById(id, viewMode))
      })
  }, [viewMode, id])

  return (
    <Link
      href={{
        pathname: '/detail/' + id,
      }}
    >
      <View style={styles.pokeCardMain}>
        <Text style={styles.id}>{FormatIdToSting(formatId)}</Text>
        <View style={styles.imageContainer}>
          <ImageBackground
            resizeMode='contain'
            source={{ uri: imageUrl }}
            style={styles.image}
            defaultSource={require('assets/images/pokeball-loading.png')}
          ></ImageBackground>
        </View>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <Text style={styles.itemBg}></Text>
      </View>
    </Link>
  )
}
