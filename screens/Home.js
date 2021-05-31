import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from "react-native-paper";

const Home = ({navigation}) => {
    const data = [
        { id: 1, name: "hola", position: "web dev" },
        { id: 2, name: "hol", position: "web de" },
        { id: 3, name: "ho", position: "web d" },
        { id: 4, name: "h", position: "web " },
        { id: 5, name: "ho", position: "web d" },
        { id: 6, name: "h", position: "web " },
        { id: 7, name: "ho", position: "web d" },
        { id: 8, name: "h", position: "web " },
        { id: 9, name: "ho", position: "web d" },
        { id: 10, name: "h", position: "web " },
        { id: 11, name: "ho", position: "web d" },
        { id: 12, name: "h", position: "web " },
        { id: 13, name: "ho", position: "web d" },
        { id: 14, name: "h", position: "web " },
    ]
    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}
            onPress={()=>navigation.navigate("Profile")}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" }}
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