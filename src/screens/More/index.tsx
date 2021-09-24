import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, ButtonText} from '../../components/Themed';
import {connect, useDispatch} from 'react-redux';
import {logoutUser} from '../../redux/Authentication/authentication.action';
import moment from 'moment';
import {scale} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/core';

function More(props) {
  const [time, setTime] = useState(props?.auth?.user?.loggedInAt);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    setTime(props?.auth?.user?.loggedInAt);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome back,{' '}
        <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
          {props?.auth?.user?.username}
        </Text>
        , {'\n'} You logged in {moment(time).fromNow()}{' '}
      </Text>
      <Button onPress={() => dispatch(logoutUser())}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </View>
  );
}

const mapStateToProps = function (state) {
  return {
    auth: state?.auth,
  };
};

export default connect(mapStateToProps, {})(More);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: scale(16),
    marginBottom: scale(20),
  },
});
