import React from 'react';
import { StyleSheet, Text, View, Image, Linking,Platform  } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card,Button } from "react-native-paper";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";




const Profile=(props) => {
    const {id,name,picture,phone,salary,email,position}=props.route.params.item
    const openDialog=()=>{
        if(Platform.OS==="android"){
            Linking.openURL("tel:4442994241")
        }else{
            Linking.openURL("telprompt:4442994241")
        }
    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={styles.viewImageStyle}>
                <Image style={styles.ImageStyl}
                    source={{ uri: picture}}
                >

                </Image>
            </View>
            <View style={{ alignItems: "center",margin:20 }}>
                <Title >{name}</Title>
                <Text style={styles.myText}>{position}</Text>
            </View>
            <Card style={styles.myCard} onPress={()=>{
                Linking.openURL("mailto:yeicob_loredo@hotmail.com")
            }}>
                <View style={styles.cardContent}>
                    <Ionicons name="mail" size={32} color="#006aff" />
                    <Text style={styles.myText}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.myCard} onPress={()=>openDialog()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.myText}>{phone}</Text>
                </View>

            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <FontAwesome5 name="money-bill" size={32} color="#006aff" />
                    <Text style={styles.myText}>{salary}</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:5}}>
                <Button icon="account-edit" mode="contained" theme={theme} onPress={(console.log("hola"))}>Edit</Button>
                <Button icon="delete" mode="text" color="red" onPress={(console.log("hola"))}>Delete</Button>

            </View>
        </View>
    )
}

const theme={
    colors:{
        primary:"#006aff",
        secundary:"red"
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    ImageStyl: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: -58
    },
    viewImageStyle: {
        alignItems: "center"
    },
    myCard: {
        margin: 3
    },
    cardContent: {
        flexDirection: "row",
        padding: 5
    },
    myText: {
        fontSize: 16,
        marginTop: 3,
        marginLeft: 5
    }


})
export default Profile