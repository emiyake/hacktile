import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { Component } from 'react';
import { Timer, TimerStore } from './timer';

import { HttpClient } from './core/http-client';
import { Provider } from 'mobx-react';
import { Subscription } from 'rxjs/Subscription';

const timerStore = new TimerStore();

setInterval(() => {
  timerStore.tick();
}, 1000);

export class Login extends Component<any, any> {

  static navigationOptions = {
    title: 'Login',
  };

  private subscriptions: Subscription[] = [];

  onLoginPressed() {
    let http = new HttpClient();
    this.subscriptions.push(
      http.post('authenticate', { clientID: 'appClient',  clientSecret: this.state.password })
      .subscribe(
        success => console.log(success),
        error => console.log(error),
      ),
    );
  }

  onSignUpPressed() {
    const { navigate } = this.props.navigation;
    navigate('SignUp');
  }

  render() {
    return (
      <Provider timerStore={timerStore}>
      <View style={styles.container}>

        <Text style={styles.title}>
          Login
        </Text>

        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({email: text})} />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})} />

        <View style={styles.buttonContainer}>
          <Button title='Entrar' onPress={() => this.onLoginPressed()}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Cadastrar' onPress={() => this.onSignUpPressed()}/>
        </View>

        <Timer />

      </View>
      </Provider>
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


