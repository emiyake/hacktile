import GoogleSignIn from 'react-native-google-sign-in';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCtzcAZU6jI3GTujhl0OJnX-66aGlgo3-I',
  authDomain: 'hacktile-1c463.firebaseapp.com',
  databaseURL: 'https://hacktile-1c463.firebaseio.com',
  projectId: 'hacktile-1c463',
  storageBucket: 'hacktile-1c463.appspot.com',
  messagingSenderId: '330006232380',
};


export class LoginUseCase {

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  async login() {

    await GoogleSignIn.configure({
      clientID: '330006232380-d04q3bcfb28bp088qg1uhmdjj6gonjq9.apps.googleusercontent.com',
      scopes: ['openid', 'email', 'profile'],
      shouldFetchBasicProfile: true,
    });

    const user = await GoogleSignIn.signInPromise();
    let credential = firebase.auth.GoogleAuthProvider.credential(user.idToken, user.accessToken);
    firebase.auth().signInWithCredential(credential).then((result) => {
      firebase.database().ref(`users/${result.uid}`).set({
        email: result.email,
        photoURL: result.photoURL,
        name: result.displayName,
      });
    }).catch( error => {
      console.error(error);
    });

  }
}
