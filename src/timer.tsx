import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';

import React from 'react';
import { Text } from 'react-native';

@inject('timerStore') @observer export class Timer extends React.Component<any, any> {

  render() {
    return (<Text>Seconds passed: { this.props.timerStore.secondsPassed  } </Text> );
  }
}

export class TimerStore {
  @observable secondsPassed = 0;

  @action tick() {
    this.secondsPassed++;
  }
}
