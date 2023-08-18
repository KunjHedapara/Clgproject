import { Box, Button, Flex, ScrollView, Select } from 'native-base';
import { flexbox } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import { useState } from 'react';
import { Image } from 'react-native';
import { ImageBackground, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import { addEmployee } from '../services/Services';

const SignUp = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setSubmit] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [cPass, setCPass] = useState("");
    const [altNumber, setAltNumber] = useState("");
    const [doj, setDoj] = useState(new Date());
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState(new Date())
    const [dob, setDOB] = useState(new Date())
    const [role, setRole] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [opendoj, setOpenDOJ] = useState(false)
    const [opendob, setOpenDOB] = useState(false)


    const handleSignUp = () => {
        //props.navigation.navigate('Login')


        if (password != cPass) {
            Alert.alert(
                `Sorry !`, `Password does not match`
            )
        }
        else {

            let data = {
                username: userName,
                password: password,
                cPass: cPass,
                lastLogin: moment().format("YYYY-MM-DD HH:mm:ss"),
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                mobileNumber: mobileNumber,
                altNumber: altNumber,
                doj: doj,
                dob: dob,
                role: role,
                address: address,
                city: city,
                state: state,
                zip: zip
            }

            addEmployee(data, employeeAdded)

            // debugger
            // if (/^([0-9])$/.test(firstName)) {
            //     Alert.alert(
            //         `Sorry !`, `First Name, Last Name or Mobile number is invalid. Please check.`
            //     )
            // }
        }
    }

    const resetForm = () => {
        setUserName("");
        setPassword("");
        setSubmit(false)
        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setCPass("");
        setAltNumber("");
        setDoj(new Date());
        setEmail("")
        setGender("")
        setDate(new Date())
        setDOB(new Date())
        setRole("")
        setAddress("")
        setCity("")
        setState("")
        setZip("")
        setOpenDOJ(false)
        setOpenDOB(false)

    }

    const employeeAdded = (res) => {
        console.log('res', res)
        if (res) {
            Alert.alert(
                `Success !`, `Employee added successfully.`
            )
            resetForm()
        }
        else {
            Alert.alert(
                `Sorry !`, `There was some issue while adding employee.`
            )
        }
    }



    const addNewGender = () => {
        let data = {
            lName: lName,
            lTo: lTo,
            lFrom: lFrom,
            lType: lType
        }
        addGender(data, leaveAdded)
    }
    return (
        <ImageBackground source={require('../assets/images/bgimage.jpg')} style={styles.backgroundStyle}>
            <Box style={styles.overley}>
            </Box>
            <Box height={70} marginTop={30}>
                <Text style={styles.maintxt}>Create your Account</Text>
            </Box>
            <ScrollView>
                <TextInput onChangeText={(text) => { setUserName(text) }} placeholder="UserName" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setPassword(text) }} placeholder="Password" placeholderTextColor="lightgray" style={styles.input} secureTextEntry={true} />
                <TextInput onChangeText={(text) => { setCPass(text) }} placeholder="Confirm Password" placeholderTextColor="lightgray" style={styles.input} secureTextEntry={true} />
                <TextInput onChangeText={(text) => { setFirstName(text) }} placeholder="First Name" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setLastName(text) }} placeholder="Last Name" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setEmail(text) }} placeholder="E mail" placeholderTextColor="lightgray" style={styles.input} />
                <Select style={{ fontSize: 20, color: 'lightgray', }} selectedValue={gender} accessibilityLabel="Gender" placeholder="Gender" placeholderTextColor='lightgray' _selectedItem={{
                    bg: "teal.600"
                }} mt={1} onValueChange={itemValue => setGender(itemValue)}>
                    <Select.Item label={'male'} value={'Male'} />
                    <Select.Item label={'female'} value={'Female'} />
                    <Select.Item label={'other'} value={'Other'} />
                </Select>
                <TextInput onChangeText={(text) => { setMobileNumber(text) }} placeholder="Mobile Number" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setAltNumber(text) }} placeholder="Alt Number" placeholderTextColor="lightgray" style={styles.input} />
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <TextInput onChangeText={(text) => { setDoj(text) }} value={moment(doj).format("DD-MM-YYYY")} placeholder="Join Date" placeholderTextColor="lightgray" style={styles.inputJ} />
                    <Button
                        onPress={() => { setOpenDOJ(true) }}
                        title='Join Date' style={{ height: 65, top: 5, backgroundColor: 'white', width: 90 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Select Date</Text>
                    </Button>
                    <DatePicker
                        modal
                        mode='date'
                        open={opendoj}
                        date={doj}
                        onConfirm={(date) => {
                            setOpenDOJ(false)
                            setDoj(date)
                        }}
                        onCancel={() => {
                            setOpenDOJ(false)
                        }}
                    />
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <TextInput onChangeText={(text) => { setDOB(text) }} value={moment(dob).format("DD-MM-YYYY")} placeholder="DOB" placeholderTextColor="lightgray" style={styles.inputB} />
                    <Button
                        onPress={() => { setOpenDOB(true) }}
                        title='DOB' style={{ height: 65, top: 5, backgroundColor: 'white', width: 90 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Select Date</Text>
                    </Button>
                    <DatePicker
                        modal
                        mode="date"
                        open={opendob}
                        date={dob}
                        onConfirm={(date) => {
                            setOpenDOB(false)
                            setDOB(date)
                        }}
                        onCancel={() => {
                            setOpenDOB(false)
                        }}
                    />
                </Box>
                <TextInput onChangeText={(text) => { setRole(text) }} placeholder="Role" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setAddress(text) }} placeholder="Address" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setCity(text) }} placeholder="City" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setState(text) }} placeholder="State" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput onChangeText={(text) => { setZip(text) }} placeholder="Zip Code" placeholderTextColor="lightgray" style={styles.input} />
            </ScrollView>
            <Box height={50}>
                <Button
                    onPress={() => { handleSignUp() }}
                    title='SignUp' style={styles.btn}>
                    <Text style={styles.SignUp}>SignUp</Text>
                </Button>
            </Box>
        </ImageBackground>

    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    overley: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0, right: 0, left: 0, bottom: 0
    },
    maintxt: {
        color: '#fff',
        fontSize: 35,
    },
    input: {
        fontSize: 25,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: 300,
        color: "#fff",
        padding: 15,
        margin: 5
    },
    btn: {
        marginTop: 5,
        backgroundColor: '#fff',
        alignContent: 'center',
        height: 40,
        borderRadius: 10,
        width: 200
    },
    SignUp: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    img: {
        height: 25,
        width: 25,
    },

    inputJ: {
        fontSize: 25,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: 200,
        color: "#fff",
        padding: 15,
        margin: 5
    },
    inputB: {
        fontSize: 25,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: 200,
        color: "#fff",
        padding: 15,
        margin: 5
    },
})
export default SignUp;