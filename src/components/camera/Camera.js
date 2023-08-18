import { Box, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const Camera = ({ initialProps, onCapture, buttonText = "" }) => {

    const PendingView = () => (
        <Box
            backgroundColor={'white'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Text>Waiting</Text>
        </Box>
    );


    const [side, setSide] = useState(RNCamera.Constants.Type.front)
    const [capturedImage, setCapturedImage] = useState("");


    const [
        { cameraRef, type, isRecording },
        { recordVideo, setIsRecording },
    ] = useCamera(initialProps);


    const changeSide = (cam) => {
        console.log('cam', cam)

        if (side === RNCamera.Constants.Type.front)
            setSide(RNCamera.Constants.Type.back)
        else
            setSide(RNCamera.Constants.Type.front)
    }

    const captureImage = async (cam) => {
        const options = { quality: 1, base64: true };
        const data = await cam.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log("Done")

        console.log('data', data)

        setCapturedImage("data:image/png;base64," + data?.base64)

        onCapture("data:image/png;base64," + data?.base64, data?.uri)
    }

    return (
        <Box flex={1} alignItems={'flex-end'} justifyContent={'flex-end'}>

            <RNCamera
                pictureSize={"100x100"}
                style={styles.preview}
                type={side}
                ratio={'1:1'}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            >
                {({ camera, status, recordAudioPermissionStatus }) => {
                    if (status !== 'READY') return (<PendingView />);
                    return (
                        <>

                            <Box>
                                <Image source={{ uri: capturedImage }} alt="Image" width={100} height={150} resizeMode={'cover'} />
                            </Box>
                            <Box flexDir={'row'} justifyContent={'space-between'}>
                                <TouchableOpacity onPress={() => changeSide(camera)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> Change Side </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => captureImage(camera)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> {buttonText} </Text>
                                </TouchableOpacity>
                            </Box>
                        </>
                    );
                }}
            </RNCamera>

            {
                !isRecording && (
                    <TouchableOpacity
                        onPress={async () => {
                            try {
                                setIsRecording(true);
                                const data = await recordVideo();
                            } finally {
                                setIsRecording(false);
                            }
                        }}
                        style={{ width: '100%' }}
                    />
                )
            }
        </Box >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

export default Camera;