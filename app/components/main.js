import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from './header';
import Note from './note';

export default class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText:''
        }
    }

    render() {
        let notes = this.state.noteArray.map((val, key) => { 
            return <Note key={key} keyval={key} val={val}
            deleteMethod={() => this.deleteNote(key)}/>
        })
        return (
            <View style={styles.container}>
                <Header/>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.content}>
                    <TextInput 
                    onChangeText={(noteText) => this.setState({noteText})}
                    style={styles.textInput}
                    placeholder='Write note here'
                    placeholderTextColor='grey'/>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}> + </Text>
                </TouchableOpacity>
            </View>
        )
    }
    addNote() {
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date' : d.getFullYear() +
                '/' + (d.getMonth() + 1) +
                '/' + d.getDate(),
                'note' : this.state.noteText
            })
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: ''})
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 390
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: '#ededed'
  },
  content: {
    bottom:0,
    left:0,
    right:0,
    zIndex: 10,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 0,
    backgroundColor: 'dodgerblue',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  addButtonText: {
    color: 'white'
  }
});
