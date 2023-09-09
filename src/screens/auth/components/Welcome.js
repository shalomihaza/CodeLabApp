import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {w, h} from '../../../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native/types';

const Welcome = ({goToLogin}) => {
  const familyImg = require('../../../assets/imgs/familyImg.jpg');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconWrapper}>
          <Ionicons name="cart-outline" size={h(20)} color="white" />
        </View>
        <Text style={styles.iconTxt}>basket</Text>
      </View>
      <Text style={styles.txtPrimary}>Welcome to</Text>
      <Text style={styles.txtSecondary}>basket online shop</Text>
      <Text style={styles.txtPrimary}>
        {'basket is the no1 online store for\nboth new and used products'}
      </Text>

      <Image source={familyImg} style={{height: h(50), width: w(50)}} />
      <TouchableOpacity
        style={{
          width: w(300),
          height: h(60),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: h(30),
          backgroundColor: 'rgb(255, 129, 55)',
          borderRadius: w(10),
        }}
        onPress={goToLogin}>
        <Text style={styles.txtPrimary}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17, 46, 66)',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: h(30),
  },
  iconWrapper: {
    width: w(50),
    height: h(50),

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 129, 55)',
  },
  iconTxt: {color: 'rgb(255, 129, 55)', fontSize: h(25), marginLeft: w(10)},
  txtPrimary: {
    color: 'rgb(96, 101, 105)',
    fontSize: h(25),
    lineHeight: h(30),
    marginTop: h(10),
    textAlign: 'center',
  },
  txtSecondary: {
    color: 'rgb(28, 35, 45)',
    fontSize: h(30),
    marginTop: h(10),
    textAlign: 'center',
  },
});
