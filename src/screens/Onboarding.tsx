import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button, ButtonText, Text, View} from '../components/Themed';
import {Colors, Styles} from '../constants';
import {scale} from 'react-native-size-matters';

export default function Onboarding({navigation}) {
  return (
    <View darkColor={Colors.white} style={styles.container}>
      <View darkColor={Colors.white}>
        <View darkColor={Colors.white}>
          <LottieView
            style={styles.image}
            source={require('../assets/animations/Onboarding.json')}
            autoPlay
            loop
          />
        </View>
        <View darkColor={Colors.white} style={styles.info}>
          <Text darkColor={Colors.black} style={styles.title}>
            Welcome to{' '}
            <Text style={{fontWeight: 'bold'}} darkColor={Colors.black}>
              Bimp
            </Text>
          </Text>
          <Text darkColor={Colors.black} style={styles.subTitle}>
            Gideon's e-commerce task with react native
          </Text>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            darkColor={Colors.light.tint}>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  info: {
    paddingHorizontal: Styles.body.paddingHorizontal,
    alignItems: 'center',
  },
  title: {
    fontSize: scale(18),
  },
  subTitle: {
    fontSize: scale(15),
    marginBottom: scale(10),
    opacity: 0.8,
  },
  button: {marginTop: 10, width: '100%'},
});
