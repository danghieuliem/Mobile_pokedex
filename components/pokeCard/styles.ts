import { CGray } from '@/constants/Colors'
import { getHexColorAlpha } from '@/utils'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  id: {
    position: 'absolute',
    top: 4,
    right: 4,
    color: CGray.medium,
    backgroundColor: getHexColorAlpha(CGray.background, '80%'),
    borderRadius: 12,
    paddingHorizontal: 4,
    fontSize: 10,
    zIndex: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    paddingBottom: 4,
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
