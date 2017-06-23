import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { HeadersAppender, HttpClient, HttpInterceptor, RequestBuilder } from './http';
import { Observable, Subscription } from 'rxjs';
import React, { Component } from 'react';
import { Timer, TimerStore } from './timer';

import { Provider } from 'mobx-react';

const timerStore = new TimerStore();

setInterval(() => {
  timerStore.tick();
}, 1000);

export class JsonHeadersAppender implements HeadersAppender {
  append(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  }
}

class SampleInterceptor implements HttpInterceptor {
    before(request: Request): Request {
      console.log('Before Interceptor');
      return request;
    }

    after?(res: Observable<Response>): Observable<any> {
      console.log('After Interceptor');
      return res;
    }
}

export class Login extends Component<any, any> {

  static navigationOptions = {
    title: 'Login',
  };

  private subscriptions: Subscription[] = [];

  onLoginPressed() {
    let http = new HttpClient();
    http.addInterceptor(new SampleInterceptor());

    let body = { clientID: 'appClient',  clientSecret: this.state.password };
    let headers = new JsonHeadersAppender();

    let requestBuilder = new RequestBuilder('POST', 'https://lab-in-hands-app-piloto-dev.herokuapp.com/v1/', 'authenticate');
    requestBuilder.withBody(body).withHeader(headers);

    this.subscriptions.push(
      http.request(requestBuilder).subscribe(
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


