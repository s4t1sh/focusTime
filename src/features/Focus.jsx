import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {colors} from '../utils/Colors'
import { TextInput } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';

const styles = StyleSheet.create({
    container: {
    },
    text:{
      color : colors.white,
    },
    textInput:{
        flex: 0.9,
        marginRight: 20
    },
    inputContainer:{
        justifyContent: 'top',
        flexDirection: 'row',
        padding: 20
    }
  });

const Focus = ({addSubject}) => {

    const [subject,setSubject] = useState(null);
    

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer} >
            <TextInput 
            label = 'What would you like to focus on?' 
            style={styles.textInput}
            onChangeText={text => setSubject(text)}
            />
            <RoundedButton title={'+'} ht={60} wt={60} onPress={()=>addSubject(subject)}/>
        </View>
        <View>
          
        </View>
    </View>
  )
}

export default Focus;