import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { Box, Button, Stack, View } from 'native-base';
import React from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, } from 'react-native';


const Reset = (props) => {


    return (

        <Box style={{ top: 190 }}>
            <Stack space={3} alignItems="center">
                <Box>
                    <Text style={styles.lable}>Enter new Password</Text>
                    <TextInput style={styles.input} placeholder='8 Charecter at least'></TextInput>
                </Box>
                <Box style={{ marginVertical: 15 }}>
                    <Text style={styles.lable}>Confirm Password</Text>
                    <TextInput style={styles.input} placeholder='*********'></TextInput>
                </Box>
                <Button onPress={() => props.navigation.navigate('Login')} style={styles.btn}>Reset</Button>
            </Stack>
        </Box>
    )
};

const styles = StyleSheet.create({

    lable: {
        fontSize: 25,
        color: '#000'
    },
    input: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'gray',
        width: 300,
        fontSize: 20,
        padding: 10,
        marginTop: 20
    },
    btn: {
        fontSize: 20,
        width: 200,
        borderRadius: 0,
        backgroundColor: 'orange',
        marginTop: 20
    }

})
export default Reset;