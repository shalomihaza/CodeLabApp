import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Checkbox} from 'react-native-paper';
import {w, h} from '../../utils/responsive';
import {L} from '../../utils/helpers';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {isEmailValid} from '../../utils/validation';
import useAuth from '../../hooks/apiHooks/useAuth';
import {useUserDataContext} from '../../store/context/auth/UserDataContext';

const LogIn = () => {
  const {setUserInfo, setLoggedIn} = useUserDataContext();

  const {loading, error, data, postLogin, clearError, getUsers} = useAuth();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [checked, setChecked] = useState(false);
  const [secure, setSecure] = useState(true);

  const handleEmail = text => {
    setLoginEmail(text);
    const checkEmail = isEmailValid(text);

    // if (!checkEmail.valid) {
    //   setEmailErr(checkEmail.msg);
    // } else {
    //   setEmailErr('');
    // }
  };

  const handlePassword = text => {
    setLoginPassword(text);
  };
  const toggleChecked = () => {
    setChecked(prevState => !prevState);
  };

  const handleLogin = async () => {
    // if (emailErr) {
    //   alert(emailErr);
    //   return;
    // }
    if (loginEmail === '' || loginPassword === '') {
      alert('Please fill all the fields');
      return;
    }
    postLogin({username: loginEmail, password: loginPassword});
  };
  if (loading) {
    alert('loading');
  }
  if (error) {
    alert(error);
    clearError();
  }
  if (data) {
    //
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconWrapper}>
          <Ionicons name="cart-outline" size={h(20)} color="white" />
        </View>
        <Text style={styles.iconTxt}>basket</Text>
      </View>
      <Text style={styles.txtSecondary}>Log into your account</Text>

      <Text style={styles.txtPrimary}>
        {
          'Enter your eamil and password\nto access your account or create\nan account'
        }
      </Text>

      <TextInput
        label="Email"
        value={loginEmail}
        style={{backgroundColor: 'transparent', marginTop: h(20)}}
        activeUnderlineColor="rgb(255, 129, 55)"
        underlineColor="rgb(255, 129, 55)"
        error={emailErr !== '' ? true : false}
        textColor="rgb(68,82,91)"
        placeholder=""
        onChangeText={handleEmail}
        left={<TextInput.Icon icon="email" color="rgb(255,129,55)" />}
      />

      <TextInput
        label="Password"
        value={loginPassword}
        style={{backgroundColor: 'transparent', marginTop: h(20)}}
        activeUnderlineColor="rgb(255, 129, 55)"
        underlineColor="rgb(255, 129, 55)"
        secureTextEntry={secure}
        textColor="rgb(68,82,91)"
        placeholder=""
        onChangeText={handlePassword}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setSecure(prevState => !prevState)}
          />
        }
        left={<TextInput.Icon icon="key" color="rgb(255,129,55)" />}
      />
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: h(20)}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={toggleChecked}
        />
        <Text style={styles.rememberTxt}>Remember me</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <Text style={styles.btnTxt}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: h(30),

    paddingHorizontal: w(30),
    // alignItems: 'center',
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
    borderRadius: w(50),

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 129, 55)',
  },
  iconTxt: {color: 'rgb(255, 129, 55)', fontSize: h(25), marginLeft: w(10)},
  txtPrimary: {
    color: 'rgb(96, 101, 105)',
    fontSize: h(20),
    lineHeight: h(30),
    marginTop: h(20),
    marginBottom: h(50),
    textAlign: 'center',
  },
  txtSecondary: {
    color: 'rgb(28, 35, 45)',

    fontSize: h(30),
    fontWeight: '700',
    marginTop: h(40),
    textAlign: 'center',
  },
  rememberTxt: {
    color: 'rgb(96, 101, 105)',
    fontSize: h(20),

    marginLeft: w(15),
  },
  btnContainer: {
    width: w(300),
    height: h(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h(60),
    backgroundColor: 'rgb(17, 46, 66)',
    alignSelf: 'center',
    borderRadius: w(10),
  },
  btnTxt: {
    color: 'rgb(242, 249, 251)',

    fontSize: h(20),

    textAlign: 'center',
  },
});
