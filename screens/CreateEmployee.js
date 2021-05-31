import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';



const createEmployee = () => {
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [model, setModel] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput
                label="Name"
                style={styles.inpuStyle}
                value={Name}

                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="phone"
                style={styles.inpuStyle}
                value={phone}
                keyboardType="number-pad"
                theme={theme}
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label="email"
                style={styles.inpuStyle}
                value={email}
                keyboardType="email-address"
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="salary"
                style={styles.inpuStyle}
                value={salary}

                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
            {
                /**
                 * <TextInput
                    label="picture"
                    style={styles.inpuStyle}
                    value={picture}
    
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setPicture(text)}
                />
                 
                 */
            }

            <Button style={styles.inpuStyle}
                icon="upload"
                mode="contained"
                theme={theme}
                onPress={() => setModel(true)}>
                Upload Image
            </Button>
            <Button style={styles.inpuStyle}
                icon="content-save"
                mode="contained"
                theme={theme}
                onPress={() => setModel(true)}>
                Save
            </Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={model}
                onRequestClose={() => {
                    setModel(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button theme={theme} icon="camera" mode="contained" onPress={() => setModel(false)}>
                            Camara
                    </Button>
                        <Button theme={theme} icon="image-area" mode="contained" onPress={() => setModel(false)}>
                            Galery
                    </Button>
                    </View>
                    <Button theme={theme} onPress={() => setModel(false)}>
                        cancel
                    </Button>
                </View>

            </Modal>
        </View>
    )
}
const theme = {
    colors: {
        primary: "#006aff"
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inpuStyle: {
        margin: 15
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10

    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    }
})

export default createEmployee