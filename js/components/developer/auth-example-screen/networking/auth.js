import * as firebase from 'firebase';

export default class Auth {
  static async signUp(email, password, onSuccess, onError) {
    await firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => onSuccess(user))
    .catch(error => onError(error));
  }

  static async signIn(email, password, onSuccess, onError) {
    await firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => onSuccess(user))
    .catch(error => onError(error));
  }

  static async signOut(onSuccess, onError) {
    await firebase.auth()
    .signOut()
    .then(() => onSuccess())
    .catch(error => onError(error));
  }

  // Shound not be async
  static getCurrentUser() {
    return firebase.auth().currentUser;
  }
}
