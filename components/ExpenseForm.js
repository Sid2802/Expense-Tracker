// This file is unused in current setup, kept for potential expansion.
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ExpenseForm({ onSubmit, submitButtonLabel = "Save", initialData = null }) {
    const [amount, setAmount] = useState(initialData ? String(initialData.amount) : '');
    const [category, setCategory] = useState(initialData ? initialData.category : '');
    const [date, setDate] = useState(initialData ? new Date(initialData.date) : new Date());

    const handleSubmit = () => {
        if (!amount || !category) {
            alert("Please enter all fields.");
            return;
        }

        const expense = {
            id: initialData?.id || Date.now().toString(),
            amount: parseFloat(amount),
            category,
            date: date.toISOString()
        };

        onSubmit(expense);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="decimal-pad"
                value={amount}
                onChangeText={setAmount}
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
            />
            <Text style={{ marginBottom: 10 }}>Select Date:</Text>
            <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                    if (selectedDate) setDate(selectedDate);
                }}
            />
            <View style={styles.button}>
                <Button title={submitButtonLabel} onPress={handleSubmit} />
            </View>
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
        borderRadius: 6
    },
    button: {
        marginTop: 20
    }
});
