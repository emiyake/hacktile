import firebase from 'firebase';

export class UserListUseCase {
  exec(): firebase.Promise<any> {
    return firebase.database().ref('users').once('value');
  }
}
