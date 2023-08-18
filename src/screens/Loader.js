import React, { useState } from 'react';
import {
    Alert,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
import { Stack, VStack, Button, Box } from 'native-base';
import { employeelogin } from '../services/Services';

const Loader = (props) => {


    return (
        <Box flex={1} backgroundColor={'white'} alignItems={'center'} justifyContent={'center'}>
            Loading. Please wait...
        </Box>
    )

}

export default Loader;