import * as firebase from 'firebase';
import Auth from './auth';

function getUserTextPath() {
  return `/user/${Auth.getCurrentUser().uid}/details`;
}

class User {

  // Set a users text value
  static setUserText(newText) {
    firebase.database().ref(getUserTextPath())
      .set({
        text: newText,
      })
      .catch(error => console.warn(error));
  }

  static getUserText(onSuccess, onError) {
    return firebase.database()
      .ref(getUserTextPath()).once('value')
      .then((snapshot) => {
        if (snapshot != null && snapshot.val() != null && snapshot.val().text != null) {
          onSuccess(snapshot.val().text);
        } else {
          onSuccess('');
        }
      })
      .catch(error => onError(error));
  }

    /**
     * Listen for changes to a users text
     * @param userId
     * @param callback Users text
     */
  static listenUserText(onChange) {
    firebase.database().ref(getUserTextPath()).on('value', (snapshot) => {
      let mobile = '';
      if (snapshot.val()) {
        mobile = snapshot.val().mobile;
      }
      onChange(mobile);
    });
  }
}

module.exports = User;
