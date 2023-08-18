import { VStack, Stack, Box, ScrollView } from 'native-base';
import React from 'react';
import { useState } from 'react';
import { ImageBackground, Text, Image, StyleSheet } from 'react-native';
import store from '../redux/store';
import { useEffect } from 'react';

const Profile = () => {

    const [userData, setUserData] = useState(store.getState().login?.userData)

    useEffect(() => {
        console.log('userData', store.getState().login?.userData)

    }, []);

    return (
        <ScrollView>
            <Stack>
                <VStack>
                    <ImageBackground source={require('../assets/images/bgimage.jpg')} style={styles.backgroundStyle}>
                        <Box style={styles.overley}></Box>
                        <Box><Text style={styles.overleyText}>{userData.userFullName}</Text></Box>
                    </ImageBackground>
                    <Box style={{ backgroundColor: '#B1A0C6' }}>
                        <Box><Text style={styles.idText}>ID:  {userData.userId}</Text></Box>
                        <Box><Image source={{ uri: userData.userImage }} style={styles.userProfile}></Image></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userEmail}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userMobilenumber}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userAlternumebr}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userGender}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userRole}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userAddress}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userCity}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}>{userData.userState}</Text></Box>
                        <Box style={styles.profileCard}><Text style={styles.profileText}></Text></Box>
                    </Box>
                </VStack>
            </Stack>
        </ScrollView>
    )

};
const styles = StyleSheet.create({
    userProfile: {
        height: 100,
        width: 100,
        marginTop: 20,
        position: 'absolute',
        left: 10,
        top: -90,
        borderRadius: 50
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
        left: 30
    },
    idText: {
        color: '#D9D6D1',
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
        color: '#D9D6D1',
    },
})

export default Profile;