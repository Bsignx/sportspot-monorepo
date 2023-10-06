import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import WebView from 'react-native-webview'
// import { colors } from '@sportspot/tokens'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <WebView
        style={styles.container}
        userAgent="Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36"
        geolocationEnabled
        source={{ uri: 'https://sportspot.vercel.app' }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
