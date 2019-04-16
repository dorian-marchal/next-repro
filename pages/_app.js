import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";

function makeStore() {
  foo; // ReferenceError, foo is undefined.
  return createStore(state => state, { isLoggedIn: true });
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
