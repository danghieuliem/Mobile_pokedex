import { Type } from '@/components/type'
import { CGray } from '@/constants/Colors'
import { BackgroundColorTypes } from '@/constants/typeColor'
import { FormatIdToSting, capitalize } from '@/utils'
import { router } from 'expo-router'
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { styles } from './styles'
import { useHooks } from './usehooks'

export const Detail = () => {
  const { pokemon, species } = useHooks()
  const { isLoading, data } = pokemon
  const { data: speciesData } = species

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
          <ImageBackground
            style={styles.pokeball}
            source={require('assets/images/pokeball.png')}
            resizeMode='contain'
          ></ImageBackground>
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
          <View style={styles.headerImg}>
            <ImageBackground
              style={styles.imageBackground}
              source={{
                uri:
                  data?.sprites?.other['official-artwork'].front_default ||
                  data?.sprites.front_default,
              }}
              resizeMode='contain'
            ></ImageBackground>
          </View>
          <SafeAreaView style={styles.info}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.types}>
                {data?.types.map((t) => <Type name={t.type.name}></Type>)}
              </View>
              <Text
                style={{
                  ...styles.titleAbout,
                  color:
                    BackgroundColorTypes[data?.types[0].type.name || 'normal'],
                }}
              >
                About
              </Text>
              <View style={styles.bodyStatus}>
                <View style={styles.bodyStatusItem}>
                  <View style={styles.infoGroup}>
                    <Image
                      style={styles.bodyStatusIcon}
                      source={require('assets/icons/weight.png')}
                    ></Image>
                    <Text style={styles.bodyStatusValue}>
                      {(data?.weight as number) / 10} kg
                    </Text>
                  </View>

                  <Text style={styles.infoName}>Weight</Text>
                </View>

                <View
                  style={{
                    ...styles.bodyStatusItem,
                    ...styles.bodyStatusItemMid,
                  }}
                >
                  <View style={styles.infoGroup}>
                    <Image
                      style={styles.bodyStatusIcon}
                      source={require('assets/icons/height.png')}
                    ></Image>
                    <Text style={styles.bodyStatusValue}>
                      {(data?.height as number) / 10} m
                    </Text>
                  </View>
                  <Text style={styles.infoName}>Height</Text>
                </View>

                <View style={styles.bodyStatusItem}>
                  <View style={styles.infoGroupAbilities}>
                    {(data?.abilities?.length || 0) >= 2 ? (
                      <>
                        <Text style={styles.bodyStatusValue}>
                          {data?.abilities[0].ability.name}
                        </Text>
                        <Text style={styles.bodyStatusValue}>
                          {data?.abilities[1].ability.name}
                        </Text>
                      </>
                    ) : (
                      (data?.abilities?.length || 0) >= 1 && (
                        <>
                          <Text style={styles.bodyStatusValue}>
                            {data?.abilities[0]?.ability.name}
                          </Text>
                        </>
                      )
                    )}
                  </View>
                  <Text style={styles.infoName}>Moves</Text>
                </View>
              </View>
              <View style={styles.summary}>
                <Text>
                  {(
                    speciesData?.flavor_text_entries.find(
                      (e) => e.language.name === 'en',
                    ) ?? { flavor_text: '' }
                  ).flavor_text.replaceAll('\n', ' ')}
                </Text>
              </View>
              <View style={styles.baseStatus}>
                <Text
                  style={{
                    ...styles.titleStatus,
                    color:
                      BackgroundColorTypes[
                        data?.types[0].type.name || 'normal'
                      ],
                  }}
                >
                  Base Status
                </Text>
                {['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD'].map((s, idx) => (
                  <View style={styles.status}>
                    <Text
                      style={{
                        ...styles.statusName,
                        color:
                          BackgroundColorTypes[
                            data?.types[0].type.name || 'normal'
                          ],
                      }}
                    >
                      {s}
                    </Text>
                    <View
                      style={{
                        borderLeftWidth: 1,
                        borderLeftColor: CGray.light,
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 8,
                      }}
                    >
                      <Text style={styles.statusPoint}>
                        {'000'.slice(
                          0,
                          3 - String(data?.stats[idx].base_stat ?? '').length,
                        ) + data?.stats[idx].base_stat}
                      </Text>
                      <View
                        style={{
                          ...styles.statusBar,
                          backgroundColor:
                            BackgroundColorTypes[
                              data?.types[0].type.name || 'normal'
                            ] + '33', // 33 meaning opacity 20%
                        }}
                      >
                        <View
                          style={{
                            ...styles.statusbarPercent,
                            width: `${(Number(data?.stats[idx].base_stat) / 200) * 100}%`,
                            backgroundColor:
                              BackgroundColorTypes[
                                data?.types[0].type.name || 'normal'
                              ],
                          }}
                        ></View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      )}
    </View>
  )
}
