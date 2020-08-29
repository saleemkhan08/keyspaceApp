import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding } from './src/auth';
import { LoadAssets } from './src/components';

const fonts = {
  "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
  "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
  "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),

};

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode={"none"}>
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthenticationStack.Navigator>);
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}