import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import useColorScheme from './src/hooks/useColorScheme';
import {store} from './src/redux/store';
import {Provider as ReduxProvider} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import Navigation from './src/navigation';
import {Colors} from './src/constants';
import {Notify} from './src/utils';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ReduxProvider store={store}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Navigation colorScheme={colorScheme} />
      <DropdownAlert
        defaultContainer={{
          padding: 8,
          paddingTop: 0,
          flexDirection: 'row',
        }}
        ref={ref => Notify.setDropDown(ref)}
        onClose={() => Notify.invokeOnClose()}
      />
    </ReduxProvider>
  );
}
