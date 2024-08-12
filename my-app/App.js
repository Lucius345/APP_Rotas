import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import ExibirCaminho from './components/ExibirCaminho';
import ListarRotas from './components/ListarRotas';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#8cb9e6',
            height: 60
          },
          tabBarLabelStyle: {
            fontSize: 20,
          },
          tabBarActiveTintColor: '#297fd6',
          tabBarInactiveTintColor: '#295d91',
          tabBarLabelPosition: 'below-icon'
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color, size }) => <FontAwesome5 name="home" size={size} color={color} /> }} />
        <Tab.Screen name="Exibir Caminho" component={ExibirCaminho} options={{ tabBarIcon: ({color, size }) => <FontAwesome5 name="list-ul" size={size} color={ color } />}}/>
        <Tab.Screen name="Listar Rotas" component={ListarRotas} options={{ tabBarIcon: ({color, size }) => <FontAwesome5 name="route" size={size} color={ color } />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

