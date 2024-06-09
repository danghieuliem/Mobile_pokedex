import { CGray } from '@/constants/Colors'
import { useId } from 'react'
import { Text, TextProps, View } from 'react-native'

type Props = {
  checked?: boolean
  onPress?: TextProps['onPress']
  children?: TextProps['children']
}

export const RadioBox = ({ children, onPress, checked }: Props) => {
  const key = useId()

  return (
    <Text key={key} onPress={onPress}>
      <View
        style={{
          backgroundColor: CGray.background,
          paddingVertical: 6,
          paddingHorizontal: 8,
          borderRadius: 14,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,

          borderWidth: 1,
        }}
      >
        <View
          style={{
            height: 12,
            width: 12,
            padding: 2,
            borderRadius: 9999,
            borderWidth: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 8,
              width: 8,
              backgroundColor: checked ? CGray.dark : CGray.background,
              borderRadius: 9999,
            }}
          ></View>
        </View>
        <Text>{children}</Text>
      </View>
    </Text>
  )
}
