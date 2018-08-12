import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, Image, ScrollView  } from 'react-native';
import Header from './header'

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=a050e54685b44bf89ec55dbb472ee1d2')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
        <View style={{flex: 1, paddingTop:20}}>
            <Header/>
            <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
                <View> 
                    <Image source={{uri: item.urlToImage}} />
                    <View style={styles.mainContent}>
                        <Text>{item.author} - {item.source.name}</Text>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                </View>
            }
            keyExtractor={(item, index) => index}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    itemTitle: {
        fontSize: 15,
        color: 'dodgerblue'
    },
    mainContent: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 30,
        borderTopWidth: 1,
        borderTopColor: '#ededed'
    },
})