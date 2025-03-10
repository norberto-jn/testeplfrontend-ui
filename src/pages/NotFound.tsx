import { useNavigate } from 'react-router-dom'
import './notfound.css'

const NotFound = () => {

    const navigate = useNavigate()
    const handleGoBack = () => navigate(-1)    

    return (
        <div className="notFoundContainer">
            <h1 className="notFoundTitle">404 - Página Não Encontrada</h1>
            <p className="notFoundText">
                Desculpe, a página que você está procurando não existe.
            </p>
            <button
                onClick={handleGoBack}
                className="notFoundButton"
            >
                Voltar para a página anterior
            </button>
        </div>
    )
}

export default NotFound