import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { Stack, VStack, Button, Box } from 'native-base';
const Login = (props) => {
  return (
    <ImageBackground source={require('../assets/images/bgimage.jpg')} style={styles.backgroundStyle}>
      <Box style={styles.overley}></Box>
      <Stack space={3} alignItems="center">
        <VStack space={3}>
          <Box flex={0.7}>
            <Text style={styles.wellcome}>
              Welcome to
            </Text>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
              Digital Register
            </Text>
          </Box>
          <Box style={{ width: 325 }}>
            <TextInput placeholder="Username" placeholderTextColor="lightgray" style={styles.input} />
            <TextInput placeholder="Password" placeholderTextColor="lightgray" style={styles.input} />
          </Box>
          <Button
            onPress={() => props.navigation.navigate('DrawerNavigation')}
            title="Left button" style={styles.btn}>
            <Text style={styles.logIn}>Login</Text>
          </Button>
          <Box>
            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', marginVertical: 10 }}
              onPress={() => props.navigation.navigate('SignUp')}>
              Don't have an account? SignUp here.
            </Text>
            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', marginVertical: 10 }}
              onPress={() => props.navigation.navigate('Forgot')}>Forgot password</Text>
          </Box>
        </VStack>
      </Stack>
    </ImageBackground >
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 700
  },
  overley: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    top: 0, right: 0, left: 0, bottom: 0
  },
  wellcome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    color: '#fff',
    borderBottomColor: 'lightgray',
    fontSize: 25,
    marginBottom: 10
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#fff',
    alignContent: 'center',
    height: 45,
    borderRadius: 0
  },
  logIn: {
    fontWeight: 'bold',
    fontSize: 20
  }

});
export default Login;