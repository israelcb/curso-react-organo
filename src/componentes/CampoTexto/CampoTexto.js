import './CampoTexto.css'

export function CampoTexto({ label, placeholder, obrigatorio }) {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeholder} required={obrigatorio}/>
        </div>
    )
}