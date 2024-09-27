# Passos seguidos para estruturação do setup Less 

Este projeto configura um ambiente básico de desenvolvimento para compilar arquivos LESS usando o Grunt e servir o resultado através de um servidor local simples.

## Estrutura do Projeto

A estrutura básica de diretórios e arquivos criada para este projeto é a seguinte:

/meu-projeto-less 
│ 
├── /src 
│   ├── /less 
│   │ ├── main.less # Arquivo principal com os estilos LESS 
│   │ └── variables.less # Arquivo contendo variáveis LESS para reutilização 
│   └── /css 
│       └── main.css # Arquivo CSS compilado a partir do LESS 
├── Gruntfile.js # Arquivo de configuração do Grunt 
├── package.json # Gerenciamento de dependências e scripts npm 
├── index.html # Página HTML para visualização no navegador 


## Passos para estruturação do setup LESS

### 1. Criação da estrutura de diretórios e arquivos

- **Pasta `src/less`**: 
  Crie uma pasta chamada `src` e dentro dela, a pasta `less`, onde serão armazenados os arquivos LESS. No diretório `less`, crie dois arquivos:
  - `main.less`: Arquivo principal que importará todos os outros arquivos LESS.
  - `variables.less`: Arquivo onde você define variáveis reutilizáveis (como cores, espaçamentos, etc.) para uso no projeto.

- **Pasta `src/css`**: 
  Também dentro da pasta `src`, crie uma pasta `css` que conterá o arquivo `main.css`, que será o resultado compilado dos arquivos LESS.

- **Arquivos na raiz**:
  - `Gruntfile.js`: Arquivo que define as tarefas do Grunt, como a compilação dos arquivos LESS.
  - `index.html`: Um arquivo HTML básico que referenciará o arquivo CSS gerado para visualização no navegador.
  - `package.json`: Arquivo de configuração gerado pelo npm para gerenciar as dependências do projeto.

### 2. Iniciar o Projeto com `npm init`

No diretório raiz do seu projeto, execute o comando:

```bash
npm init -y 
```
Isso criará o arquivo package.json, que será usado para armazenar as informações do projeto, como nome, versão e as dependências necessárias. O parâmetro -y aceita as configurações padrão sem perguntar.

### 3. Instalar o Grunt e cependências
- Use o seguinte comando para instalar as dependências necessárias como dependências de desenvolvimento:
```bash
npm install grunt grunt-contrib-less grunt-contrib-watch --save-dev
```
- `grunt`: O Grunt é um "task runner", uma ferramenta que automatiza tarefas repetitivas, como a compilação de LESS para CSS.
- `grunt-contrib-less`: Plugin oficial do Grunt para compilar arquivos LESS.
- `grunt-contrib-watch`: Plugin que observa mudanças nos arquivos LESS e executa automaticamente a compilação.

### 4. Configurar o Grunt no `Gruntfile.js`
No arquivo `Gruntfile.js`, defina as tarefas que o Grunt executará para compilar o LESS.

### 5. Executar a compilação com Grunt
Agora você pode compilar os arquivos LESS para CSS. Para isso, basta rodar o seguinte comando no terminal:
```bash
npx grunt
```
### 6. Criar um servidor local para visualização
**Usando `serve` (via Snapcraft)**:
- Se você tiver o Snapcraft instalado, execute:
```bash
sudo snap install serve
```
- Depois de instalado, inicie o servidor com o comando:
```bash
serve .
```
