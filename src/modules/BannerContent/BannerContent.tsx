import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Toast from 'react-native-simple-toast';

import {WebViewClosable} from '../../features/WebViewClosable';
import {getBannerContent} from '../../services/api/banner';
import {TWebContent} from 'src/shared/types/webContent';

export const BannerContent = () => {
  const [banner, setBanner] = useState<TWebContent>(
    getBannerContent.initialState,
  );
  const onPressOk = async () => {
    const banner = await getBannerContent.fetchContent();
    setBanner(banner);
    !banner.isContentReady && Toast.show('Sorry we need to stay safe');
  };

  const onCloseBanner = () => {
    setBanner(getBannerContent.initialState);
  };

  return (
    <>
      <View style={styles.body}>
        {!banner.isContentReady ? (
          <View style={styles.okButtonContainer}>
            <Button
              onPress={onPressOk}
              title="OK"
              color="#220B13"
              accessibilityLabel="OK button"
            />
          </View>
        ) : (
          banner.url && (
            <WebViewClosable url={banner.url} onClose={onCloseBanner} />
          )
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  okButtonContainer: {
    backgroundColor: '#E5FACF',
    marginHorizontal: '30%',
    borderRadius: 10,
  },
  body: {
    backgroundColor: '#F9CEDD',
    flex: 1,
    justifyContent: 'center',
  },
});
