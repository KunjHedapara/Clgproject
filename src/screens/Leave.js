// import react, { Component } from 'react';
// import { View, Text, Picker, StyleSheet } from 'react-native';

import { Box, Button, Select, Text, TextArea } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { addleave } from "../services/Services";


const Leave = () => {
    const [lName, setLnamme] = useState("")
    const [lTo, setLTo] = useState("")
    const [lFrom, setLFrom] = useState("")
    const [lType, setLType] = useState("")
    const [leaveData, setleaveData] = useState([])
    const [selected, setSelected] = useState("")
    const [service, setService] = useState("")

    const leaves = ["Seek Leave", "Paid Leave", "Unpaid Leave", "Normal Leave", "Rest Leave"]

    const addNewleave = () => {
        let data = {
            lName: lName,
            lTo: lTo,
            lFrom: lFrom,
            lType: lType
        }
        addleave(data, leaveAdded)
    }

    const leaveAdded = (res) => {
        setleaveData(res)

        console.log("Screen => ", res)
    }


    return (
        <>
            <Box maxW="300" style={{ marginVertical: 40, marginLeft: 30, }}>
                <Select style={{ fontSize: 20 }} selectedValue={service} minWidth="330" accessibilityLabel="Choose Leave" placeholder="Choose Leave" placeholderTextColor='black' _selectedItem={{
                    bg: "teal.600"
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>

                    {leaves.map(item => {
                        return <Select.Item label={item} value={item} />
                    })}


                    {/* <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" /> */}
                </Select>

            </Box>

            {/* <Box style={{ margin: 30 }}>
                <TextInput placeholder="Leave Type" placeholderTextColor="black" style={styles.input} />
            </Box> */}
            <Box style={{ display: "flex", flexDirection: "row", marginLeft: 30 }}>
                <Box>
                    <TextInput placeholder="Start Date" placeholderTextColor="black" style={styles.card} />
                </Box>
                <Box style={{ marginLeft: 30 }}>
                    <TextInput placeholder="End Date" placeholderTextColor="black" style={styles.card} />
                </Box>
            </Box>
            <Box style={{ marginLeft: 30, marginRight: 30, marginTop: 40 }}>
                <TextArea placeholder="Reason" placeholderTextColor="black" style={styles.Rcard} />
            </Box>
            <Button style={styles.btn} onPress={(e) => { addNewleave() }}><Text style={{ fontSize: 20 }}>Submit Request</Text></Button>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        color: 'black',
        borderBottomColor: 'lightgray',
        fontSize: 25,
        paddingLeft: 15,
        borderRadius: 10
    },
    card: {
        borderWidth: 1,
        color: 'black',
        fontSize: 20,
        width: 150,
        paddingLeft: 15,
        borderRadius: 10
    },
    Rcard: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10
    },
    btn: {
        width: 200,
        marginTop: 60,
        marginLeft: 100,
        backgroundColor: 'lightblue'
    }
})

export default Leave;