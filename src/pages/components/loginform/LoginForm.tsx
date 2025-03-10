import React, { useState } from 'react'; // Importando useState
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, FormField } from 'semantic-ui-react';
import toastContainerCP from '../../../components/ToastContainer';
import ToastTypeEnum from '../../../components/enums/ToastTypeEnum';
import './loginform.css'; // Importando o arquivo CSS

const LoginForm: React.FC = () => {
    // Estados para armazenar os valores dos inputs
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [contato, setContato] = useState<string>('');
    const [cargo, setCargo] = useState<string>('');
    const navigate = useNavigate();

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dados = {
            nome,
            email,
            senha,
            bio,
            contato,
            cargo,
        };

        try {
            if (true) {
                toastContainerCP(ToastTypeEnum.SUCCESS);
                setNome('');
                setEmail('');
                setSenha('');
                setConfirmarSenha('');
                setBio('');
                setContato('');
                setCargo('');
            } else {
                alert('Erro ao cadastrar. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na conexão com o servidor.');
        }
    };

    return (
        <>
            <div className="loginform-container">
                <div>
                    {/* Cabeçalho com logo e botão de voltar */}
                    <div className="loginform-header">
                        <img src="/logo_2.png" alt="Logo" className="loginform-logo" />
                    </div>

                    {/* Formulário */}
                    <div className="loginform-form-card">
                        <div className="loginform-form-title">Login</div>

                        <Form onSubmit={handleSubmit}>
                            <FormField>
                                <label className="loginform-form-label">Email</label>
                                <input
                                    placeholder='Email'
                                    className="loginform-form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="loginform-form-label">Senha</label>
                                <input
                                    type="password"
                                    placeholder='Senha'
                                    className="loginform-form-input loginform-form-input-dark"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </FormField>

                            <Button type='submit' className="loginform-form-button">Entrar</Button>
                            <div style={{ textAlign: 'center', marginTop: '1.9rem', marginBottom: '1rem' }}>
                                <span style={{ color: '#868E96' }}>Ainda não possui uma conta?</span>
                            </div>
                            <Button type='submit' className="loginform-form-button-signup" onClick={() => navigate('/signup')} >Cadastre-se</Button>

                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                transition={Bounce}
                            />
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;