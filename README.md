# Restaurante DomCasmurro

Projeto de lista de clientes desenvolvido com HTML, CSS e JavaScript, com integração a uma API pública para armazenar, exibir e remover registros.

## ✨ Sobre o projeto

Este projeto simula uma pequena interface de cadastro de clientes para o restaurante "DomCasmurro". O usuário pode:

- adicionar um cliente pelo nome;
- informar um horário;
- visualizar os itens na lista;
- excluir um cliente diretamente pela interface.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API externa: CRUD CRUD

## 📁 Estrutura do projeto

```text
.
├── index.html
├── styles.css
├── script.js
└── api.js
```

## ▶️ Como executar

1. Abra o arquivo `index.html` no navegador.
2. Digite o nome do cliente.
3. Escolha o horário.
4. Clique em **Adicionar**.
5. Use o botão **X** para remover um cliente da lista.

## 🔧 Observações

- O projeto usa o arquivo `api.js` para armazenar a URL da API.
- A comunicação com a API é feita via `fetch`, usando `POST` para adicionar e `DELETE` para remover.
- O botão de exclusão usa o `_id` retornado pela API, mas esse identificador não é exibido para o usuário.

## 🎯 Objetivo

Esse projeto foi criado como exercício de estudo para praticar:

- manipulação do DOM;
- uso de eventos em JavaScript;
- integração com API REST;
- criação de interfaces simples e responsivas.

## 🧑‍💻 Autor

Projeto desenvolvido para fins de aprendizado.
