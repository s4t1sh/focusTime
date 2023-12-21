import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        marginTop: 20,
        fontSize: 20,
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    items:{
        marginTop: 20,
        fontSize: 20,
        paddingLeft: 80,
        color: 'white'
    }
})

const FocusHistory = ({history}) => {

    if(!history || history.length === 0) return <Text style={styles.title}>
    We haven't focused anything yet
</Text>;

    const renderItem = ({item}) =><Text style={styles.items}>- {item}</Text>;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Things we've focused on:
        </Text>
        <FlatList
            data={history}
            renderItem={renderItem}
        />
    </View>
  )
}

export default FocusHistory
