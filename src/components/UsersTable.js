import React, { Component } from "react";
import { Link } from "react-router-dom";
//import {UsersList} from "./UsersTable";
//export const users = () => <h1>Listagem de usuários</h1>;

export class UsersTable extends Component {
    state = {
        usrList: [
            {
                nome: "Rodolfo Bernardes",
                email: "rodolfonbernardes@hotmail.com",
                idade: "39"
            },
            {
                nome: "Davi Gabriel",
                email: "davigabriel@hotmail.com",
                idade: "10"
            },
            {
                nome: "João Pedro",
                email: "joaopedro@hotmail.com",
                idade: "06"
            },
            {
              nome: "Silvana Franco",
              email: "silvanafranco@hotmail.com",
              idade: "06"
            }
        ]
    };

    removeUser = (email) => {
      let newList = [];
      for (let user of this.state.usrList) {
          if (user.email !== email) {
              newList.push(user);
          }
      }
      this.setState({
          usrList: newList
      });
    };

    render() {
        return (
          <div>
            <table>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Deletar</th>
              </tr>
              {this.state.usrList.map(user => (
                <tr>
                  <td><Link to={'/users/'+user.nome}>{user.nome}</Link></td>
                  <td>{user.email}</td>
                  <td>{user.idade}</td>
                  <td><button onClick={() => this.removeUser(user.email)}>Del</button></td>
                </tr>
              ))}
            </table>
          </div>
        );
      }
}