import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {h, w} from '../../../utils/responsive';

const Intro = ({handleNext}) => {
  const bgImage = require('../../../assets/imgs/bgImg.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImg}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="cart-outline" size={h(25)} color="#fff" />
            <Text style={styles.iconTxt}>basket</Text>
          </View>

          <Text style={styles.txtPrimary}>Start Shopping.</Text>
          <Text style={styles.txtPrimary}>Start Happy.</Text>
          <Text style={styles.txtPrimary}>Anytime.</Text>
          <View style={styles.bottomActionsContainer}>
            <Text style={styles.actionTxt}>Basket Online Marketplace</Text>
            <View style={styles.navActionsContainer}>
              <Text style={[styles.actionTxt]} onPress={handleNext}>
                Skip
              </Text>
              <Text style={[styles.actionTxt]} onPress={handleNext}>
                Next
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,

    width: '100%',
    paddingHorizontal: w(35),
    backgroundColor: 'rgba(17, 46, 66,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomActionsContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: h(80),
  },
  iconContainer: {
    width: w(140),
    height: h(140),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 129, 55)',
    borderRadius: w(140),
    marginBottom: h(20),
  },
  iconTxt: {color: '#fff', fontSize: h(25), textAlign: 'center'},
  txtPrimary: {
    color: 'white',
    fontSize: h(25),
    marginTop: h(15),
  },
  navActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: h(40),
    width: '100%',
  },
  actionTxt: {
    fontSize: h(20),
    color: 'rgb(255, 129, 55)',
  },
});
