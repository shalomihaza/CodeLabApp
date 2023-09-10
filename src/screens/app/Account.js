import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {w, h} from '../../utils/responsive';
import {L} from '../../utils/helpers';

import {useUserDataContext} from '../../store/context/auth/UserDataContext';

const actionItems = [
  {name: 'Notification', icon: 'notifications'},
  {name: 'Edit profile', icon: 'person'},
  {name: 'Wishlist', icon: 'star'},
  {name: 'Order history', icon: 'bookmark'},
  {name: 'Track order', icon: 'newspaper'},
  {name: 'Payment option', icon: 'card'},
  {name: 'Settings', icon: 'settings'},
  {name: 'Logout', icon: 'log-out'},
];

const Account = ({navigation}) => {
  const {userInfo} = useUserDataContext();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconWrapper}>
          <Ionicons name="cart-outline" size={h(20)} color="white" />
        </View>
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholder=""
          inputStyle={{textAlignVertical: 'center'}}
          style={styles.searchBar}
        />
        <Ionicons name="menu-outline" size={h(50)} color="rgb(255, 129, 55)" />
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.userDetailsContainer}>
          <View style={styles.userImgContainer}>
            <Image
              style={styles.userImg}
              source={{uri: `${userInfo?.image}`}}
            />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameTxt}>
              {userInfo?.firstName} {userInfo?.lastName}
            </Text>
            <Text style={styles.userNameSubTxt}>{userInfo?.email}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionIconsContainer}>
        {actionItems.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Ionicons
              name={item.icon}
              size={h(20)}
              style={{marginRight: w(50)}}
              color="rgb(255, 129, 55)"
            />
            <Text style={[styles.userNameTxt, {fontWeight: '600'}]}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  headerContainer: {
    // paddingTop: h(30),

    paddingHorizontal: w(20),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(17, 46, 66)',

    height: h(100),
  },
  userInfoContainer: {
    paddingTop: h(40),

    paddingHorizontal: '5%',
    width: '100%',
    backgroundColor: 'rgb(255, 129, 55)',

    height: h(230),
  },
  iconWrapper: {
    width: w(50),
    height: h(50),
    borderRadius: w(50),

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 129, 55)',
  },
  searchBar: {
    marginHorizontal: w(20),
    // paddingBottom: h(20),
    flex: 1,
    height: h(50),
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },

  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImgContainer: {
    width: w(60),
    height: h(60),
    borderRadius: w(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: w(10),
  },

  userImg: {
    width: w(60),
    height: h(60),
    borderRadius: w(60),
  },
  userNameContainer: {},
  userNameTxt: {
    color: 'rgb(45, 42, 48)',
    fontSize: h(20),
  },
  userNameSubTxt: {
    color: 'rgb(74, 52, 28)',
    fontSize: h(15),
    marginTop: h(5),
  },
  actionIconsContainer: {
    backgroundColor: '#fff',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    marginTop: -h(95),
    borderRadius: w(10),
    paddingTop: h(95),
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',

    marginBottom: h(30),

    alignItems: 'center',
    width: '70%',
  },
});
