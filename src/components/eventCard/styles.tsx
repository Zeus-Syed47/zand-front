import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: 'black',
    height: 250,
    width: 250,
    marginRight: 18,
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  details: {
    height: '50%',
  },
  bgView: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    width: undefined,
    height: undefined,
    aspectRatio: 2,
  },
  detailsView: {
    padding: 12
  },
  buttonView: {
    marginTop: 5
  },
  priceView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  locView: {
    display: 'flex',
    flexDirection: 'row',
    right: 5,
  },
  iconView: { height: 25, width: 25, top: 5 },
  locationText: {
    top: 10
  },
  dateView: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    padding: 5,
    left: 10,
    top: 10
  },
  textDate: { color: 'white', fontWeight: '600' }
});

export default styles