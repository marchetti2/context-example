import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import dashboard from '../pages/dashboard'

const Apptack = createStackNavigator();

const AppRouter: React.FC = () => {
  return (
    <Apptack.Navigator>
      <Apptack.Screen name="dashboard" component={dashboard} />
    </Apptack.Navigator>
  );
}

export default AppRouter;
