import {
ApolloClient,
createNetworkInterface,
} from 'react-apollo';

import { GraphqlInterceptor } from './graphql.interceptor';

export class GraphqlClient {

   private networkInterface;
   private apolloClient: ApolloClient;

   constructor(apiUrl, interceptor?: GraphqlInterceptor) {

     this.networkInterface = createNetworkInterface({
       uri: apiUrl + 'graphql',
     });


     if (interceptor) {
       this.networkInterface.use([{
         applyMiddleware: (req: any, next: any) => {
           return interceptor.before(req, next);
         },
       }]);

       this.networkInterface.useAfter([{
         applyAfterware: (res: any, next: any) => {
           return interceptor.after(res, next);
         },
       }]);
     }

     this.apolloClient = new ApolloClient({ networkInterface: this.networkInterface });
   }

   public getGraphqlClient() {
     return this.apolloClient;
   }
 }
