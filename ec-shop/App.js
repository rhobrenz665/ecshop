import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductContainer from './screens/products/ProductContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text App</Text>
      <StatusBar style='auto' />
      <ProductContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
