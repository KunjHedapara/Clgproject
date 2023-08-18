// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import { Box, Row, Stack } from 'native-base';
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet
} from 'react-native';

const Home = () => {
  return (
    <Stack space={3} justifyContent="space-between">
      <Box style={{ height: 140, marginBottom: 20, backgroundColor: 'lightblue' }}>
        <Box style={{ top: 45 }}><View><Text style={styles.usertxt1}>Welcome,</Text></View>
          <View><Text style={styles.usertxt2}>Kunj Patel</Text></View>
        </Box>
        <View><Image source={require('../assets/icon/kunj.png')} style={styles.userimg}></Image></View>
      </Box>

      <Box>
        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 15, color: 'blue', marginBottom: 25 }}>Employee Summary</Text>
      </Box>
      <Box style={{ flexDirection: 'row' }}>
        <Box style={styles.card1}>
          <Text style={styles.cardtxtn1}>0</Text>
          <Text style={styles.cardtxth1}>Leave</Text>
        </Box>
        <Box style={styles.card2}>
          <Text style={styles.cardtxtn2}>1</Text>
          <Text style={styles.cardtxth2}>Salary</Text>
        </Box>
      </Box>
      <Box style={{ flexDirection: 'row' }}>
        <Box style={styles.card3}>
          <Text style={styles.cardtxtn3}>1</Text>
          <Text style={styles.cardtxth3}>Attendance</Text>
        </Box>
        <Box style={styles.card4}>
          <Text style={styles.cardtxtn4}>1</Text>
          <Text style={styles.cardtxth4}>Loan</Text>
        </Box>
      </Box>
    </Stack >
  );
}

const styles = StyleSheet.create({

  userimg: {
    height: 80,
    width: 80,
    right: 20,
    top: -20,
    position: 'absolute',
    borderRadius: 40
  },
  usertxt1: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 15,
    color: 'gray'
  },
  usertxt2: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    paddingLeft: 15
  },
  card1: {
    backgroundColor: 'lightyellow',
    height: 100,
    width: 170,
    borderRadius: 10,
    marginLeft: 20,
  },
  card2: {
    backgroundColor: 'pink',
    height: 100,
    width: 170,
    borderRadius: 10,
    marginLeft: 20,
  },
  card3: {
    backgroundColor: 'lightblue',
    height: 100,
    width: 170,
    borderRadius: 10,
    marginLeft: 20,
  },
  card4: {
    backgroundColor: 'lightgreen',
    height: 100,
    width: 170,
    borderRadius: 10,
    marginLeft: 20,
  },
  cardtxth1: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 20,
    color: 'gray'
  },
  cardtxth2: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 20,
    color: 'gray'
  },
  cardtxth3: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 20,
    color: 'gray'
  },
  cardtxth4: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
    top: 20,
    color: 'lightred'
  },
  cardtxtn1: {
    fontSize: 25,
    left: 130,
    top: 15,
    color: 'red'
  },
  cardtxtn2: {
    fontSize: 25,
    left: 130,
    top: 15,
    color: 'green'
  },
  cardtxtn3: {
    fontSize: 25,
    left: 130,
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