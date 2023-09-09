import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {h, w} from '../../../utils/responsive';

const Intro = ({handleNext}) => {
  const bgImage = require('../../../assets/imgs/bgImg.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImg}>
        <View style={styles.iconContainer}>
          <Ionicons name="cart-outline" size={h(25)} color="#fff" />
          <Text style={styles.iconTxt}>basket</Text>
        </View>

        <Text style={styles.txtPrimary}>Start Shopping</Text>
        <Text style={styles.txtPrimary}>Start Happy</Text>
        <Text style={styles.txtPrimary}>Anytime</Text>

        <Text style={[styles.actionTxt, {marginTop: h(60)}]}>
          Basket Online Marketplace
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: h(20),
            width: '100%',
          }}>
          {' '}
          <Text style={[styles.actionTxt]} onPress={handleNext}>
            Skip
          </Text>
          <Text style={[styles.actionTxt]} onPress={handleNext}>
            Next
          </Text>
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
  iconContainer: {
    width: w(100),
    height: h(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 129, 55)',
  },
  iconTxt: {color: '#fff', fontSize: h(25), textAlign: 'center'},
  txtPrimary: {
    color: 'white',
    fontSize: h(25),
    marginTop: h(10),
  },
  actionTxt: {
    color: 'rgb(255, 129, 55)',
  },
});
