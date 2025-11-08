export type RootStackParamList = {
  Auth: { screen?: string };
  Home: undefined; // agar koi params nahi bhejne
  Login: undefined;
  Register: undefined;
  Profile: { userId: string }; // agar params bhejne ho
  Settings: undefined;
};
