import { VStack, Stack, Box } from 'native-base';
import React from 'react';
import { ImageBackground, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {


    return (

        <Stack>
            <VStack>
                <ImageBackground source={require('../assets/images/bgimage.jpg')} style={styles.backgroundStyle}>
                    <Box style={styles.overley}></Box>
                    <Box><Text style={styles.overleyText}>Kunj Patel</Text></Box>
                </ImageBackground>
                <Box><Text style={styles.idText}>1234567</Text></Box>
                <Box><Image source={require('../assets/icon/kunj.png')} style={styles.userProfile}></Image></Box>
                <Box style={styles.profileCard}><Text style={styles.profileText}>App Developer</Text></Box>
                <Box style={styles.profileCard}><Text style={styles.profileText}>Ahmedabad, India</Text></Box>
                <Box style={styles.profileCard}><Text style={styles.profileText}>kunj123@gmail.com</Text></Box>
                <Box style={styles.profileCard}><Text style={styles.profileText}>9976248627</Text></Box>
                <Box style={styles.profileCard}><Text style={styles.profileText}>Last online 23 min ago</Text></Box>

            </VStack>
        </Stack>
    )
};
const styles = StyleSheet.create({
    userProfile: {
        height: 120,
        width: 120,
        marginTop: 20,
        position: 'absolute',
        left: 10,
        top: -105,
        borderRadius: 60
    },
    backgroundStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        position: 'relative'
    },
    overley: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0, right: 0, left: 0, bottom: 0
    },
    overleyText: {
        color: '#fff',
        fontSize: 20,
        top: 65,
        left: -10
    },
    idText: {
        color: 'rgba(0,0,0,0.6)',
        top: 10,
        left: 150,
        fontSize: 17,
        fontWeight: 'bold'
    },
    profileCard: {
        left: 150,
        top: 35,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
        paddingBottom: 15
    },
    profileText: {
        paddingTop: 30,
        fontWeight: 'bold',
        fontSize: 16,
    },
})

export default Profile;