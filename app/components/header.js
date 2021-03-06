import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>Newsfa App</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    paddingTop: 25,
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 15
  }
});
