import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {styles} from './style.js';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => (
  <SafeAreaView style={styles.safeAreaStyle}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Startup" component={StartupContainer} /> */}
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
