import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { Box, Button, Stack, View } from 'native-base';
import React from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, } from 'react-native';


const Varification = (props) => {


    return (

        <Box style={{ top: 190 }}>
            <Stack space={3} alignItems="center">
                <Text style={styles.mainTxt}>Enter Varification code</Text>
                <Box style={{ flexDirection: "row", width: 300, justifyContent: 'space-between' }}>
                    <TextInput style={styles.input}></TextInput>
                    <TextInput style={styles.input}></TextInput>
                    <TextInput style={styles.input}></TextInput>
                    <TextInput style={styles.input}></TextInput>
                </Box>
                <Text style={{ fontSize: 15, top: 30 }}>If you didn't receive code! Resend</Text>
                <Button onPress={() => props.navigation.navigate('Reset')} style={styles.btn}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Verify</Text></Button>
            </Stack>
        </Box>
    )
};

const styles = StyleSheet.create({

    mainTxt: {
        fontSize: 25,
        marginBottom: 30
    },

    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: 50,
        fontSize: 20,
        textAlign: 'center'
    },
    btn: {
        width: 300,
        borderRadius: 0,
        marginTop: 50,
        backgroundColor: 'orange'
    },

})
export default Varification;