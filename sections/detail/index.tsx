import { BackgroundColorTypes } from '@/constants/typeColor'
import { FormatIdToSting, capitalize } from '@/utils'
import { router } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useHooks } from './usehooks'

export const Detail = () => {
  const { isLoading, data } = useHooks()

  return (
    <View
      style={{
        ...styles.mainView,
        backgroundColor:
          BackgroundColorTypes[data?.types[0].type.name as never],
      }}
    >
      {isLoading ? (
        <Text>loading...</Text>
      ) : (
        <>
          <View style={styles.header}>
            <View style={styles.left}>
              <Pressable
                style={styles.btnBack}
                onPress={() => {
                  router.back()
                }}
              >
                <Text style={styles.btnBackTitle}>&larr;</Text>
              </Pressable>
              <Text style={styles.name}>
                {capitalize(data?.name as string)}
              </Text>
            </View>
            <Text style={styles.id}>{FormatIdToSting(data?.id as never)}</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.image}
              source={{
                uri:
                  data?.sprites?.other['official-artwork'].front_default ||
                  data?.sprites.front_default,
              }}
            ></Image>
          </View>
        </>
      )}
    </View>
  )
}
