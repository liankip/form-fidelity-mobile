import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function Index() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: 'https://form.satrianusa.group' }}
      />
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
  });
  
  