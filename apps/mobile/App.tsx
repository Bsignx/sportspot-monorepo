import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default function App() {
  return (
    <WebView
      style={styles.container}
      userAgent="Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36"
      geolocationEnabled
      forceDarkOn
      source={{ uri: 'http://192.168.2.4:3000/' }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 36,
  },
})
