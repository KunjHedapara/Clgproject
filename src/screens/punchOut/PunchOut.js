//import liraries
import React, { Component, useEffect } from 'react';
import ImageResizer from 'react-native-image-resizer';
import RNFS from 'react-native-fs';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camera from '../../components/camera/Camera';
import store from '../../modules/redux/store';
import { addAttendance, getAllUsersBasics, matchFace } from '../../modules/services/Services';
import AwesomeAlert from 'react-native-awesome-alerts';
import { COLORS } from '../../components/ui/colors/Colors';
import Loader from '../../components/ui/loading/Loading';
import moment from 'moment/moment';
import { Box, Button, FormControl, Input, Modal, Select } from 'native-base';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const PunchOut = () => {
    const [userData, setUserData] = useState(store.getState()?.login?.userData)
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMesssage] = useState("");
    const [attUser, setAttUser] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(0);
    const [placement, setPlacement] = useState(undefined);
    const outTime = store.getState()?.defaultValues?.outTime
    const lateTime = store.getState()?.defaultValues?.lateTime
    const [open, setOpen] = useState(false);
    const [reason, setReason] = useState("");
    const [isLate, setIsLate] = useState(false);


    const openModal = placement => {
        setOpen(true);
        setPlacement(placement);
    }
    useEffect(() => {

        let startTime = moment(moment().format("DD/MM/yyyy") + " " + outTime, "DD/MM/yyyy HH:mm:ss")
        let endTime = moment(moment().format("DD/MM/yyyy HH:mm:ss"), "DD/MM/yyyy HH:mm:ss")
        if (endTime.diff(startTime, 'minutes') > lateTime) {
            setIsLate(true)
            openModal()
        }
        getAllUsersBasics(bindUsers)

    }, [])

    const bindUsers = (res) => {
        setUserList(res)
    }

    useEffect(() => {

        setSelectedUser(userData?.userName)

    }, [userData])

    const onCapture = (image64, uri) => {


        if (isLate && reason == "") {
            openModal()
        }

        else {
            let compressFormat = 'PNG' // or 'PNG'
            let quality = 100 // out of 100

            let captureTime = moment().format("HH:mm:ss")

            ImageResizer.createResizedImage(uri, 640, 640, compressFormat, quality).then((resizedImageUri) => {
                setIsLoading(true)

                RNFS.readFile(resizedImageUri?.uri, 'base64')
                    .then(img => {
                        console.log('selectedUser', selectedUser);

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
                            inDate: null,
                            outDate: moment().format("YYYY/MM/DD"),
                            aMonth: parseInt(moment().format("MM")),
                            aYear: parseInt(moment().format("YYYY")),
                            inTime: null,
                            outTime: captureTime,
                            filledBy: userData.userId,
                            reason: reason

                        }

                        setAttUser(res.faceData)
                        addAttendance(data, attAdded, attError)
                    }
                    else {
                        setIsLoading(false)
                        setAlertMesssage(`User not found`)
                        setShowAlert(true)
                    }
                }

                const errorUploading = (res) => {
                    setIsLoading(false)
                    console.log('res', res)
                }


                // resizeImageUri is the URI of the new image that can now be displayed, uploaded...
            }).catch((err) => {
                setIsLoading(false)
                // Oops, something went wrong. Check that the filename is correct and
                // inspect err to get more details.
            });

        }

    }

    const attAdded = (res) => {
        setIsLoading(false)
        setAlertMesssage(`Punch-out done for user: ${res.name} from Location: ${res.siteName}`)
        setShowAlert(true)
    }

    const attError = () => {
        setIsLoading(false)
        setAlertMesssage(`Face not matching. Try again`)
        setShowAlert(true)
    }

    return (
        <>
            {isLoading && <Loader />}
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Punch Out"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={true}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="OK"
                confirmButtonColor={COLORS.primary}
                onCancelPressed={() => {
                    setShowAlert(false)
                }}
                onConfirmPressed={() => {
                    setShowAlert(false)

                }}
            />

            <Box backgroundColor={'#ffffff'} flex={1} justifyContent={'center'} alignItems={'center'} >
                <Box justifyContent={'center'} w={'100%'} alignItems={'center'} >
                    <Box w={'90%'} m={3}>
                        <FormControl >
                            <Select defaultValue={userData?.userName} onValueChange={value => { console.log(value); setSelectedUser(value) }} accessibilityLabel="Select User" placeholder="Select User" dropdownIcon={<Ionicons name='chevron-down' size={17} />}>
                                {userList.map((item, index) => {
                                    return (<Select.Item key={index} label={`${item.employeeCode} (${item.name})`} value={`${item.employeeCode}`} />)
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box flex={1}>
                    <Camera buttonText={'Punch Out'} onCapture={onCapture} />
                </Box>

            </Box>
            <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
                <Modal.Content maxWidth="350" >
                    <Modal.CloseButton />
                    <Modal.Header>Reason ?</Modal.Header>
                    <Modal.Body>
                        <FormControl mt="3">
                            <Input multiline onChangeText={text => setReason(text)} />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setOpen(false);
                                setReason("");
                            }}>
                                Cancel
                            </Button>
                            <Button onPress={() => {
                                setOpen(false);
                            }}>
                                Ok
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
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
export default PunchOut;
