import React, { useState } from 'react'; // Importando useState
import { Bounce, ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, FormField } from 'semantic-ui-react';
import toastContainerCP from '../../../components/ToastContainer';
import ToastTypeEnum from '../../../components/enums/ToastTypeEnum';
import './signupform.css'; // Importando o arquivo CSS
import { useNavigate } from 'react-router-dom';

const SignUpForm: React.FC = () => {
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
        e.preventDefault(); // Evita o recarregamento da página

        // Verifica se as senhas coincidem
        if (/*senha !== confirmarSenha*/false) {
            alert('As senhas não coincidem!');
            return;
        }

        // Dados a serem enviados para a API
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
                // Limpa os campos do formulário
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
            <div className="signupform-container">
                <div>
                    {/* Cabeçalho com logo e botão de voltar */}
                    <div className="signupform-header">
                        <img src="/logo_capys.png" alt="Logo" className="signupform-logo" />
                        <Button className="signupform-header-button" onClick={() => navigate('/auth/login')}>
                            Voltar
                        </Button>
                    </div>

                    {/* Formulário */}
                    <div className="signupform-form-card">
                        <div className="signupform-form-title">Crie sua conta</div>
                        <div className="signupform-form-subtitle">Rápido e grátis, vamos nessa</div>

                        <Form onSubmit={handleSubmit}>
                            <FormField>
                                <label className="signupform-form-label">Nome</label>
                                <input
                                    placeholder='Nome'
                                    className="signupform-form-input"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="signupform-form-label">Email</label>
                                <input
                                    placeholder='Email'
                                    className="signupform-form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="signupform-form-label">Senha</label>
                                <input
                                    type="password"
                                    placeholder='Senha'
                                    className="signupform-form-input signupform-form-input-dark"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="signupform-form-label">Confirmar Senha</label>
                                <input
                                    type="password"
                                    placeholder='Confirmar Senha'
                                    className="signupform-form-input"
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="signupform-form-label">Bio</label>
                                <input
                                    placeholder='Bio'
                                    className="signupform-form-input"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="signupform-form-label">Contato</label>
                                <input
                                    placeholder='Contato'
                                    className="signupform-form-input"
                                    value={contato}
                                    onChange={(e) => setContato(e.target.value)}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label className="signupform-form-label">Selecionar Cargo</label>
                                <input
                                    placeholder='Cargo'
                                    className="signupform-form-input"
                                    value={cargo}
                                    onChange={(e) => setCargo(e.target.value)}
                                    required
                                />
                            </FormField>

                            <Button type='submit' className="signupform-form-button">Cadastrar</Button>

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

export default SignUpForm;