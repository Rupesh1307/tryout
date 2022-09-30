import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  enableLatestRenderer,
  Marker,
  Callout,
} from 'react-native-maps';

function GoogleMap() {
  const region = {
    latitude: 19.076,
    longitude: 72.8777,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const location = {latitude: 19.086, longitude: 72.8777};
  const locationArray = [
    {
      name: 'A',
      location: {latitude: 19.086, longitude: 72.8577},
    },
    {
      name: 'B',
      location: {latitude: 19.076, longitude: 72.8777},
    },
    {
      name: 'C',
      location: {latitude: 19.066, longitude: 72.8777},
    },
    {
      name: 'D',
      location: {latitude: 19.086, longitude: 72.8877},
    },
  ];
  //   enableLatestRenderer();
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>Google Map</Text>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        region={region}>
        {locationArray?.map((item, index) => (
          <Marker coordinate={item.location} key={index}>
            {/* <Image
              source={{
                uri: 'https://image.shutterstock.com/image-vector/pin-point-logo-can-be-260nw-1679653036.jpg',
              }}
              style={{height: 20, width: 20}}></Image> */}
            {/* <Callout tooltip>
              <View>
                <View style={styles.toolTipViewStyle}>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.arrow}></View>
              </View>
            </Callout> */}
            {/* <Callout alphaHitTest> */}
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: 'black',
              }}
            />
            {/* </Callout> */}
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 4,
    // shadowColor: '#333',
    // shadowOffset: {height: 1, width: 1},
    // shadowOpacity: 1,
  },
  headerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mapView: {
    width: '100%',
    height: 400,
    marginVertical: 30,
  },
  toolTipViewStyle: {
    padding: 10,
    backgroundColor: '#fff',
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 10,
    alignSelf: 'center',
  },
});
