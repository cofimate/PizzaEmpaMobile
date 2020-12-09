import React, { Component } from 'react';
import Home from './HomeComponent';
import { View, Platform, StyleSheet,ScrollView, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchMenu, fetchRecipes  } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
import SafeAreaView from 'react-native-safe-area-view';
import Favorites from './FavoritesComponent';

const mapDispatchToProps = {
    fetchMenu,
    fetchRecipes
};

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#a88e32'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


const MenuNavigator = createStackNavigator(
    {
        Reservation: { screen: Menu }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#a88e32'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='tree'
                type='font-awesome'
                //iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);