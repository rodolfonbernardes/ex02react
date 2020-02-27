import React, { Component } from "react";
import {UsersList} from "./UsersList";
//export const users = () => <h1>Listagem de usuários</h1>;

export class Users extends Component {
    state = {
        usrList: [
            {
                nome: "Rodolfo Bernardes",
                email: "rodolfonbernardes@hotmail.com",
                idade: "39",
                status: 1
            },
            {
                nome: "Davi Gabriel",
                email: "davigabriel@hotmail.com",
                idade: "10",
                status: 1
            },
            {
                nome: "João Pedro",
                email: "joaopedro@hotmail.com",
                idade: "06",
                status: 1
            },
            {
              nome: "João Pedro",
              email: "joaopedro@hotmail.com",
              idade: "06",
              status: 1
            }
        ]
    };

    render() {
        return (
          <div>
            <ul>
              {this.state.usrList.map(user => (
                <li>
                  <UsersList                    
                    userNome={user.nome}
                    userEmail={user.email}
                    userIdade={user.idade}
                    userStatus={user.status}
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      }
    

}