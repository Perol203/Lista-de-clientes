
import { ApiC } from "./api.js"
import { criarCliente, limparFormulario, atualizarListaClientes, validarCliente, encontrarClientePorEmail, contarClientes, formatarClientes } from "./utils.js"

const clientList = document.getElementById("clientes")
const botaoAdicionar = document.getElementById("Add")
const botaoBuscar = document.getElementById("Buscar")
const inputNome = document.getElementById("NewClient")
const inputHora = document.getElementById("Nhour")
const inputEmail = document.getElementById("email")
const inputBusca = document.getElementById("buscador")
const resultadoBusca = document.getElementById("Buscado")
const campoNomeBusca = document.getElementById("BuscNome")
const campoEmailBusca = document.getElementById("BuscEmail")
const campoHoraBusca = document.getElementById("BuscHora")
const quantidadeClientes = document.getElementById("QuantClient")
const statusText = document.getElementById("statusText")
const popupOverlay = document.getElementById("popupOverlay")
const closePopup = document.getElementById("closePopup")

const state = {
  clients: [],
}

function atualizarQuantidade() {
  const total = contarClientes(state.clients)
  quantidadeClientes.textContent = `${total}/50`
  statusText.textContent = total === 0 ? "Nenhum cliente cadastrado" : "Clientes cadastrados"
}

function atualizarInterface() {
  const clientesFormatados = formatarClientes(state.clients)
  console.log("Clientes formatados:", clientesFormatados)
  atualizarListaClientes(state.clients, clientList)
  atualizarQuantidade()
}

function mostrarPopup() {
  popupOverlay.classList.add("visible")
}

function fecharPopup() {
  popupOverlay.classList.remove("visible")
}

function exibirClienteEncontrado(cliente) {
  if (!cliente) {
    campoNomeBusca.textContent = "Cliente não encontrado"
    campoEmailBusca.textContent = ""
    campoHoraBusca.textContent = ""
    mostrarPopup()
    return
  }

  campoNomeBusca.textContent = cliente.client
  campoEmailBusca.textContent = `Email: ${cliente.email}`
  campoHoraBusca.textContent = `Horário: ${cliente.hour}`
  mostrarPopup()
}

function carregarClientes() {
  fetch(ApiC)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        state.clients = data
        atualizarInterface()
      }
    })
    .catch((error) => console.error("Erro na requisição:", error))
}

function adicionarCliente() {
  const nome = inputNome.value
  const hora = inputHora.value
  const email = inputEmail.value

  if (!validarCliente(nome, hora, email)) {
    alert("Preencha todos os campos corretamente.")
    return
  }

  const cliente = criarCliente(nome, hora, email)

  fetch(ApiC, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente.toJSON()),
  })
    .then((response) => response.json())
    .then((data) => {
      state.clients.push(data)
      atualizarInterface()
      limparFormulario([inputNome, inputHora, inputEmail])
    })
    .catch((error) => console.error("Erro na requisição:", error))
}

function deletarCliente(id) {
  fetch(`${ApiC}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        state.clients = state.clients.filter((cliente) => cliente._id !== id)
        atualizarInterface()
      } else {
        console.error("Erro ao deletar cliente.")
      }
    })
    .catch((error) => console.error("Erro na requisição:", error))
}

botaoAdicionar.addEventListener("click", adicionarCliente)

botaoBuscar.addEventListener("click", () => {
  const email = inputBusca.value.trim()

  if (!email) {
    alert("Digite um email para buscar.")
    return
  }

  const clienteEncontrado = encontrarClientePorEmail(state.clients, email)
  exibirClienteEncontrado(clienteEncontrado)
})

clientList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete")
  if (!deleteButton) return

  const id = deleteButton.dataset.id
  deletarCliente(id)
})

closePopup.addEventListener("click", fecharPopup)
popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    fecharPopup()
  }
})

document.addEventListener("DOMContentLoaded", carregarClientes)
