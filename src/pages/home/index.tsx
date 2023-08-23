import { useCallback, useRef, useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { format } from 'date-fns';
import { Participant } from '../../components/participant';
import { styles } from './styles';

export function Home () {

  const inputRef = useRef<TextInput>(null);

  const [name, setName] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);

  const handleParticipantAdd = useCallback((name: string) => {

    if (participants.includes(name)) {
      return Alert.alert('Duplicate Participant', 'This participant is already added.');
    }

    setParticipants(state => [...state, name]);
    setName('');
    inputRef.current?.focus();

  }, [participants]);

  const handleParticipantRemove = useCallback((name: string) => {
    Alert.alert('Attention', 'Are you sure you want to delete this participant?', [
      {
        text: 'No',
        style: 'cancel'
      }, {
        text: 'Yes',
        onPress: () => {
          setParticipants(state => state.filter(participant => participant !== name));
        }
      }
    ]);

  }, [participants]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Event</Text>
      <Text style={styles.subTitle}>{format(new Date(), "eeee, d 'de' MMMM 'de' yyyy")}</Text>

      <View style={styles.form}>
        <TextInput
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="Participant's Name"
          placeholderTextColor="#6B6B6B"
          onChangeText={setName}
          value={name}
          returnKeyType="done"
          returnKeyLabel="Add"
          onSubmitEditing={() => handleParticipantAdd(name)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={() => handleParticipantAdd(name)}>
          <Text style={styles.buttonTextAdd}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Participant name={item} onPress={() => handleParticipantRemove(item)} />}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>No participants added.</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
