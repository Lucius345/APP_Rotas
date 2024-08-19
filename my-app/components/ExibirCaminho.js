// RouteDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('DrruFoNoMJ0L2lXOSviIthE1X4GvL3q61Ig9JaVJ', 'YDG2dFL7Q5wExvd4yoVgszR2cxIAdGT6MZUWMGkX');
Parse.serverURL = 'https://parseapi.back4app.com'

const ExibirCaminhos = ({ route }) => {
  const { route: routeData } = route.params;

  const coordinates = routeData.route.map((point) => ({
    latitude: point.latitude,
    longitude: point.longitude,
  }));

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: coordinates[0]?.latitude || -23.09704747853896, 
          longitude: coordinates[0]?.longitude || -47.7180728404869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates.length > 0 && (
          <>
            <Marker coordinate={coordinates[0]} title="Início" />
            <Marker coordinate={coordinates[coordinates.length - 1]} title="Fim" />
            <Polyline
              coordinates={coordinates}
              strokeColor="#000"
              strokeWidth={3}
            />
          </>
        )}
      </MapView>
    </View>
  );
};

export default ExibirCaminhos;
