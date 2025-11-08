export type RootStackParamList = {
  Home: undefined; // agar koi params nahi bhejne
  Login: undefined;
  Register: undefined;
  Profile: { userId: string }; // agar params bhejne ho
  Settings: undefined;
};
