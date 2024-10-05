import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export function Formulario({ times, onSubmit }) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const _onSubmit = event => {
        event.preventDefault()
        onSubmit({ nome, cargo, imagem, time })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={_onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}

                    value={nome}
                    onChange={setNome}
                />

                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}

                    value={cargo}
                    onChange={setCargo}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"

                    value={imagem}
                    onChange={setImagem}
                />

                <ListaSuspensa
                    label="Time"
                    obrigatorio={true}
                    itens={times.map(t => ({ label: t.nome, valor: t.nome }))}

                    value={time}
                    onChange={setTime}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}