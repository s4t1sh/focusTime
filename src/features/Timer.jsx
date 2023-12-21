import React, { useState } from 'react'
import {View, Text, StyleSheet, Platform, Vibration,} from 'react-native'
import {Countdown}  from '../components/Countdown'
import RoundedButton from '../components/RoundedButton'
import { ProgressBar } from 'react-native-paper'
import {colors} from '../utils/Colors'
import Timing from './Timing'
import { useKeepAwake } from 'expo-keep-awake';

const styles = StyleSheet.create({
    container:{
        flex : 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timingBtnWrapper:{
        flex: 0.1,
        flexDirection: 'row',
        paddingTop: 20
    },
    buttonWrapper:{
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        paddingTop: 40,
    },
    clearTimeBtn:{
         flexDirection: 'row',
         justifyContent: 'center',
    }
})


const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
    ];

    const onEnd = (reset) =>{
        Vibration.vibrate(PATTERN);
        setProgress(1)
        setIsStarted(false);
        onTimerEnd(focusSubject);
        reset();
    }

  return (
    <View style={styles.container}>
        <View>
            <Text style = {styles.title}>
                {focusSubject}
            </Text>
        </View>
        <View style = {styles.countdown}>
            <Countdown 
                minutes={minutes}
                isPaused={!isStarted} 
                onProgress ={setProgress} 
                onEnd={onEnd}
            />
        </View>

        <View>
            <ProgressBar 
            color={colors.progressBar}
            progress = {progress}
            />
        </View>

        <View style={styles.timingBtnWrapper}>
            <Timing onChangeTime={setMinutes}/>
        </View>
       
        <View style={styles.buttonWrapper}>
            {!isStarted && <RoundedButton title="start" onPress={()=> setIsStarted(true)} ht={100} wt={100}/>}
            {isStarted && <RoundedButton title="pause" onPress={()=> setIsStarted(false)} ht={100} wt={100}/>}
        </View>

        <View style={styles.clearTimeBtn}>
            <RoundedButton title="clear" ht={75} wt={75} onPress={clearSubject}/>
        </View>
    </View>
  )
}

export default Timer