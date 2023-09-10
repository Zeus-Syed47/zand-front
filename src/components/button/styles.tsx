import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: 'black',
    height: 250,
    width: 250,
    marginRight: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
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
  button: {
    backgroundColor: 'darkgreen',
    width: 70,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  }
});

export default styles