import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation
		}
	}

	render() {
		const { navigation } = this.state;

		return (
			<SafeAreaView style={{ flex: 1 }} >
				<ScrollView contentContainerStyle={{ justifyContent: 'center', paddingVertical: 20 }} >

					{/* Heading */}
					<View style={styles.container} >
						<Text style={styles.headingStyle} >
							Welocome 
						</Text>
						<View style={styles.divider} />
					</View>

				</ScrollView>
			</SafeAreaView>
		
		);
	}
}

const styles = StyleSheet.create({
	container: { 
		margin: 10,
		paddingTop: 20, 
		alignItems: 'center' 
	},
	headingStyle: { 
		fontSize: 26, 
		fontWeight: 'bold', 
		textAlign: 'center' 
	},
	divider: { 
		height: 4, 
		width: 200, 
		borderRadius: 20, 
		margin: 10, 
		backgroundColor: '#000' 
	},
	tile: { 
		paddingVertical: 10, 
		paddingHorizontal: 15, 
		borderRadius: 10, 
		backgroundColor: 'lightblue', 
		elevation: 15 
	},
	tileText: { 
		fontSize: 20, 
		textAlign: 'center', 
		fontWeight: 'bold' 
	}
});