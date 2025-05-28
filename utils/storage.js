import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = 'expenses';

export const saveExpenses = async (expenses) => {
  await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
};

export const getExpenses = async () => {
  const data = await AsyncStorage.getItem(EXPENSES_KEY);
  return data ? JSON.parse(data) : [];
};

// Add a new expense
export const addExpense = async (newExpense) => {
  const current = await getExpenses();
  const updated = [newExpense, ...current];
  await saveExpenses(updated);
};

// Delete expense by ID
export const deleteExpense = async (id) => {
  const current = await getExpenses();
  const updated = current.filter((expense) => expense.id !== id);
  await saveExpenses(updated);
};

// Update expense by ID
export const updateExpense = async (updatedExpense) => {
  const current = await getExpenses();
  const updated = current.map((expense) =>
    expense.id === updatedExpense.id ? updatedExpense : expense
  );
  await saveExpenses(updated);
};