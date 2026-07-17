import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const TaskDetails = () => {
const {id, title} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>This is the TaskDetails page</Text>
      <Text> ID: {id}</Text>
      <Text> Title: {title}</Text>
    </View>
  )


 
}

 const styles = StyleSheet.create({
    container:{
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
    }
  })

export default TaskDetails