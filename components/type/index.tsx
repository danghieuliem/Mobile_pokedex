import {
  BackgroundColorTypes,
  TextColorTypes,
  TypeName,
} from '@/constants/typeColor'
import { useMemo } from 'react'
import { Text, TextProps } from 'react-native'

type Props = {
  name: TUnionType
  onPress?: TextProps['onPress']
}

export const Type = ({ name, onPress }: Props) => {
  const map = useMemo(() => {
    const res: { [key in Props['name']]: TextProps } = {} as never
    TypeName.forEach((e) => {
      res[e] = {
        children: e.toLocaleUpperCase(),
        style: {
          color: TextColorTypes[e],
          fontWeight: 'bold',
          backgroundColor: BackgroundColorTypes[e],
          alignSelf: 'flex-start',
          paddingVertical: 6,
          paddingHorizontal: 8,
          borderRadius: 14,
          overflow: 'hidden',
          fontSize: 12,
        },
      }
    })
    return res
  }, [])

  const component = useMemo(() => {
    return map[name]
  }, [map, name])

  return <Text {...component} onPress={onPress}></Text>
}
