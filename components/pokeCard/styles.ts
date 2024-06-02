import { CGray } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  id: {
    position: 'absolute',
    top: 4,
    right: 4,
    color: CGray.medium,
    fontSize: 12,
  },
  pokeCardMain: {
    borderRadius: 8,
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',

    shadowColor: CGray.dark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  image: { width: 80, height: 80 },
  name: {
    fontWeight: 'bold',
    marginTop: -8,
  },
  itemBg: {
    position: 'absolute',
    height: '50%',
    backgroundColor: CGray.light,
    bottom: 0,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: -1,
    opacity: 0.8,
  },
})
