import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  title: {
    marginTop: 48,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#6B6B6B',
  },
  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    marginRight: 12,
    fontSize: 16,
    color: '#FFFFFF',
    borderRadius: 5,
    backgroundColor: '#1F1E25',
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
  },
  buttonTextAdd: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  emptyListText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
