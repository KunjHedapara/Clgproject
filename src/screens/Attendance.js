//import liraries
import React, { Component, useEffect } from 'react';
import ImageResizer from 'react-native-image-resizer';
import RNFS from 'react-native-fs';
import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Camera from '../components/camera/Camera';
import store from '../redux/store';
import { addAttendance, matchFace } from '../services/Services';
import moment from 'moment/moment';
import { Box, Button, FormControl, Input, Modal, Select } from 'native-base';

const Attendance = ({ route }) => {

    const [userData, setUserData] = useState(store.getState()?.login?.userData)

    useEffect(() => {
        console.log('store.getState()?.login?.userData', store.getState()?.login?.userData)
    }, [])



    const onCapture = (image64, uri) => {

        let compressFormat = 'PNG' // or 'PNG'
        let quality = 100 // out of 100

        let captureTime = moment().format("HH:mm:ss")

        ImageResizer.createResizedImage(uri, 640, 640, compressFormat, quality).then((resizedImageUri) => {

            //setIsLoading(true)

            console.log('resizedImageUri', resizedImageUri)

            RNFS.readFile(resizedImageUri?.uri, 'base64')
                .then(img => {

                    const data = {
                        id: userData.userName
                        , image64: img
                    }
                    matchFace(data, faceMatched, errorUploading)
                });

            const faceMatched = (res) => {

                console.log('res+++>', res)
                if (res.code == 200) {

                    let data = {
                        employeeId: userData.userId,
                        inDate: moment().format("YYYY/MM/DD"),
                        aMonth: parseInt(moment().format("MM")),
                        aYear: parseInt(moment().format("YYYY")),
                        inTime: captureTime
                    }
                    addAttendance(data, attAdded, attError)
                }
                else {
                    //setIsLoading(false)
                    Alert.alert('Sorry !', `User not found`)
                    //setShowAlert(true)
                }
            }
            const errorUploading = (res) => {
                console.log('res', res)
            }


            // resizeImageUri is the URI of the new image that can now be displayed, uploaded...
        }).catch((err) => {
            Alert.alert('Error !', err)
            // Oops, something went wrong. Check that the filename is correct and
            // inspect err to get more details.
        });
    }

    const attAdded = (res) => {
        //setIsLoading(false)
        Alert.alert(`Attendance done !`)
        //setShowAlert(true)
    }

    const attError = () => {
        //setIsLoading(false)
        Alert.alert(`Face not matching. Try again`)
        //setShowAlert(true)
    }

    return (
        <>
            {/* {isLoading && <Loader />} */}
            <Box flex={1}>
                <Camera buttonText={'Punch In'} onCapture={onCapture} />
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

export default Attendance;