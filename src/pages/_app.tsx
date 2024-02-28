import 'src/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} /* client={client} */ />;
};

export default MyApp;
