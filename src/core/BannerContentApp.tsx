import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {BannerContent} from '../modules';

const ButtonContentApp = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.content}>
        <BannerContent />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default ButtonContentApp;
