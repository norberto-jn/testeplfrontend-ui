import { useNavigate } from 'react-router-dom'
import Menu from "./components/menu/Menu"
import UserGreeting from "./components/usergreeting/UserGreeting"
import './home.css'

const Home = () => {

    const navigate = useNavigate()
    const handleLogout = () =>  navigate('/auth/login')
    
    return (
        <div className="homeContainer">
            <Menu onLogout={handleLogout} />
            <UserGreeting userName="Norberto" userRole="Desenvolvedor" />
            <div className="content">
                <p className="text">
                    Que pena! Estamos em desenvolvimento :(
                </p>
                <p className="text">
                    Nossa aplicação está em desenvolvimento, em breve teremos novidades.
                </p>
            </div>
        </div>
    )
}

export default Home