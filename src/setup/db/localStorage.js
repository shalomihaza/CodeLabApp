import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKeys = {
  USER_EMAIL: 'USER_EMAIL',
  LOGIN_ACCESS_TOKEN: 'LOGIN_ACCESS_TOKEN',
};

const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};

const retrieveItem = async key => {
  try {
    const jsonObj = await AsyncStorage.getItem(key);
    return jsonObj != null ? JSON.parse(jsonObj) : null;
  } catch (error) {}
};

const deleteItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

const clearStorage = async () => {
  AsyncStorage.clear();
};

const localStorage = {
  setItem: storeItem,
  getItem: retrieveItem,
  removeItem: deleteItem,
  clearStorage,
};

export default localStorage;
