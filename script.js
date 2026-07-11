
import { ApiC } from "./api.js";


const clientList = document.getElementById("clientes");

document.getElementById("Add").addEventListener("click", () => {
  const Nclient = document.getElementById("NewClient").value;
  const Nhour = document.getElementById("Nhour").value;


    fetch(ApiC, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        client: Nclient,
        hour: Nhour,
     
       }),
    })
    .then((response) => response.json())

    .then((data) => {
    console.log(data);

            const item = document.createElement("li");
              item.innerHTML = `${data.client}-${data.hour}`;
      
              const dellBtn = document.createElement("button");
              dellBtn.textContent = "X";
              dellBtn.className = "delete";
              dellBtn.dataset.id = data._id;
              

              item.appendChild(dellBtn);
              clientList.appendChild(item);
              
    })

    .catch((error) => {
      console.error("Erro na req  uisição:", error);
    })
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

