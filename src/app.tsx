import React, {Component} from 'react';

import { ApolloProvider } from 'react-apollo';
import { GraphqlClient } from './graphql';
import { TabNav } from './tabbarNavigator';

const graphqlClient = new GraphqlClient('https://labinhands-api-dev.herokuapp.com/');

export class App extends Component<any, any> {

  render() {
    return (
      <ApolloProvider client={graphqlClient.getGraphqlClient()}>
        <TabNav />
      </ApolloProvider >
    );
  }
}
