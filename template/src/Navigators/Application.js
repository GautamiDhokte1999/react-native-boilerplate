import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} /> */}
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default ApplicationNavigator;
