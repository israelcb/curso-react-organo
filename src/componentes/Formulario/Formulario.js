import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export function Formulario() {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                />

                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                />

                <ListaSuspensa
                    label="Time"
                    itens={times}
                    obrigatorio={true}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}