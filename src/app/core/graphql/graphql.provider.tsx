import React, {Component} from 'react';

import { ApolloProvider } from 'react-apollo';
import { GraphqlClient } from './';

export interface GraphqlProviderProps {
  client: GraphqlClient;
}

export class GraphqlProvider extends Component<GraphqlProviderProps, any> {
  render() {
    return (
      <ApolloProvider client={this.props.client.getGraphqlClient()} >
        {this.props.children}
      </ApolloProvider>
    );
  }
}
