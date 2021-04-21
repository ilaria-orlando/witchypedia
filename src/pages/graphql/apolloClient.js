import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

async function loginEmailPassword(email, password) {
  // Create an anonymous credential
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    assert(user.id === app.currentUser.id)
    return user
  } catch(err) {
    console.error("Failed to log in", err);
  }
}
loginEmailPassword("joe.jasper@example.com", "passw0rd").then(user => {
  console.log("Successfully logged in!", user)
})
const client = new ApolloClient({
  uri: 'https://realm.mongodb.com/api/client/v2.0/app/witchypedia-wigwf/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));