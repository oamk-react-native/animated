import React,{useRef} from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

export default function App() {

  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  function fadeIn() {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }

  function scale() {
    Animated.spring(scaleAnimation, {
      toValue: 2,
      duration: 5000,
      useNativeDriver: true
    }).start(); 
  }

  function reset() {
    fadeAnimation.setValue(0);
    scaleAnimation.setValue(1);
  }

  function combine() {
    Animated.parallel([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.spring(scaleAnimation, {
        toValue: 2,
        duration: 5000,
        useNativeDriver: true
      })
    ]).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.animatedText,
        {
          opacity: fadeAnimation,
          transform: [{
            scale: scaleAnimation.interpolate({
              inputRange: [1,1.5,2],
              outputRange:[1,1.2,1]
            })
          }]
        }
      ]}> 
        <Text>This is animated text</Text>
      </Animated.View>
      <View style={styles.button}>
        <Button onPress={fadeIn} title="Fade in"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={scale} title="Scale"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={combine} title="Combine"></Button>
      </View>
      <View style={styles.button}>
        <Button onPress={reset} title="Reset"></Button>
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
  animatedText: {
    margin: 30,
  },
  button: {
    marginBottom: 10,
  }
});

/*

  const rotateAnimation = useRef(new Animated.Value(0)).current;




  function rotate() {
    Animated.timing(rotateAnimation,{
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  }

  

  function reset() {
    fadeAnimation.setValue(0);
    scaleAnimation.setValue(1);
    rotateAnimation.setValue(0);




    transform: [{
            scale: scaleAnimation.interpolate({
              inputRange: [1,1.5,2],
              outputRange:[1,1.2,1]
            }),
          },
            {rotateY: rotateAnimation.interpolate({
              inputRange: [0,1],
              outputRange:['0deg','360deg']
            })
            },
          ]
  }
  
  
   
  
      <View style={styles.button}>
        <Button onPress={rotate} title="Rotate"></Button>
      </View>
    
  
  
  */