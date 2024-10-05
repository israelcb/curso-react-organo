import './CampoTexto.css'

export function CampoTexto({ label, placeholder, obrigatorio, onChange, value }) {
    
    const _onChange = event => {
        onChange(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                value={value}
                onChange={_onChange}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}