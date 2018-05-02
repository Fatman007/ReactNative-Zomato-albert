// import React from 'react';
// import { View, Text, Button } from "react-native";
// import { SearchBar, ListItem } from 'react-native-elements'
// // import { Body } from 'native-base'
// import AlbumList from './src/Components/AlbumList';
// import axios from 'axios';




// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			search: '',
// 			data: []
// 		}
//   }

  
//   get = cari => {

//   let url = `https://developers.zomato.com/api/v2.1/search?q=${cari}`;

//   let config = {headers:{'user-key':'a891f8b02d6108b3151206aa38241e85'}};

//   axios.get(url, config).then((ambilData)=>{
//     this.setState({
//       data: ambilData.data.restaurants
//     })
//   })
//   }

//   render() {

//     const nama = this.state.data.map((x,index) => {

//     let y = x.restaurant.name;

//     return(
//       <Text key = {index}> {y} </Text>
//       )
//     })

//   return (
//     <View>
//       <SearchBar
//         lightTheme
//         round
//         showLoadingIcon
//         onChangeText={() => (search) => this.search = search}
//         onClear={()=>{}}
//         placeholder='Cari makanan apa?'/>

//       <Button onPress={()=>this.get(this.state.search)}
//       title="LIHAT DAFTAR RESTO" color="gray" />

//       <ListItem>
				
// 					{nama}
				
// 			</ListItem>

//       {/* <AlbumList /> */}
//     </View>
//   );
// };
// }
// export default App;


import React, {Component} from 'react';
import {Image} from 'react-native';

import {Container,Header,Item,Input,Text, Button, Icon, Content, Card, CardItem, Thumbnail, Body, Left, Right} from 'native-base';
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: [], 
      search : ""}
  }

  get = () => {
    let url = `https://developers.zomato.com/api/v2.1/search?q=${this.state.search}`;

    let config = {headers:{'user-key':'a891f8b02d6108b3151206aa38241e85'} };

    axios.get(url, config)
    .then((ambilData)=>{
      this.setState({data: ambilData.data.restaurants})
    })
  }

    render () {

      const data = this.state.data.map((x,index) => {

        let nama = x.restaurant.name;
        let kota = x.restaurant.location.city;
        let alamat = x.restaurant.location.address;
        let harga = (x.restaurant.average_cost_for_two/2);
        let gambar = x.restaurant.thumb;


        return(
                <Card key = {index} style = {{flex: 0}}>

                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: gambar}} />
                      <Body>
                        <Text>{nama}</Text>
                        <Text note>{kota}</Text>
                      </Body>
                    </Left>

                    <Right>
                      <Text>{harga}</Text>
                    </Right>
                  </CardItem>

                  <CardItem>
                    <Body>
                      <Image source = {{uri: gambar}} style = {{height: 350, width : 350, flex: 0}} />
                    </Body>
                  </CardItem>

                  <CardItem>
                    <Left>
                      <Text>{alamat}</Text>
                    </Left>
                  </CardItem>

                </Card>
        )
      })

        return (
            <Container>

              <Header searchBar color="red">
                <Item>
                  <Icon name = "search" />
                  <Input placeholder = "Cari makanan" onChangeText={(x)=> {this.setState({search: x})}} value={this.state.form}/>
                </Item>
              </Header>

              <Header>
                <Button color="red" onPress={()=> {this.get()}}>
                  <Text> LIHAT RESTO </Text>
                </Button>
              </Header>

              <Content>
                {data}
              </Content>
            </Container>
        )
    }
}

export default App;