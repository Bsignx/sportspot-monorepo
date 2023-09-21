import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up apps/mossbile/App.tsx to start working on your app!</Text>
      <Text>Open up apps/mossbile/App.tsx to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
