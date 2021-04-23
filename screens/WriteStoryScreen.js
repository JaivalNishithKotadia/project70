import * as React from 'react';
import { StyleSheet, Text, View ,TextInput ,TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
 
} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements'
export default class WriteStoryScreen extends React.Component {
  constructor(){
      super();
      this.state={
          text:''
      }
  }
    render(){
    return(
      <SafeAreaProvider>
      <View>
        
        <Header
          
          centerComponent={{ text: 'Story Hub', style: { color: 'black' ,fontWeight:'bold',fontSize:20} }}
          containerStyle={{backgroundColor:'pink',marginTop:20,height:60}}
          
        />
        
        <TextInput
        placeholder="Story Title"
        style={{borderWidth:2,margin:10,height:50,textAlign:'center',fontSize:15,fontWeight:'bold'}}
        onChangeText={text=>{
            this.setState({text:text})
        }}
        />
        <TextInput
        placeholder="Author"
        style={{borderWidth:2,margin:10,height:50,textAlign:'center',fontSize:15,fontWeight:'bold'}}
        onChangeText={text=>{
            this.setState({text:text})
        }}
        />
        <TextInput
        placeholder="Write Your Story"
        multiline={true}
        style={{borderWidth:2,margin:10,height:250,fontSize:15,fontWeight:'bold'}}
        onChangeText={text=>{
            this.setState({text:text})
        }}
        />
        <View style={{backgroundColor:'pink',margin:150,height:50}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:'center',alignSelf:"center",alignContent:'center',backgroundColor:'pink'}}>
          <Text style={{color:'black',fontSize:20,justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center',marginTop:13}}>Submit</Text>
          </TouchableOpacity>
          </View>

      </View>
      </SafeAreaProvider>
    )
  }
}


