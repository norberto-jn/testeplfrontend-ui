## Passo a Passo para Rodar o Projeto em Sua Máquina

1. **Criação do diretório para o projeto:**  
   Crie uma pasta onde o front-end será armazenado:  
   ```bash
   mkdir project02
   ```

2. **Acessar o diretório criado:**  
   Entre na pasta `project02`:  
   ```bash
   cd project02
   ```

3. **Clonar o repositório do projeto:**  
   Clone o repositório do front-end:  
   ```bash
   git clone https://github.com/norberto-jn/testeplfrontend-ui.git
   ```

4. **Copiar o arquivo `docker-compose.yaml`:**  
   Copie o arquivo `docker-compose.yaml` do repositório clonado (`testeplfrontend-ui`) e cole-o na raiz do diretório `project02`.

5. **Rodar o Docker Compose:**  
   Dentro da pasta `project02`, execute o comando:  
   ```bash
   docker compose up -d
   ```

6. **Instalar Docker Compose (caso necessário):**  
   Caso o Docker Compose não esteja instalado em sua máquina, siga o tutorial de instalação oficial [aqui](https://docs.docker.com/compose/install/).

7. **Verificar se o projeto está rodando:**  
   Após o Docker Compose subir o container, verifique o status do projeto com:  
   ```bash
   docker compose ps
   ```

8. **Acessar a aplicação no navegador:**  
   Abra um navegador de sua preferência e acesse a URL:  
   ```
   http://localhost:5172/auth/login
   ```

Após seguir esses passos, o projeto deve estar rodando corretamente. Se encontrar algum problema, entre em contato!


## INSTRUÇÕES PARA O TESTE TÉCNICO

- Crie um fork deste projeto (https://github.com/CAPYS-IT/TestePlenoFrontend).
  É preciso estar logado na sua conta Github;
- Quando você começar, faça um commit vazio com a mensagem "Iniciando o teste de tecnologia" e quando terminar, faça o commit com uma mensagem "Finalizado o teste de tecnologia";
- Commit após cada ciclo de refatoração pelo menos;
- Não use branches;
- Você deve prover evidências suficientes de que sua solução está completa indicando, no mínimo, que ela funciona;
- Não há restrição quanto ao uso de bibliotecas de apoio;
- No final envie para o RH o link do seu projeto.
- Os arquivos de Mocks estão salvos na pasta src/mocks
- O link para acesso ao arquivo Figma: (https://www.figma.com/design/pn0n2pyoyKHTwcYSTgwpxq/Teste-Capys?node-id=13099-314&m=dev&t=XASy4RX6R3lgKpYS-1)

---

## O TESTE

- Criar layout de Login seguindo o protótipo Figma;
- Criar layout da pagina home seguindo o protótipo Figma;

---

## BÔNUS

- Componentes bem estruturados
- Uso de programas para mockar os dados como por exemplo mockoon. (carregar o arquivo json do mockoon junto com o projeto para avaliação)

---

## PONTOS QUE SERÃO AVALIADOS

- Boas práticas;
- Estrutura de código e pastas;
- Layout;
- Estilização;
