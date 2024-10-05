import './ListaSuspensa.css'

export function ListaSuspensa({ label, itens, obrigatorio, value, onChange }) {

    const _onChange = event => {
        onChange(event.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                required={obrigatorio}
                
                value={value}
                onChange={_onChange}
            >
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}