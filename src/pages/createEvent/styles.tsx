import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 70
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'grey',
    height: 250,
    width: 250
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerView: {
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 6
  },
  textHeader: {
    marginTop: 5,
    marginLeft: 10
  },
  inputView: {
    marginTop: 5
  },
  bookingView: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 24,
    borderTopWidth: 0.2,
    paddingTop: 16
  },
  bookingAmountText: {
    fontSize: 18,
    fontWeight: '400'
  },
  backgroundStyle: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1
  }
});

export default styles;