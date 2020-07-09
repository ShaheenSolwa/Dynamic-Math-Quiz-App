import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const x = Math.floor(Math.random() * 100) + 1;
const y = Math.floor(Math.random() * 100) + 1;
const a = Math.floor(Math.random() * 100) + 1;
const b = Math.floor(Math.random() * 100) + 1;
const c = Math.floor(Math.random() * 100) + 1;
const d = Math.floor(Math.random() * 100) + 1;
const e = Math.floor(Math.random() * 100) + 1;
const f = Math.floor(Math.random() * 100) + 1;

export default function App() {
  //const x = Math.floor(Math.random() * 100) + 1;
  const [ans1, setans1] = useState();
  const [ans2, setans2] = useState();
  const [ans3, setans3] = useState();
  const [ans4, setans4] = useState();

  

  const submit = ( val1,val2,val3,val4 ) => {
    const Ans1 = x+y;
    const Ans2 = a-b;
    const Ans3 = c*d;
    const Ans4 = e/f;

    if (val1=={Ans1} && val2=={Ans2} && val3=={Ans3} && val4=={Ans4}){
      Alert.alert(
        "Your Score:","4/4",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
    else{
      Alert.alert(
        "Your Score:","Failed!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
  
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>DYNAMIC MATH QUIZZ</Text>
        </View>  

          <View style={styles.row}>
            <Text style={styles.text}>QUESTION1</Text>
          </View>
          <View style={styles.question}>
            <Text style={styles.text}>{x}+{y}=</Text>
            <TextInput type="reset" style={styles.input} defaultValue="" onChangeText={text => setans1(text)} keyboardType="numeric" />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>QUESTION2</Text>
          </View>
          <View style={styles.question}>
            <Text style={styles.text}>{a}-{b}=</Text>
            <TextInput style={styles.input} defaultValue="" onChangeText={text => setans2(text)} keyboardType="numeric" />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>QUESTION3</Text>
          </View>
          <View style={styles.question}>
            <Text style={styles.text}>{c}*{d}=</Text>
            <TextInput style={styles.input} defaultValue="" onChangeText={text => setans3(text)} keyboardType="numeric" />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>QUESTION4</Text>
          </View>
          <View style={styles.question}>
            <Text style={styles.text}>{e}/{f}=</Text>
            <TextInput style={styles.input} defaultValue="" onChangeText={text => setans4(text)} keyboardType="numeric" />
          </View>

          <Text style={styles.txtTrans}>        </Text>
          <View style={styles.row}>
            <Button title="SUBMIT" onPress={() => submit(ans1,ans2,ans3,ans4)} />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    padding: 38,
    backgroundColor: 'red',
    width: '100%',
    marginBottom: 25,
  },
  title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    textAlign: 'center'
  },
  question:{
    flexDirection: 'row',
    marginBottom: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input:{
    borderBottomWidth: 0.5,
    width: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  txtTrans: {
    transform: [{ rotate: '90deg'}]
  }
});
