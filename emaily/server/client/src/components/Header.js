import React, { Component } from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

class Header extends React.Component {
  render() {
    return (
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>ChironEye</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button intent="primary" icon="log-in" text="Sign In With Google" />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default Header;
