import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    // did mount
    console.log('auth props', props?.auth);
    console.log('home props', props?.home);

    return () => {
      // unmount
    };
  }, []);

  return <Text>Hi</Text>;
}

const mapStateToProps = function (state) {
  return {
    auth: state?.auth,
    home: state?.home,
  };
};

export default connect(mapStateToProps, {})(Home);
