import { NavigationActions } from 'react-navigation';
import AppNavigator from '../appNavigator';
import { NAVIGATE } from '../actions/navigation';

export default function (state, action) {
  if (action.type === NAVIGATE) {
    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({
        routeName: action.routeName,
        params: action.params,
      }), state);
  }
  return AppNavigator.router.getStateForAction(action, state);
}
