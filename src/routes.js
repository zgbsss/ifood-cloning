import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import PedidosAnteriores from "./screens/PedidosAnteriores";
import Home from "./screens/Home";
import Busca from "./screens/Busca";
import Perfil from "./screens/Perfil";
import Pedidos from "./screens/Pedidos";
import Pagamentos from './screens/Pagamentos';
import Item from './screens/Item';
import Login from "./screens/Login";  

const BottomTab = createBottomTabNavigator();
const StackMain = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// Nav Bar

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{headerShown:false}} 
          />
        <Stack.Screen 
          name="Main" 
          component={Main}
          options={{headerShown:false}} 
        />
      </Stack.Navigator>  
    </NavigationContainer>
  )
}


function Main() {
  return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#DE2B2B",
          tabBarInactiveTintColor: "#4B4B4B",
          tabBarInactiveBackgroundColor: '#D9D9D9',
          tabBarActiveBackgroundColor: '#FFFFFF',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#DE2B2B'},
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarLabel: "Busca",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" color={color} size={26} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Pedidos"
          component={PedidosRouter}
          options={{
            tabBarLabel: "Pedidos",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" color={color} size={26} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Perfil"
          component={PerfilRoutes}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
  );
}

// Nav Bar Interna
function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  )
}

function PerfilRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Pagamentos" component={Pagamentos} />
    </Stack.Navigator>
  )
}

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen
        name="PedidosAnteriores"
        component={PedidosAnteriores}
        options={{ tabBarLabel: 'Pedidos Anteriores' }}
      />
    </Tab.Navigator>
  );
}