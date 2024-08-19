// MapScreen.js
import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { getCurrentPosition, watchPosition } from 'react-native-geolocation-service';
import axios from 'axios';


import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';


Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('DrruFoNoMJ0L2lXOSviIthE1X4GvL3q61Ig9JaVJ', 'YDG2dFL7Q5wExvd4yoVgszR2cxIAdGT6MZUWMGkX'); 
Parse.serverURL = 'https://parseapi.back4app.com'

const Home = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [route, setRoute] = useState([]);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    if (recording) {
      const watchId = watchPosition((newLocation) => {
        setLocation(newLocation);
        setRoute((prevRoute) => [...prevRoute, newLocation]);
      });

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, [recording]);

  const handleRecordToggle = async () => {
    if (recording) {
      setRecording(false);

      try {

        await axios.post('https://parseapi.back4app.com/classes/Rotas', {
          route,
        }, {
          headers: {
            'X-Parse-Application-Id': 'DrruFoNoMJ0L2lXOSviIthE1X4GvL3q61Ig9JaVJ',
            'X-Parse-REST-API-Key': 'YDG2dFL7Q5wExvd4yoVgszR2cxIAdGT6MZUWMGkX',
          },
        });
        Alert.alert('Rota salva com sucesso!');
      } catch (error) {
        Alert.alert('Erro ao salvar rota:', error.message);
      }
    } else {
      setRoute([]);
      setRecording(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.09704747853896,
          longitude: -47.7180728404869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {route.length > 0 && (
          <>
            <Marker coordinate={route[0]} title="Início" />
            <Marker coordinate={route[route.length - 1]} title="Fim" />
            <Polyline
              coordinates={route}
              strokeColor="#000"
              strokeWidth={3}
            />
          </>
        )}
      </MapView>
      <Button
        title={recording ? 'Parar Gravação' : 'Começar Gravação'}
        onPress={handleRecordToggle}
      />
      <Button
        title="Ver Rotas Salvas"
        onPress={() => navigation.navigate('./components/ListarRotas')}
      />
    </View>
  );
};

export default Home;
