import './MyForm.css'
import React, { useState } from 'react'

function MyForm({ user }) {
    // 6 - Controlles Inputs

    // 3 - Gereniamento de Dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");

        handleClean();

        console.log("Name: " + name);
        console.log("E-mail:" + email);
        console.log("Bio:" + bio);
        console.log("Role:" + role);
    }

    const handleClean = (event) => {
        console.log("Limpando o formulário");

        setName('');
        setEmail('');
        setBio('');
    }

    return (
        <>
            {/*5 - Envio de Form*/}
            {/*1 - Criação do Form*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input type='text' name='name' placeholder='Digite o seu nome' value={name} onChange={handleName} />
                </div>
                {/*2 - Label envolvendo input*/}
                <div>
                    <label>
                        <span>E-mail: </span>
                        {/*4 - Simplificação do state*/}
                        <input type="email" name='email' placeholder='Digite o seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    {/* 8 - textarea*/}
                    <label>
                        <span>Bio:</span>
                        <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio} cols="30" rows="10" />
                    </label>
                </div>
                <div>
                    {/*9 - Select*/}
                    <label>
                        <span>Função do sistema</span>
                        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </div>
                <input type='submit' value="Enviar" />
                <input type='button' onClick={handleClean} value="Limpar Formulários" />
            </form>
        </>
    )
}

export default MyForm
