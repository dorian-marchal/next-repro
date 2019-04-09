import React from "react";
import Link from "next/link";

class Home extends React.Component {
  static getInitialProps() {
    const isClient = typeof window === "object";
    // Throw an error on client side to let Next render _error.
    if (isClient) {
      throw new Error("Oops from Home");
    }
    return {};
  }

  render() {
    return (
      <>
        <div>Welcome to Next.js!</div>
        <Link href="/">
          <a>Client side nav</a>
        </Link>
      </>
    );
  }
}

export default Home;
