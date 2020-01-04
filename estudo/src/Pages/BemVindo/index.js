/*

// Local
Existe mesmo se a aba for fechada, é um estado global

localStorage.setItem('@nome-do-app/chave', valor)       // Cria
localStorage.getItem('@nome-do-app/chave')              // Traz/lê
localStorage.removeItem('@nome-do-app/chave', valor)    // Limpa

// Session
Existe enquanto a sessão não for fechada, enquanto a aba não for fechada

sessionStorage.setItem('@nome-do-app/chave', valor)         // Cria
sessionStorage.getItem('@nome-do-app/chave')                // Traz/lê
sessionStorage.removeItem('@nome-do-app/chave', valor)      // Limpa

// Questão de segurança => Limpar storage depois de um determinado tempo para não expor dados sensíveis

// Como acessar o LocalStorage/SessionStorage
Browser > Inspect > Application > 
*/

import React, { Component } from 'react';

class BemVindo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        // atualiza o state verificando se há ou não atualização de user no storage
        const username = localStorage.getItem("@bemVindo-app/user")
        this.setState({ username })
    }

    handleSubmit = event => {
        // impede que a página atualize 
        event.preventDefault()

        const newUsername = event.target.elements.username.value
        localStorage.setItem("@bemVindo-app/user", newUsername)

        // força o reload da página para que a mensagem apareça
        window.location.reload()
        console.log("Event: ", event)
    }

    handleLogout = () => {
        // limpa os dados da sessão ao fazer logout
        localStorage.removeItem("@bemVindo-app/user")
        window.location.reload()
    }

    render() {
        const { username } = this.state
        // caso haja um username salvo no storage, ele é exibido com Bem vindo
        // se não, abre o form para ser adicionado
        return (
            <>
                {/* trabalhando com ternário */}
                {username !== null ? (
                    <div>
                        <p>{`Bem vindo(a) ${username}!`}</p>
                        <button onClick={this.handleLogout}>Sair</button>
                    </div>

                ) : (
                        <form onSubmit={this.handleSubmit}>
                            <input name="username" placeholder="Nome de usuário" required />
                            <button>Salvar</button>
                        </form>
                    )
                }
            </>
        )
    }
}
export default BemVindo;