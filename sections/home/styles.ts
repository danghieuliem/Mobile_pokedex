import { CGray, CPrimary } from '@/constants/Colors'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: CPrimary,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 24,
  },
  groupHeader: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 12,
  },
  header: {
    paddingTop: 40,
    display: 'flex',
  },
  logo: { height: 32, width: 146 },
  groupFilter: {
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  inputFilter: {
    flex: 1,
    minWidth: 100,
    backgroundColor: CGray.white,
    borderRadius: 15,
    height: 32,
    paddingLeft: 12,
    shadowColor: CGray.dark,
  },
  btnFilter: {
    backgroundColor: CGray.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    borderRadius: 24,
    elevation: 3,
  },
  btnText: {
    color: CPrimary,
    fontSize: 20,
  },
  searchTypes: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'wrap',
  },
  sort: {
    display: 'flex',
    flexDirection: 'row',
  },
  sortText: {},
  viewList: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: CGray.white,
    flex: 1,
  },
  visualList: {
    borderColor: 'black',
    display: 'flex',
  },
  groupItems: {
    display: 'flex',
    flexDirection: 'row',
  },
  listItem: {
    marginVertical: 4,
    // flex: 1,
    width: '33%',
    display: 'flex',
    alignItems: 'center',
  },
})
