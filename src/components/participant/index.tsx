import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface ParticipantProps {
  name: string;
  onPress: () => void;
}

export function Participant ({ name, onPress }: ParticipantProps) {
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
