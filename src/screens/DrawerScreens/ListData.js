
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView
} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const BASE_URL = 'https://jsonplaceholder.typicode.com';
//const APP_ID = '6081e1754a7541617d41334a';
const backgroundImg = 'https://i.pinimg.com/originals/2a/24/74/2a24740658e1910bcfedbbdd83098c4e.jpg'


const ListData = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  //console.log(data);

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await fetch(`${BASE_URL}/users`)
      .then((res) => res.json())
      .then((resJson) => { setData(resJson), console.log(resJson) })
      .catch(console.error)
      .finally(() => setIsloading(false));
  }

  // const getkey = async () => {
  //   try {
  //     await AsyncStorage.setItem("key", item.id)
  //     navigation.navigate("Dashboard")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const renderUser = ({item})=>{
		return(
			<TouchableOpacity onPress={async()=>{
        try {
          await AsyncStorage.setItem("index", item.name)
          console.log(item.name)
          navigation.navigate("DetailData")
        } catch (error) {
          console.log(error)
        }
      }}>
				<View style={styles.item}>
					<View style={styles.wrapText}>
						<Text style={styles.fontSize}>{`${item.name} `}</Text>
						<Text style={styles.fontSize}>{`${item.email} `}</Text>
						<Text style={styles.fontSize}>{`${item.website} `}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: backgroundImg }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      {
        isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={item => `key-${item.id}`}
            renderItem={renderUser}
            contentContainerStyle={{
              padding: 20
            }}
          />
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 18
  },
  image: {
    width: 100,
    height: imgHeight
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 30,
    padding: paddingItem
  },
  container: {
    flex: 1
  }

});

export default ListData;


// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

// export default class AddScreen extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			navigation: props.navigation
// 		}
// 	}

// 	render() {
// 		const { navigation } = this.state;

// 		return (
// 			<SafeAreaView style={{ flex: 1 }} >
// 				<ScrollView contentContainerStyle={{ justifyContent: 'center', paddingVertical: 20 }} >

// 					{/* Heading */}
// 					<View style={styles.container} >
// 						<Text style={styles.headingStyle} >
// 							Add Categories, Sub-Categories & Products
// 						</Text>
// 						<View style={styles.divider} />
// 					</View>

					

// 				</ScrollView>
// 			</SafeAreaView>
		
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: { 
// 		margin: 10,
// 		paddingTop: 20, 
// 		alignItems: 'center' 
// 	},
// 	headingStyle: { 
// 		fontSize: 26, 
// 		fontWeight: 'bold', 
// 		textAlign: 'center' 
// 	},
// 	divider: { 
// 		height: 4, 
// 		width: 200, 
// 		borderRadius: 20, 
// 		margin: 10, 
// 		backgroundColor: '#000' 
// 	},
// 	tile: { 
// 		paddingVertical: 10, 
// 		paddingHorizontal: 15, 
// 		borderRadius: 10, 
// 		backgroundColor: 'lightblue', 
// 		elevation: 15 
// 	},
// 	tileText: { 
// 		fontSize: 20, 
// 		textAlign: 'center', 
// 		fontWeight: 'bold' 
// 	}
// });