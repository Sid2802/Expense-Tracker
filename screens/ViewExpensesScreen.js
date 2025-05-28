import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { getExpenses } from '../utils/storage';
import ExpenseItem from '../components/ExpenseItem';

export default function ViewExpensesScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const data = await getExpenses();
      setExpenses(data);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="Add New Expense" onPress={() => navigation.navigate('AddExpense')} />
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 }
});
