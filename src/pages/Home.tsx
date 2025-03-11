import { useNavigate } from 'react-router-dom';
import Menu from './components/menu/Menu';
import UserGreeting from './components/usergreeting/UserGreeting';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    // Recupera os valores do localStorage
    const userName = localStorage.getItem('name') || 'Usuário'; // Fallback para 'Usuário' se não houver nome
    const userRole = localStorage.getItem('job') || 'Cargo'; // Fallback para 'Cargo' se não houver job

    const handleLogout = () => {
        // Limpa os dados do localStorage ao fazer logout
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('job');

        // Redireciona para a página de login
        navigate('/auth/login');
    };

    return (
        <div className="homeContainer">
            <Menu onLogout={handleLogout} />
            {/* Passa os valores recuperados para o componente UserGreeting */}
            <UserGreeting userName={userName} userRole={userRole} />
            <div className="content">
                <p className="text">
                    Que pena! Estamos em desenvolvimento :(
                </p>
                <p className="text">
                    Nossa aplicação está em desenvolvimento, em breve teremos novidades.
                </p>
            </div>
        </div>
    );
};

export default Home;