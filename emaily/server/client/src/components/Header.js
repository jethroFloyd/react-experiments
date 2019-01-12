import React from "react";
import { connect } from "react-redux";
import {
  Alignment,
  Button,
  Navbar,
  AnchorButton,
  Icon
} from "@blueprintjs/core";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <Button
            intent="warning"
            icon="log-in"
            text="Sign In With Google"
            loading="true"
          />
        );
      case false:
        return (
          <AnchorButton
            intent="success"
            icon="log-in"
            text="Sign In With Google"
            href="/auth/google"
          />
        );
      default:
        return (
          <AnchorButton
            intent="danger"
            icon="log-out"
            text="Sign Out"
            href="/api/logout"
          />
        );
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Icon icon="pulse" />
            &nbsp;ChironEye
          </Navbar.Heading>
          <AnchorButton
            icon="home"
            text="Home"
            minimal="true"
            href={this.props.auth ? "/surveys" : "/"}
          />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {this.renderContent()}
        </Navbar.Group>
      </Navbar>
    );
  }
}

function mapStateToProps(auth) {
  return auth;
}

export default connect(mapStateToProps)(Header);
