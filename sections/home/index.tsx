import { PokeCard } from '@/components/pokeCard'
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  VirtualizedList,
} from 'react-native'
import { styles } from './styles'
import { TFormatResList, useHooks } from './useHooks'

const HomePage = ({ navigation }: any) => {
  const {
    handleChangeText,
    handleSearch,
    isPendingGetListName,
    value,
    getItemCount,
    getItem,
    keyExtractor,
  } = useHooks()

  const renderItem = ({ item }: { item: TFormatResList[] }) => {
    return (
      <View style={styles.groupItems}>
        {item.map((e) => (
          <View key={e.id} style={styles.listItem}>
            <PokeCard id={e.id} name={e.name} viewMode='anime'></PokeCard>
          </View>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.groupHeader}>
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
        <View style={styles.searchTypes}></View>
      </View>
      {isPendingGetListName ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.viewList}>
          <SafeAreaView>
            <VirtualizedList
              style={styles.visualList}
              renderItem={renderItem}
              initialNumToRender={6}
              keyExtractor={keyExtractor}
              getItemCount={getItemCount}
              getItem={getItem}
            />
          </SafeAreaView>
        </View>
      )}
    </View>
  )
}
export default HomePage
