import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {w, h} from '../../../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Welcome = ({goToLogin, goBack}) => {
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        goBack();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => subscription.remove();
    }, []),
  );

  const familyImg = require('../../../assets/imgs/familyImg.png');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconWrapper}>
          <Ionicons name="cart-outline" size={h(20)} color="white" />
        </View>
        <Text style={styles.iconTxt}>basket</Text>
      </View>
      <Text style={styles.txtPrimary}>Welcome to</Text>
      <Text style={styles.txtSecondary}>basket online store</Text>
      <Text style={[styles.txtPrimary, {fontSize: h(18)}]}>
        {'basket is the no1 online store for\nboth new and used products.'}
      </Text>

      <Image
        source={familyImg}
        style={{marginTop: h(70), height: h(300), width: w(300)}}
      />
      <TouchableOpacity style={styles.btnContainer} onPress={goToLogin}>
        <Text style={styles.btnTxt}>GET STARTED</Text>
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
    paddingTop: h(30),
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: h(30),
  },

  bgImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: w(50),
    height: h(50),

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w(50),
    backgroundColor: 'rgb(255, 129, 55)',
  },
  iconTxt: {color: 'rgb(255, 129, 55)', fontSize: h(25), marginLeft: w(10)},
  txtPrimary: {
    color: 'rgb(180, 199, 212)',
    fontSize: h(25),
    lineHeight: h(30),
    marginTop: h(20),
    textAlign: 'center',
  },
  txtSecondary: {
    color: 'rgb(242, 249, 251)',
    fontSize: h(38),
    marginTop: h(20),
    textAlign: 'center',
  },
  btnContainer: {
    width: w(300),
    height: h(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h(60),
    backgroundColor: 'rgb(255, 129, 55)',
    borderRadius: w(10),
  },
  btnTxt: {
    color: 'rgb(242, 249, 251)',

    fontSize: h(20),

    textAlign: 'center',
  },
});
