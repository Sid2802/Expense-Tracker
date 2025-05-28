import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpenseScreen from './screens/AddExpenseScreen';
import ViewExpensesScreen from './screens/ViewExpensesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewExpenses">
        <Stack.Screen name="ViewExpenses" component={ViewExpensesScreen} options={{ title: 'Expenses' }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
