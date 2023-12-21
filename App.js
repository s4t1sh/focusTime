import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import {colors} from './src/utils/Colors';
import Focus from './src/features/Focus';
import { useState } from 'react';
import Timer from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history , setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history}/>
        </>
      ):(
        <Timer
          focusSubject = {currentSubject}
          onTimerEnd={(subject)=>{
            setHistory([...history, subject]);
          }}
          clearSubject ={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: StatusBar.currentHeight,
  },
  text:{
    color : colors.white,
  }
});
