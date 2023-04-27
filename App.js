import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createUser, signIn } from './auth-api';
import { useEffect, useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("aadil@invigotouch.com");
  const [password, setPassword] = useState("pass1234");

  function handleRegister() {
    createUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function handleSignIn() {
    signIn(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Login" onPress={handleSignIn} />
      <Text></Text>
      <Button title="Register" onPress={handleRegister} />
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
});
