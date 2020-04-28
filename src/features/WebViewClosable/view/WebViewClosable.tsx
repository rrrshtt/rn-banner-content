import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
import WebView from 'react-native-webview';

interface IProps {
  url: string;
  onClose?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const WebViewClosable = ({url, onClose}: IProps) => {
  return (
    <>
      {onClose && (
        <View style={styles.closeButtonContainer}>
          <Button
            onPress={onClose}
            title="Close"
            color="#220B13"
            accessibilityLabel="Close button"
          />
        </View>
      )}
      <WebView source={{uri: url}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButtonContainer: {
    backgroundColor: '#E5FACF',
  },
});
