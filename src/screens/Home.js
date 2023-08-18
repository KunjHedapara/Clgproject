// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import { Box, Button, Row, Stack } from 'native-base';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import store from '../redux/store';
import { getAttendance } from '../services/Services';
import moment from 'moment';

const Home = ({ route, props, navigation }) => {



  const [userData, setUserData] = useState(store.getState().login?.userData)
  const [attendancecount, setattendancecount] = useState(0)


  useEffect(() => {
    getAttendanceData()
    console.log('userData', store.getState().login?.userData)

  }, []);

  const getAttendanceData = () => {

    let data = {
      userId: userData.userId,
      month: parseInt(moment().format("MM")),
      year: parseInt(moment().format("YYYY")),
    }
    getAttendance(data, bindAtt, attError)


  }


  const bindAtt = (res) => {
    console.log('res', res)
    //setIsLoading(false)
    //setShowAlert(true)
    setattendancecount(res.length)
  }

  const attError = () => {
    //setIsLoading(false)

    Alert.alert(`Attendance can not get`)
    //setShowAlert(true)
  }

  return (
    <Stack space={3} justifyContent="space-between" style={{ backgroundColor: '#0A99AB' }}>
      <Box style={{ height: 120, marginBottom: 20, backgroundColor: '#B578B2' }}>
        <Box style={{ top: 45 }}><View><Text style={styles.usertxt1}>Welcome,</Text></View>
          <View><Text style={styles.usertxt2}>{userData.userFullName}</Text></View>
        </Box>
        <View><Image source={{ uri: userData.userImage }} style={styles.userimg}></Image></View>
      </Box>

      <Box>
        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 15, color: '#D9D6D1', marginBottom: 25 }}>Employee Summary</Text>
      </Box>
      <Box style={{ flexDirection: 'row' }}>
        <Box style={styles.card1}>
          <Text style={styles.cardtxtn1}>{attendancecount}</Text>
          <Text style={styles.cardtxth1}>Attendadnce</Text>
        </Box>
        <Box style={styles.card2}>
          <Text style={styles.cardtxtn2}>0</Text>
          <Text style={styles.cardtxth2}>Holiday</Text>
        </Box>
      </Box>
      {/* <Box style={{ flexDirection: 'row' }}>
        <Box style={styles.card3}>
          <Text style={styles.cardtxtn3}>25</Text>
          <Text style={styles.cardtxth3}>Attendance</Text>
        </Box>
       
      </Box> */}
      <Button style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#B1A0C6',
        marginLeft: 240,
        marginTop: 265
      }}
        onPress={() => { navigation.navigate('AddImage') }}>
        <Image source={require('../assets/icon/camera.png')} style={{ width: 70, height: 70 }}></Image></Button>
    </Stack >
  );
}

const styles = StyleSheet.create({

  userimg: {
    height: 80,
    width: 80,
    right: 20,
    top: -15,
    position: 'absolute',
    borderRadius: 40
  },
  usertxt1: {
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 15,
    color: '#D9D6D1'
  },
  usertxt2: {
    fontSize: 20,
    color: "#D9D6D1",
    fontWeight: "bold",
    paddingLeft: 15
  },
  card1: {
    backgroundColor: '#9FBECB',
    height: 100,
    width: 150,
    borderRadius: 10,
    marginLeft: 20,
  },
  card2: {
    backgroundColor: '#9FBECB',
    height: 100,
    width: 150,
    borderRadius: 10,
    marginLeft: 20,
  },
  card3: {
    backgroundColor: 'lightblue',
    height: 100,
    width: 360,
    borderRadius: 10,
    marginLeft: 20,
  },
  card4: {
    backgroundColor: 'lightblue',
    height: 100,
    width: 170,
    borderRadius: 10,
    marginLeft: 20,
  },
  cardtxth1: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 30,
    color: '#D9D6D1'
  },
  cardtxth2: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 30,
    color: '#D9D6D1'
  },
  cardtxth3: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 20,
    color: 'blue'
  },
  cardtxth4: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 20,
    color: 'blue'
  },
  cardtxtn1: {
    fontSize: 25,
    left: 120,
    top: 15,
    color: '#376F8B'
  },
  cardtxtn2: {
    fontSize: 25,
    left: 120,
    top: 15,
    color: '#376F8B'
  },
  cardtxtn3: {
    fontSize: 25,
    left: 310,
    top: 15,
    color: 'blue'
  },
  cardtxtn4: {
    fontSize: 25,
    left: 130,
    top: 15,
    color: 'orange'
  },
})
export default Home;