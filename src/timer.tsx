import React from 'react';
import { Text } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer export class Timer extends React.Component<any, any> {
    @observable secondsPassed = 0;

    componentWillMount() {
        setInterval(() => {
            this.secondsPassed++;
        }, 1000);
    }

    render() {
        return (<Text>Seconds passed: { this.secondsPassed } </Text> );
    }
}


