import { CGray } from '@/constants/Colors'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  mainView: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnBack: { paddingRight: 8 },
  btnBackTitle: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  id: {
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 1,
    color: 'white',
  },
  info: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    backgroundColor: CGray.white,
    flex: 1,
  },
  image: { width: 123, height: 123, borderColor: 'red' },
})
