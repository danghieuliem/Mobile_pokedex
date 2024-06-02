import {
  BackgroundColorTypes,
  TextColorTypes,
  TypeName,
} from '@/constants/typeColor'
import { useId, useMemo } from 'react'
import { Text, TextProps } from 'react-native'

type Props = {
  name: (typeof TypeName)[number]
}

export const Type = ({ name }: Props) => {
  const id = useId()

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
          paddingBottom: 6,
          paddingTop: 6,
          paddingLeft: 8,
          paddingRight: 8,
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
  return <Text {...component}></Text>
}
