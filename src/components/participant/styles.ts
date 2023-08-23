import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  participant: {
    flex: 1,
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginRight: 12,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
  },
  name: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
  },
  buttonTextAdd: {
    fontSize: 24,
    color: '#FFFFFF',
  }
});
