import { Colaborador } from '../Colaborador/Colaborador'
import './Time.css'

export function Time({ nome, corPrimaria, corSecundaria, colaboradores }) {

    if (colaboradores.length === 0) {
        return (<></>)
    }

    return (
        <section
            className="time"
            style={{ backgroundColor: corSecundaria }}
        >
            <h3
                style={{ borderBottomColor: corPrimaria }}
            >{nome}</h3>

            <div className='colaboradores'>
                {colaboradores.map(c =>
                    <Colaborador
                        key={c.nome}
                        nome={c.nome}
                        cargo={c.cargo}
                        imagem={c.imagem}
                        cor={corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}