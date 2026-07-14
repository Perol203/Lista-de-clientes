import { Cliente } from "./classes.js"

export function validarCliente(nome, hora, email) {
  return nome.trim() !== "" && hora !== "" && email.includes("@")
}

export function criarCliente(nome, hora, email) {
  return new Cliente(nome.trim(), hora, email.trim())
}

export function limparFormulario(campos) {
  campos.forEach((campo) => (campo.value = ""))
}

export function criarClienteElemento(cliente) {
  const item = document.createElement("li")
  item.className = "cliente-item"
  item.innerHTML = `
    <span>${cliente.client}</span>
    <span>${cliente.hour}</span>
    <span>${cliente.email}</span>
  `

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "X"
  deleteButton.className = "delete"
  deleteButton.dataset.id = cliente._id
  item.appendChild(deleteButton)
  return item
}

export function atualizarListaClientes(clientes, container) {
  container.innerHTML = ""
  clientes.forEach((cliente) => container.appendChild(criarClienteElemento(cliente)))
}

export function encontrarClientePorEmail(clientes, email) {
  return clientes.find((cliente) => cliente.email.toLowerCase() === email.toLowerCase())
}

export function contarClientes(clientes) {
  return clientes.reduce((total) => total + 1, 0)
}

export function formatarClientes(clientes) {
  return clientes.map((cliente) => ({
    ...cliente,
    nomeMaiusculo: cliente.client.toUpperCase(),
  }))
}
