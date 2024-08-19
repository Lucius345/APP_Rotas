// SavedRoutesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text,FlatList, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('DrruFoNoMJ0L2lXOSviIthE1X4GvL3q61Ig9JaVJ', 'YDG2dFL7Q5wExvd4yoVgszR2cxIAdGT6MZUWMGkX');
Parse.serverURL = 'https://parseapi.back4app.com'

const ListarRotas = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get('https://parseapi.back4app.com/classes/Rotas', {
          headers: {
            'X-Parse-Application-Id': 'DrruFoNoMJ0L2lXOSviIthE1X4GvL3q61Ig9JaVJ',
            'X-Parse-REST-API-Key': 'YDG2dFL7Q5wExvd4yoVgszR2cxIAdGT6MZUWMGkX',
          },
        });
        setRoutes(response.data.results);
      } catch (error) {
        Alert.alert('Erro ao carregar rotas:', error.message);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={routes}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RouteDetails', { route: item })}
            style={{ padding: 10, borderBottomWidth: 1 }}
          >
            <Text>Rota {item.objectId}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListarRotas;

