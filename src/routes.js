import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      defaultNavigationOptions: ({ navigationOptions }) => ({
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF',
      }),
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
