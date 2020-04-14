import React, { Component } from "react";

export class UsersItem extends Component {
  componentDidMount() {
      document.title = this.props.match.params.nome;
  }

  render() {
    return (
      <div>
        <p>{this.props.match.params.nome}</p>
      </div>
    );
  }
}