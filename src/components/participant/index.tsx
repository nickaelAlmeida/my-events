import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface IParticipantProps {
  name: string;
  onPress: () => void;
}

export function Participant ({ name, onPress }: IParticipantProps) {
  return (
    <View style={styles.container}>
      <View style={styles.participant}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={onPress}>
        <Text style={styles.buttonTextAdd}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
