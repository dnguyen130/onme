import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import LocationCard from './comps/LocationCard';
import BigButton from './comps/BigButton';
import Input from './comps/Input';
import SmallButton from './comps/SmallButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <LocationCard />
        <BigButton />
        <Input />
        <SmallButton />
      </ScrollView>
    </SafeAreaView>
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
