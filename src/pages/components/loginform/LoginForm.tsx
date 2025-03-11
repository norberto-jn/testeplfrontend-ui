import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, FormField } from 'semantic-ui-react';
import toastContainerCP from '../../../components/ToastContainer';
import ToastTypeEnum from '../../../components/enums/ToastTypeEnum';
import './loginform.css';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dados = {
            email,
            password: senha,
        };

        try {
            const response = await fetch('http://localhost:5171/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('name', data.name);
                localStorage.setItem('job', data.job);

                navigate('/home');
            } else {
                toastContainerCP(ToastTypeEnum.ERROR, data.message || 'Erro ao fazer login!');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            toastContainerCP(ToastTypeEnum.ERROR, 'Erro ao conectar ao servidor!');
        }
    };

    return (
        <>
            <div className="loginform-container">
                <div>
                    <div className="loginform-header">
                        <img src="/logo_2.png" alt="Logo" className="loginform-logo" />
                    </div>

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