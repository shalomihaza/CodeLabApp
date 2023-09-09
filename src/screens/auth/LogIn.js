import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {w, h} from '../../../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native/types';

const LogIn = () => {
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
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: w(30),
    alignItems: 'center',
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
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
