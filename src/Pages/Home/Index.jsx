/* eslint-disable prettier/prettier */
import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import AppDrawer from '../../Common/AppDrawer';
import { NavigationContainer } from '@react-navigation/native';
import AppBottomNav from '../../Common/AppBottomNav';

const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <NativeBaseProvider>
                <AppDrawer />
                <AppBottomNav />
                <Text>home</Text>
            </NativeBaseProvider>
        </NavigationContainer>
    );
};

export default Home;