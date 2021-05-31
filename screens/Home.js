import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from "react-native-paper";

const Home = ({navigation}) => {
    const data = [
        { id: 1, name: "hola",email:"abc@abc.com",salary:"500",phone:"123456789", position: "web dev",
         picture:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
        { id: 2, name: "hol",email:"coreo@abc.com",salary:"1000",phone:"123456789", position: "web dev", 
        picture:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"},
        { id: 3, name: "ho",email:"cloe@abc.com",salary:"800",phone:"123456789", position: "web dev", 
        picture:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
        { id: 4, name: "h",email:"asfe@abc.com",salary:"2400",phone:"123456789", position: "web dev", 
        picture:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
        { id: 5, name: "ho",email:"caer@abc.com",salary:"8900",phone:"123456789", position: "web dev", 
        picture:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"},
        { id: 6, name: "hol",email:"case@abc.com",salary:"25400",phone:"123456789", position: "web dev", 
        picture:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
        { id: 7, name: "hola",email:"cerkk@abc.com",salary:"000",phone:"123456789", position: "web dev", 
        picture:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"}

    ]
    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}
            onPress={()=>navigation.navigate("Profile",{item})}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: item.picture }}
                    >
                    </Image>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text >{item.position}</Text>

                    </View>
                </View>

            </Card>
        )

    })
    return (
        <View style={{flex:1}}>
            <FlatList
                data={data}
                renderItem={({ item }) => {

                    return renderList(item)
                }}
                keyExtractor={item => `${item.id}`}
            />
            <FAB onPress={()=>navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}}
              
            />
        </View>
    )
    /*
    return (
        <Card style={styles.mycard}>
            <View style={styles.cardView}>
                <Image
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                    source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" }}
                >
                </Image>
                <View style={{marginLeft:20}}>
                <Text style={styles.text}>Hello Home</Text>
                <Text >Hello Home</Text>

                </View>
            </View>

        </Card>
    )
    */
}
const styles = StyleSheet.create({
    mycard: {
        marginTop: 5,

    },
    cardView: {
        flexDirection: "row"
    },
    text: {
        fontSize: 18,


    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },


})
export default Home;