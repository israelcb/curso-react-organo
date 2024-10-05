import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export function Formulario({ onSubmit }) {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(times[0])

    const _onSubmit = event => {
        event.preventDefault()
        onSubmit({ nome, cargo, imagem, time })
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
                    itens={times}
                    obrigatorio={true}

                    value={time}
                    onChange={setTime}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}