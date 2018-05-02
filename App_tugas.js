//////// slide 13

// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const gaya = StyleSheet.create({ teksA: {
//   color:'red',
//   },
//   teksB: {
//   color:'blue', fontSize:30, fontWeight:'bold',
//   },
// });

// class App extends Component {
// render() {
// return (
//   <View>
//     <Text style={gaya.teksA}>
//     Ini Style A
//     </Text>
//     <Text style={gaya.teksB}>
//     Ini Style B
//     </Text>
//     <Text style={[gaya.teksA,gaya.teksB]}>
//     Ini Style A+B
//     </Text>
//     <Text style={[gaya.teksB,gaya.teksA]}>
//     Ini Style B+A
//     </Text>
//   </View>
//   );
// }
// }

// export default App;

///////// slide component


// import React, {Component} from 'react';
// import {View, Image} from 'react-native';
// class App extends Component {
//  render() {
//   return (
//    <View style={{flexDirection: 'row',
//    justifyContent:'center'}}>
//      <Image
//      style={{width: 250, height: 250}}
//      source={{uri:'data:image/jpeg;base64,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'}}
//      />
//    </View>
//   );
//  }
// }
// export default App;

///////// slide component - console.log

// import React, { Component } from 'react';
// import { Button } from 'react-native';

// class App extends Component {
//  render() {
//   function klik(){
//    console.log('Tombol diklik!')
//   }
//   return (
//    <Button
//    onPress={klik}
//    title="Klik Tombol"
//    color="purple"
//    />
// );}}

// export default App;

////////////// component klik

// import React, { Component } from 'react';
// import { Button, Alert } from 'react-native';
// class App extends Component {
//  render() {
//   function klik(){
//    Alert.alert('Tombol diklik!');
//   }
//    return (
//     <Button
//       onPress={klik}
//       title="Klik Tombol"
//       color="purple"
//     />
//   );
//  }
// }
// export default App;

//////////////// text box

// import React, { Component } from 'react';
// import { 
//   Button, 
//   Text, 
//   TextInput, 
//   View } from 'react-native';

// class App extends Component {
//   constructor(){
//     super();
//     this.state={x:'Andi', y:''}
//   }
//   render() {
//     return (
//     <View>
//       <Text style={{fontSize:30}}>{this.state.x}
//       </Text>

//       <TextInput style={{height:40}}
//       placeholder='Ketik nama...'
//       onChangeText={(input)=>this.setState({y:input})}
//       />

//       <Button
//       onPress={()=>{this.setState({x:this.state.y})}}
//       title='Klik Tombol'
//       color='purple'
//       /> 

//     </View>
// );}}

// export default App;

//////////// picker

// import React, { Component } from 'react';
// import { Picker } from 'react-native';class App extends Component {
//  state = {opsi:''}
//  render() {
//   return (
//    <Picker
//    selectedValue={this.state.opsi}
//    style={{ height: 50, width: 200 }}
//    onValueChange={(val, i) => this.setState({opsi: val})}>
//     <Picker.Item label="Nasi Goreng" value="1" />
//     <Picker.Item label="Nasi Uduk" value="2" />
//     <Picker.Item label="Nasi Gudeg" value="3" />
//    </Picker>
//   );
//  }
// }
// export default App;

/////// status bar

// import React, { Component } from 'react';
// import { View, StatusBar } from 'react-native';
// class App extends Component {
//  render() {
//   return (
//    <View>
//     <StatusBar
//     backgroundColor="pink"
//     barStyle="light-content"   //"dark-content"
//     />
//    </View>
//   );
//  }
// }
// export default App;


////// klik

// import React, { Component } 
// from 'react'

// import {
// StyleSheet,
// TouchableOpacity,
// Text, View} from 'react-native'

// class App extends Component {
//   klik = () => {}
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//         style={styles.button}
//         onPress={this.klik}>
//           <Text> Klik Ini </Text>
//         </TouchableOpacity>
//       </View>
// )}}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 30
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 20
//   }
// })
// export default App;

////// modal

// import React, { Component } from 'react';
// import {
//   Alert, 
//   Modal, 
//   Text, 
//   Button, 
//   View} from 'react-native';
  
// class App extends Component {
//   state = {
//     modalVisible: false,
//   };
//   setModal(visible) {
//     this.setState({modalVisible: visible});
//   }
//   render() {
//     return (
//       <View style={{marginTop: 20}}>
     
//         <Modal
//          animationType="slide" transparent={false}
//          visible={this.state.modalVisible}
//          onRequestClose={() => {}}>
//            <View style={{marginTop: 22}}>
//              <View>
//                <Text style={{fontSize:30,margin:50}}>
//                 Ini modal.</Text>
//                <Button
//                 title='Tutup Modal' onPress={() => {
//                 this.setModal(!this.state.modalVisible);
//                }}/>
//              </View>
//            </View>
//          </Modal>
//          <Button
//      title='Tampilkan Modal'
//      onPress={() => {
//        this.setModal(true);
//     }}/>
//   </View>
//  );}}
// export default App;






// import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';  
// import Satu from './src/Components/Satu';
// import Dua from './src/Components/Dua';
// import Duax from './src/Components/Duax';

// const RootStack = StackNavigator(
//   {
//     HalSatu: {screen: Satu},
//     HalDua: {screen: Dua},
//     HalDuax: {screen: Duax}
//   },

//   {
//     initialRouteName: 'HalSatu',
//   }
// );

// class App extends Component {

// render() {

// return (<RootStack />);
// }}

// export default App;






// import React, { Component } from 'react';
// import { TabNavigator } from 'react-navigation';

// import Tiga from './src/Components/Tiga';
// import Empat from './src/Components/Empat';

// export default TabNavigator({  "ini tab tiga": { screen: Tiga },  EMPAT: { screen: Empat }, });


//atau bisa juga pakai ini buat ganti2 style


import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Tiga from './src/Components/Tiga';
import Empat from './src/Components/Empat';

const Navtab = TabNavigator(
  {
    TIGA: {screen: Tiga},
    EMPAT: {screen: Empat},
  },
  {
    tabBarPosition : 'bottom',
    tabBarOptions :
    {
      style:
      {
        backgroundColor:'#000'
      },
      activeTintColor : '#b5b5b5'
    }
  }
);

class App extends Component{
  render() {
  return(<Navtab />);
  }
}

export default App;




// import React, { Component } from 'react';
// import { DrawerNavigator } from 'react-navigation';

// import Lima from './src/Components/Lima';
// import Enam from './src/Components/Enam';

// export default DrawerNavigator({
//   LIMA: {
//   screen: Lima,
//   },

//   ENAM: {
//   screen: Enam,
//   },

// });
  



// import React, { Component } from 'react';  
// import { View, Image } from 'react-native';
// import * as Animatable from 'react-native-animatable';  

// class App extends Component {
//   render() {
//   return (
//   <View>
//   <Animatable.Text animation="rubberBand" delay={3000} duration={1000}  direction="normal" easing="ease-in" iterationCount="infinite"style={{fontSize:50,textAlign:'center'}}>
//   I ♥	U
//   </Animatable.Text>

//   <Animatable.Text animation="jello" delay={3000} duration={1000}  direction="normal" easing="ease-in" iterationCount="infinite"style={{fontSize:50,textAlign:'center'}}>
//   <Image style={{width:300,height:300}} source={require('./src/Images/ic_android.png')}/>
//   </Animatable.Text>
//   </View>
// );}}


//export default App;

