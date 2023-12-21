import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const RoundedButton = ({title,ht,wt,onPress}) => {
  const styles = StyleSheet.create({
    button:{
        borderRadius: 50,
        height: ht,
        width: wt,
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text:{
      fontSize: 25,
        color: '#fff',
    }
})
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
