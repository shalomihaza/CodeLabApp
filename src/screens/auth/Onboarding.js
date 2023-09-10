import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SafeAreaComp from '../../components/SafeAreComp';
import Intro from './components/Intro';
import Welcome from './components/Welcome';
import {LOGIN_SCREEN} from '../../utils/constants/screenNames';

const Onboarding = ({navigation}) => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const handleNext = () => {
    setOnboardingComplete(true);
  };

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaComp>
      {onboardingComplete ? (
        <Welcome goToLogin={goToLogin} goBack={goBack} />
      ) : (
        <Intro handleNext={handleNext} />
      )}
    </SafeAreaComp>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
