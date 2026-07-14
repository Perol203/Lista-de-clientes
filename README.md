# Restaurante DomCasmurro

Projeto de lista de clientes desenvolvido com HTML, CSS e JavaScript, organizado em módulos ES Modules e com interface dinâmica.

## ✨ Sobre o projeto

Este projeto simula uma pequena interface de cadastro de clientes para o restaurante "DomCasmurro". O usuário pode:

- adicionar um cliente com nome, horário e email;
- visualizar a lista de clientes em tempo real;
- excluir clientes da lista;
- buscar um cliente pelo email;
- ver a quantidade de clientes cadastrados.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- API externa: CRUD CRUD

## 📁 Estrutura do projeto

```text
.
├── index.html
├── styles.css
├── README.md
└── js
    ├── api.js
    ├── app.js
    ├── classes.js
    └── utils.js
```

## ▶️ Como executar

1. Abra o arquivo `index.html` no navegador.
2. Preencha o nome, o horário e o email do cliente.
3. Clique em **Adicionar**.
4. A lista é atualizada automaticamente sem recarregar a página.
5. Use o botão de busca para localizar um cliente por email.
6. Clique em **X** para remover um cliente.

## 🔧 Organização do código

- `classes.js` contém a classe `Cliente` e o método `toJSON()` para enviar dados à API.
- `utils.js` contém funções puras de validação, limpeza de formulário, renderização e busca utilizando `map()`, `find()` e `reduce()`.
- `app.js` contém a lógica principal, eventos e chamadas à API.
- `api.js` contém a URL da API externa.

## 🧠 Refatorações aplicadas

- programação orientada a objetos com a classe `Cliente`;
- separação do código em módulos específicos;
- uso de funções puras e métodos funcionais `map()`, `find()` e `reduce()`;
- manipulação do DOM via `addEventListener()` e renderização dinâmica;
- validação de entrada antes de adicionar clientes;
- atualização de interface sem recarregar a página.

## 🧑‍💻 Autor

Projeto desenvolvido para fins de aprendizado.
