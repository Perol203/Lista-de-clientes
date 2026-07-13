
import { ApiC } from "./api.js";

const clientList = document.getElementById("clientes");

function renderClient(client) {
  const item = document.createElement("li");
  item.innerHTML = `${client.client} :|:  ${client.hour} :|: ${client.email}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "delete";
  deleteButton.dataset.id = client._id;
  item.appendChild(deleteButton);
  clientList.appendChild(item);
}

document.getElementById("Add").addEventListener("click", () => {
  const Nclient = document.getElementById("NewClient").value;
  const Nhour = document.getElementById("Nhour").value;
  const Nemail = document.getElementById("email").value;


  if (!Nclient || !Nhour || !Nemail) {
    alert("Preencha o nome do cliente e o horário.");
    return;
  }

    fetch(ApiC, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        client: Nclient,
        hour: Nhour,
        email: Nemail,
     
       }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderClient(data);
      document.getElementById("NewClient").value = "";
      document.getElementById("Nhour").value = "";
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  fetch(ApiC, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (Array.isArray(data)) {
        clientList.innerHTML = "";
        data.forEach(renderClient);
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
});

clientList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete");

  if (!deleteButton) return;

  const id = deleteButton.dataset.id;

  fetch(`${ApiC}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        deleteButton.closest("li").remove();
      } else {
        console.error("Erro ao deletar cliente.");
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
});

