import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { saveExpenses, getExpenses } from '../utils/storage';
import ExpenseForm from '../components/ExpenseForm';

export default function AddExpenseScreen({ navigation }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());

  const addExpense = async () => {
    if (!amount || !category) {
      Alert.alert('All fields required!');
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      category,
      date: date.toISOString()
    };

    const existing = await getExpenses();
    const updated = [newExpense, ...existing];
    await saveExpenses(updated);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <Text style={{ marginBottom: 10}}>Select Date:</Text>
      <DateTimePicker value={date} mode="date" display="default" onChange={(e, selectedDate) => setDate(selectedDate || date)} />
      <Button title="Add Expense" onPress={addExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 50,
  }
});
