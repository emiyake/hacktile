import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { LoginUseCase } from '../../domain';
import { Subscription } from 'rxjs';

export class Login extends Component<any, any> {

  static navigationOptions = {
    title: 'Entrar',
  };

  private subscriptions: Subscription[] = [];
  private loginUC: LoginUseCase = new LoginUseCase();

  onLoginPressed() {
    this.loginUC.login();
  }
  onLogoutPressed() {
    this.loginUC.logout();
  }

  render() {
    return (
      <View style={styles.container}>


        <View style={styles.buttonContainer}>
          <Button title='Entrar' onPress={() => this.onLoginPressed()}/>
          <Button title='Sair' onPress={() => this.onLogoutPressed()}/>

        </View>

      </View>
    );
  }

  componentWillUnmount?() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputLabel: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    padding: 8,
  },
  buttonContainer: {
    padding: 8,
  },
});


