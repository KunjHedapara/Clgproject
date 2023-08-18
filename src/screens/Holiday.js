import { Box, Button, FlatList, Text } from "native-base";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { addHoliday, getAttendance } from "../services/Services";
import { StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DatePicker from "react-native-date-picker";
import store from "../redux/store";
import { useEffect } from "react";
import moment from "moment";

const Holiday = () => {
    const [hName, setHName] = useState("")
    const [hDate, setHDate] = useState("")
    const [AttendanceData, setAttendanceData] = useState([])
    const [selected, setSelected] = useState("")
    const [opendoj, setOpenDOJ] = useState(false)
    const [doj, setDOJ] = useState(new Date())


    const addNewHoliday = () => {

        let data = {
            hName: hName,
            hDate: hDate
        }
        addHoliday(data, holidayAdded)
    }
    const holidayAdded = (res) => {

        //msg holiday added successfully !

        setHolidayData(res)

        console.log("Screen => ", res)
    }

    const [userData, setUserData] = useState(store.getState().login?.userData)

    useEffect(() => {

        let data = {
            userId: userData.userId,
            month: parseInt(moment().format("MM")),
            year: parseInt(moment().format("YYYY")),
        }
        getAttendance(data, bindAtt, attError)

    }, []);

    const bindAtt = (res) => {
        setAttendanceData(res)
    }

    const attError = () => {
        Alert.alert(`Attendance can not get`)
    }


    const renderItem = (item) => {
        data = item.item
        console.log('item', item)

        return (

            < Box key={item.index} style={{ display: 'flex', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10 }
            }>
                <Box style={{ left: 30 }}><Text>{data.UserID}</Text></Box>
                <Box style={{ left: 120 }}><Text>{data.userName}</Text></Box>
                <Box style={{ left: 200 }}><Text>{moment(data.InTime).format("hh:mm A")}</Text></Box>
            </Box >
        )
    }

    return (

        <>
            <Box style={{ backgroundColor: '#93CFC6', height: 700 }}>
                <Box><Text style={{ color: 'blue', fontSize: 20, marginTop: 20, fontWeight: 'bold', marginLeft: 10 }}>Attendance Dashboard</Text></Box>
                {/* <Box><Text style={{ color: 'gray', fontSize: 15, marginLeft: 10, marginTop: 20 }}>Today's Attendance</Text></Box> */}

                {/* <Button
                    onPress={() => { setOpenDOJ(true) }}
                    style={styles.btn}><Text style={{ color: 'white', fontWeight: '900' }}>Select Date</Text>
                </Button>
                <DatePicker
                    modal
                    open={opendoj}
                    date={doj}
                    onConfirm={(date) => {
                        setOpenDOJ(false)
                        setDOJ(date)
                    }}
                    onCancel={() => {
                        setOpenDOJ(false)
                    }}
                /> */}

                <Box><Text style={{ color: 'gray', fontSize: 15, marginLeft: 10, marginTop: 20, marginBottom: 20 }}>Attendance List</Text></Box>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <Box style={{ left: 30, marginBottom: 10 }}><Text style={{ color: 'gray' }}>User Id</Text></Box>
                    <Box style={{ left: 90 }}><Text style={{ color: 'gray' }}>Name</Text></Box>
                    <Box style={{ left: 220 }}><Text style={{ color: 'gray' }}>Out Time</Text></Box>
                </Box>
                <FlatList
                    data={AttendanceData}
                    renderItem={renderItem}
                    keyExtractor={item => item.index}
                />
            </Box>
        </>
    )
}

const styles = StyleSheet.create({

    btn: {
        width: 100,
        marginTop: 25,
        backgroundColor: 'blue',
        marginLeft: 10
    },
    attcard: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, borderBottomWidth: 1, borderBottomColor: 'lightgray' }
})

export default Holiday;