import {View, Text, StyleSheet} from 'react-native'

const App = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo!</Text>
    </View>
  )
}

export default App 

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "black",
    flex: 1
  },
  text: {
    color: "blue"
  }

})