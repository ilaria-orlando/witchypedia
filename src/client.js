import fetch from 'isomorphic-fetch';
import * as Realm from "realm-web";
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';


const APP_ID = 'witchypedia-wigwf';
const graphqlUri = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

// Local apps should use a local URI!
// const graphqlUri = `https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
// const graphqlUri = `https://eu-west-1.aws.stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
// const graphqlUri = `https://ap-southeast-1.aws.stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
  },
  cache: new InMemoryCache()
});

// const app = new Realm.App({ id: APP_ID });
// const credentials = Realm.Credentials.anonymous();
// try {
//   const user = await app.logIn(credentials);
// } catch(err) {
//   console.error("Failed to log in", err);
// }

// Connect to your MongoDB Realm app
const app = new Realm.App(APP_ID);

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser.accessToken
}

// Configure the ApolloClient to connect to your app's GraphQL endpoint
const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
    // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
    // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
    // access token before sending the request.
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache()
});

export default client;

