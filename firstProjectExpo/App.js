import {Button, Image, StyleSheet, Text, View} from 'react-native';
import icon from './assets/img/img_avatar.png'

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.block}>
                    <View style={styles.blockCenter}>
                        <Text style={styles.text}>Rembo</Text>
                        <Text style={styles.text}>Last Blood</Text>
                        <View style={styles.buttonContainer}>
                        <Button title={'Subscribe'}/>
                    </View>
                        <Image source={icon} style={styles.image}/>

                    </View>


                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,


    },
    block: {
        borderRadius: 20,
        backgroundColor: '#eee',


        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 20},
        shadowRadius: 20,
        marginTop: 20,


    }, image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        left:20,
        top:5


    },
    text: {
        top:8,
        borderRadius: 1,
        padding: 5,
        marginLeft: 70,




    },
    buttonContainer: {
        marginLeft: 200,
        top:-25,
        borderRadius:36,
        backgroundColor:'black',
        width: 120,
        height:35



    },
    blockCenter: {


    }


});
