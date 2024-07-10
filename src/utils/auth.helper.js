import AsyncStorage from "@react-native-async-storage/async-storage";

export const doLogin = async (userInfo) => {
  if (!userInfo) return;
  try {
    await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (error) {}
};

export const getAuthUser = async () => {
  try {
    const userData = await AsyncStorage.getItem("userInfo");
    if (userData === null) return userData;
    return JSON.parse(userData);
  } catch (error) {}
};

export const clearAuthUser = async () => {
  try {
    await AsyncStorage.removeItem("userInfo");
  } catch (error) {}
};
