import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native'

const MealItem = (props) => {
    return (
        <View style={styles.MealItem}>
            <TouchableOpacity onPress={props.onselectMeal}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>
                            
                        </ImageBackground>
                    </View>

                    <View style={{...styles.mealRow,...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.affordability}</Text>
                        <Text>{props.complexity}</Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    MealItem: {
        height : 200,
        width : '100%',
        backgroundColor : '#ccc',
        overflow: 'hidden'
    },
    mealRow : {
        flexDirection : 'row'
    },
    mealHeader : {
        height: '85%',
    },
    mealDetail : {
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : '#f5f5f5',
        height: '15%'
    },
    bgImage :{
        width: '100%',
        height: '100%',
        justifyContent : 'flex-end'
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 22,
    },
    titleContainer : {
        backgroundColor : 'rgba(0,0,0,0.7)',
        paddingVertical : 5,
        paddingHorizontal : 12,
    }
})
export default MealItem
