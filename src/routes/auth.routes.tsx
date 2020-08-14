import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import singIn from '../pages/singIn'

const AuthStack = createStackNavigator();

const AuthRouter: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={singIn} />
    </AuthStack.Navigator>
  );
}

export default AuthRouter;
