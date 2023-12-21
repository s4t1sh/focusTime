import React from 'react'
import RoundedButton from '../components/RoundedButton';
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  timingBtn: {
      flex: 1,
      alignItems: 'center',
  }
});

const Timing = ({onChangeTime}) => {

  return (
    <>
    <View style={styles.timingBtn}>
        <RoundedButton title="10" onPress={()=>onChangeTime(10)} ht={75} wt={75}/>
    </View>
    <View style={styles.timingBtn}>
        <RoundedButton title="15" onPress={()=>onChangeTime(15)} ht={75} wt={75}/>
    </View>
    <View style={styles.timingBtn}>
        <RoundedButton title="20" onPress={()=>onChangeTime(20)} ht={75} wt={75}/>
    </View>
    </>
  )
}
export default Timing;
