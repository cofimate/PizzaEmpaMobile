import React , {Component } from 'react';
import { View , Text,  Animated } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';


const mapStateToProps = state => {
    return {
        menu: state.menu,
        recipes: state.recipes
    };
};