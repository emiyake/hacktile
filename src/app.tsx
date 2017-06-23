import React, {Component} from 'react';

import { ApolloProvider } from 'react-apollo';
import { GraphqlClient } from './graphql';
import { TabNav } from './tabbarNavigator';

export class App extends Component<any, any> {

  render() {
    return (
      <ApolloProvider client={this.getGraphqlClient()}>
        <TabNav />
      </ApolloProvider >
    );
  }

  private getGraphqlClient() {
    let graphqlClient = new GraphqlClient('https://labinhands-api-dev.herokuapp.com/');
    return graphqlClient.getGraphqlClient();
  }

}
