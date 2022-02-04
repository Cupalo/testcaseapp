import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Import Add Tab Screens
import ListData from './DrawerScreens/ListData';

import ProfileScreen from './DrawerScreens/ProfileScreen';

import MyAccountScreen from './DrawerScreens/MyAccountScreen';
import Dashboard from './DrawerScreens/Dashboard';
import DetailData from './DrawerScreens/DetailData';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function DashboardTab () {
	return (
		<Stack.Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				headerStyle: { backgroundColor: '#000' },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerTitleStyle: { fontWeight: 'bold' }
			}}
		>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ title: 'Dashboard' }}/>
		</Stack.Navigator>
	);
}

function ListDataTab () {
	return (
		<Stack.Navigator
			initialRouteName="ListData"
			screenOptions={{
				headerStyle: { backgroundColor: '#000' },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerTitleStyle: { fontWeight: 'bold' }
			}}
		>
			<Stack.Screen
				name="ListData"
				component={ListData}
				options={{ title: 'List Data' }}/>
			<Stack.Screen
				name="DetailData"
				component={DetailData}
				options={{ title: 'Detail Data' }}/>
		</Stack.Navigator>
	);
}

function SettingsTab () {
	return (
		<Stack.Navigator
			initialRouteName="ProfileScreen"
			screenOptions={{
				headerStyle: { backgroundColor: '#000' },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerTitleStyle: { fontWeight: 'bold' }
			}}
		>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{ title: 'Profile' }}/>
			<Stack.Screen
				name="MyAccountScreen"
				component={MyAccountScreen}
				options={{ title: 'My Account' }}/>
		</Stack.Navigator>
	);
}

function MaterialBottomNavigation () {
	return (
		<Tab.Navigator
			initialRouteName="ListData"
			activeColor="#03a9f4"
			inactiveColor="#babcbe"
			barStyle={{ backgroundColor: '#000' }}
			shifting={true}
		>
			<Tab.Screen
				name="DashboardTab"
				component={DashboardTab}
				
				options={{
					tabBarLabel: 'Dashboard',
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="dashboard"
							color={color}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="ListDataTab"
				component={ListDataTab}
				
				options={{
					tabBarLabel: 'List Data',
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="view-list"
							color={color}
							size={26}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="SettingsTab"
				component={SettingsTab}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="settings"
							color={color}
							size={26}
						/>
					),
				}}
			/>

		</Tab.Navigator>
	);
}


export default MaterialBottomNavigation;