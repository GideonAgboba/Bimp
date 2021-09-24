import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button, ButtonText, Input, Text, View} from '../../components/Themed';
import {Colors, Styles} from '../../constants';
import {scale} from 'react-native-size-matters';
import {Notify} from '../../utils';
import {connect, useDispatch} from 'react-redux';
import {loginUser} from '../../redux/Authentication/authentication.action';
import useColorScheme from '../../hooks/useColorScheme';

function Login(props) {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!username || username == '' || !password || password == '') {
      Notify.show('error', 'Validation', 'Please fill all fields');
      return false;
    }
    // submit here
    dispatch(
      loginUser({
        username,
        password,
      }),
    );
  };

  return (
    <View darkColor={Colors.white} style={styles.container}>
      <View darkColor={Colors.white}>
        <View darkColor={Colors.white}>
          <LottieView
            style={styles.image}
            source={require('../../assets/animations/Onboarding.json')}
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
          <View darkColor={Colors.white}>
            <Input
              placeholder="Username"
              style={styles.input}
              defaultValue={username}
              onChangeText={text => setUsername(text)}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              defaultValue={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button
            disabled={props?.auth?.loading}
            style={styles.button}
            onPress={() => handleSubmit()}
            darkColor={Colors.light.tint}>
            {props?.auth?.loading ? (
              <ActivityIndicator color={Colors[colorScheme].text} />
            ) : (
              <ButtonText>Sign In</ButtonText>
            )}
          </Button>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = function (state) {
  return {
    auth: state?.auth,
  };
};

export default connect(mapStateToProps, {})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: scale(200),
    alignSelf: 'center',
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
    marginBottom: scale(20),
    opacity: 0.8,
  },
  input: {
    width: Dimensions.get('window').width - Styles.body.paddingHorizontal * 2,
    marginBottom: scale(10),
  },
  button: {marginTop: 10, width: '100%'},
});
