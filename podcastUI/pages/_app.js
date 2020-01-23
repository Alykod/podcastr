import App from "next/app";
import GlobalState from "../components/context/globalState";
import { ApolloProvider } from '@apollo/react-hooks';


import withData from '../lib/apollo';


function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withData(MyApp);
