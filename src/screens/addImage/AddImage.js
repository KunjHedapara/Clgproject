//import liraries
import React, { Component, useEffect } from 'react';
import ImageResizer from 'react-native-image-resizer';
import RNFS from 'react-native-fs';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camera from '../../components/camera/Camera';
import AwesomeAlert from 'react-native-awesome-alerts';
import Loader from '../Loader';
import moment from 'moment/moment';
import { Box, Button, FormControl, Input, Modal, Select } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";
import store from '../../redux/store';
import { AddUserImage } from '../../services/Services';

// create a component
const AddImage = ({ route, navigation }) => {


    const [userData, setUserData] = useState(store.getState().login?.userData)

    useEffect(() => {
        console.log('userData', store.getState().login?.userData)

    }, []);

    const onCapture = (image64, uri) => {

        let compressFormat = 'PNG' // or 'PNG'
        let quality = 100 // out of 100

        ImageResizer.createResizedImage(uri, 640, 640, compressFormat, quality).then((resizedImageUri) => {


            RNFS.readFile(resizedImageUri?.uri, 'base64')
                .then(img => {

                    const data = {
                        userName: userData?.userName,
                        id: userData.userId, image64: img
                    }

                    console.log('data', data)
                    AddUserImage(data, userImageUploaded, errorUploading)
                });

            const userImageUploaded = (res) => {


                console.log('res===>', res)


                if (res.imageUploaded) {
                    navigation.navigate("Home")
                }
            }

            const errorUploading = (res) => {
                console.log('errorUploading', res)
            }



            // resizeImageUri is the URI of the new image that can now be displayed, uploaded...
        }).catch((err) => {

            console.log('err', err)
            // Oops, something went wrong. Check that the filename is correct and
            // inspect err to get more details.
        });



    }
    return (
        <>
            <Box backgroundColor={'#ffffff'} flex={1} justifyContent={'center'} alignItems={'center'} >
                <Box justifyContent={'center'} w={'100%'} alignItems={'center'} >
                    <Box w={'90%'} m={3}>

                    </Box>
                </Box>
                <Box flex={1}>
                    <Camera buttonText={'Add Image'} onCapture={onCapture} />
                </Box>

            </Box>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default AddImage;
