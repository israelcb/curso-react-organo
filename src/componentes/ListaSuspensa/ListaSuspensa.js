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
                <option value="">Selecione um time</option>
                {itens.map(it =>
                    <option key={it.valor}>
                        {it.label}
                    </option>
                )}
            </select>
        </div>
    )
}