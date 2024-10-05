import './ListaSuspensa.css'

export function ListaSuspensa({ label, itens, obrigatorio }) {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select required={obrigatorio}>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}