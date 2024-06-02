import { PokeCard } from '@/components/pokeCard'
import { imagePokemonUrlById } from '@/utils'
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { styles } from './styles'
import { useHooks } from './useHooks'

const HomePage = () => {
  const {
    handleChangeText,
    handleSearch,
    formatListData,
    filter,
    isPendingGetListName,
    value,
    searchList,
  } = useHooks()

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('assets/images/pokedex-logo.png')}
        ></Image>
        <View style={styles.groupFilter}>
          <TextInput
            value={value}
            style={styles.inputFilter}
            keyboardType='default'
            onChangeText={handleChangeText}
            onSubmitEditing={handleSearch}
          />
          <Pressable style={styles.btnFilter} onPress={handleSearch}>
            <Text style={styles.btnText}>#</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.pokeList}>
        {isPendingGetListName ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.viewList}>
            {(searchList || formatListData)?.map(({ name, id }) => {
              return (
                <View style={styles.listItem}>
                  <PokeCard
                    key={name}
                    id={id}
                    name={name}
                    imageUrl={imagePokemonUrlById(id)}
                  ></PokeCard>
                </View>
              )
            })}
          </View>
        )}
      </ScrollView>
    </View>
  )
}
export default HomePage
