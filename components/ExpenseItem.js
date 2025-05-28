import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExpenseItem({ expense }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{expense.category}</Text>
      <Text style={styles.text}>${expense.amount.toFixed(2)}</Text>
      <Text style={styles.date}>{new Date(expense.date).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: { fontSize: 16 },
  date: { fontSize: 12, color: '#666' }
});
