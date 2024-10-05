import './CampoTexto.css'

export function CampoTexto({ label, placeholder }) {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    )
}