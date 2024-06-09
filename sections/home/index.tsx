import { PokeCard } from '@/components/pokeCard'
import { RadioBox } from '@/components/radioBox'
import { Type } from '@/components/type'
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
    listTypeName,
    getItemCount,
    getItem,
    keyExtractor,
    toggleFilter,
    updateSearchType,
    isShowFilter,
    isSortNumber,
    setIsSortNumber,
  } = useHooks()

  const renderItem = ({ item }: { item: TFormatResList[] }) => {
    return (
      <View style={styles.groupItems}>
        {item.map((e) => (
          <View key={e.id} style={styles.listItem}>
            <PokeCard id={e.id} name={e.name} viewMode='quality'></PokeCard>
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
            <Pressable style={styles.btnFilter} onPress={toggleFilter}>
              <Text style={styles.btnText}>#</Text>
            </Pressable>
          </View>
        </View>
        {isShowFilter && (
          <>
            <View style={styles.searchTypes}>
              {listTypeName.map((e) => {
                return (
                  <Type
                    key={e}
                    name={e}
                    onPress={() => updateSearchType(e)}
                  ></Type>
                )
              })}
            </View>
            <View style={styles.sort}>
              <RadioBox
                checked={!isSortNumber}
                onPress={() => {
                  console.log('Name')
                  setIsSortNumber(false)
                }}
              >
                Name
              </RadioBox>
              <RadioBox
                checked={isSortNumber}
                onPress={() => {
                  console.log('Number')
                  setIsSortNumber(true)
                }}
              >
                Number
              </RadioBox>
            </View>
          </>
        )}
      </View>
      {isPendingGetListName ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.viewList}>
          <SafeAreaView>
            <VirtualizedList
              style={styles.visualList}
              renderItem={renderItem}
              initialNumToRender={4}
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
