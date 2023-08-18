//import liraries
import React, { Component, useEffect } from 'react';
import ImageResizer from 'react-native-image-resizer';
import RNFS from 'react-native-fs';
import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Camera from '../../components/camera/Camera';
import store from '../../modules/redux/store';
import { addAttendance, matchFace } from '../../services/Services';
import moment from 'moment/moment';
import { Box, Button, FormControl, Input, Modal, Select } from 'native-base';

// create a component
const PunchIn = () => {

    const [userData, setUserData] = useState(store.getState()?.login?.userData)

    const onCapture = (image64, uri) => {

            let compressFormat = 'PNG' // or 'PNG'
            let quality = 100 // out of 100

            let captureTime = moment().format("HH:mm:ss")

            ImageResizer.createResizedImage(uri, 640, 640, compressFormat, quality).then((resizedImageUri) => {

                //setIsLoading(true)

                RNFS.readFile(resizedImageUri?.uri, 'base64')
                    .then(img => {

                        const data = {
                            id: selectedUser
                            , image64: img
                        }

                        matchFace(data, faceMatched, errorUploading)

                    });

                const faceMatched = (res) => {

                    if (res.code == 200) {

                        let data = {
                            employeeId: res.faceData,
                            inDate: moment().format("YYYY/MM/DD"),
                            outDate: null,
                            aMonth: parseInt(moment().format("MM")),
                            aYear: parseInt(moment().format("YYYY")),
                            inTime: captureTime,
                            outTime: null,
                            filledBy: userData.userId,
                            reason: reason
                        }
                        addAttendance(data, attAdded, attError)
                    }
                    else {
                        //setIsLoading(false)
                        Alert.alert('Sorry !', `User not found`)
                        //setShowAlert(true)
                    }
                }
                setReason("")
                const errorUploading = (res) => {
                    setIsLoading(false)
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
        setAlertMesssage(`Attendance done for user: ${res.name} from Location: ${res.siteName}`)
        //setShowAlert(true)
    }

    const attError = () => {
        //setIsLoading(false)
        setAlertMesssage(`Face not matching. Try again`)
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

//make this component available to the app
export default PunchIn;
