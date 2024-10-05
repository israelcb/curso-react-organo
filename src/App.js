import { useState } from "react"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"

function App() {

    const [colaboradores, setColaboradores] = useState([])

    const adicionarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner />
            <Formulario onSubmit={adicionarColaborador} />
        </div>
    )
}

export default App
