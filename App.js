import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ExpoStatusBar style="auto" />
      </View>
      <View style={{ backgroundColor: "pink", flex: 1, padding: 20 }}>
        <Text>List</Text>
      </View>
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
  search: {
    backgroundColor: "green",
    padding: 20
  }
});
