import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, Image, View } from 'react-native';
import CreateEvent from '../../pages/createEvent';
import Home from '../../pages/home';

const Stack = createStackNavigator();

function RootStack() {
  const navigate = useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  
      
      options={{
        headerTitle: '',
        headerLeft: () => {
          return (
            <View>
          <Pressable onPress={() => navigate.goBack()}>
            <Image 
            source={require('../../assets/icons/menu25.png')}
            style={{ marginLeft: 16}}
            />
          </Pressable>
        </View>
          );
        },
        headerRight: () => (
          <View>
          <Pressable onPress={() => navigate.goBack()}>
            <Image 
            source={require('../../assets/images/notification.png')}
            style={{ marginRight: 18}}
            />
          </Pressable>
        </View>
        ),
      }}
    
    
    />
      <Stack.Screen name="Create" component={CreateEvent}
       options={{
        headerTitle: '',
        headerLeft: () => {
          return (
            <View >
              <Pressable onPress={() => navigate.goBack()}>
                <Image 
                source={require('../../assets/images/arrowLeft.png')}
                style={{ marginLeft: 18}}
                />
              </Pressable>
              
            </View>
          
          );
        },
        headerRight: () => (
          null
        ),
      }}
      />
    </Stack.Navigator>
  );
}

export default RootStack