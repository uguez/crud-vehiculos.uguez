let crudList = [
    {
      name: "Mazda",
      model: "2019",
      doors: "4",
      color: "rojo",
      brand: "mazda"
    },
    {
      name: "Jetta",
      model: "2021",
      doors: "4",
      color: "gris",
      brand: "Volkswagen"
    },
    {
      name: "Vento",
      model: "2020",
      doors: "4",
      color: "azul",
      brand: "Volkswagen"
    }
  ];

//Para saber si se crea o se edita
let updateFlag = false;
let updateIndex = null;

//Varible que va a guardar el elemento HTML en el que vamos a hacer render de nuestro array
let crudListUI = document.getElementById("crudList");
//Variable que va a guardar el formulario
const crudForm = document.getElementById("addCrud");

const renderList = () => {
    crudListUI.innerHTML = "";
    crudListArray = crudList;
  
    crudListArray.forEach((crud, index) => {
      //Creamos el contenedor principal que va a ser la fila de cada usuario
      const crudItemDiv = document.createElement("div");
      crudItemDiv.setAttribute("class", "crudItem");
      crudListUI.appendChild(crudItemDiv);
  
      //Crear un div que va a contener la información de cada user
      const crudInfoDiv = document.createElement("div");
      crudInfoDiv.setAttribute("class", "crudInfo");
      crudItemDiv.appendChild(crudInfoDiv);
  
      //Creamos dos h4 para tener el nombre, el apellido y email, y poder incrustarlos en el div anterior
      const nameCrudDiv = document.createElement("h4");
      const modelCrudDiv = document.createElement("h4");
      const doorsCrudDiv = document.createElement("h4");
      const colorCrudDiv = document.createElement("h4");
      const brandCrudDiv = document.createElement("h4");
      nameCrudDiv.innerText = `${crud.name} `;
      modelCrudDiv.innerText = `${crud.model} `;
      doorsCrudDiv.innerText = `${crud.doors} `;
      colorCrudDiv.innerText = `${crud.color} `;
      brandCrudDiv.innerText = `${crud.brand} `;

      crudInfoDiv.appendChild(nameCrudDiv);
      crudInfoDiv.appendChild(modelCrudDiv);
      crudInfoDiv.appendChild(doorsCrudDiv);
      crudInfoDiv.appendChild(colorCrudDiv);
      crudInfoDiv.appendChild(brandCrudDiv);
  
      //Agregamos los botones de acción, estos botones podrán editar o eliminar
      const actionButtons = document.createElement("div");
      actionButtons.setAttribute("class", "actions");
      crudItemDiv.append(actionButtons);
  
      //Creamos el botón de editar
      const updateBtn = document.createElement("button");
  
      //Agregamos una clase, un id y un addEventListener
      updateBtn.setAttribute("class", "update");
      updateBtn.addEventListener("click", () => updateCrud(index, crud));
      updateBtn.setAttribute("id", "update");
      updateBtn.innerText = "Editar";
  
      //Creamos el botón de borrar
      const deleteBtn = document.createElement("button");
  
      //Agregamos una clase, un id, y un addEventListener
      deleteBtn.setAttribute("class", "delete");
      deleteBtn.addEventListener("click", () => deleteCrud(index));
      deleteBtn.innerHTML = "Eliminar";
      deleteBtn.setAttribute("id", "delete");
  
      //Agregamos el botón al div de botones creado anteriormente
      actionButtons.appendChild(updateBtn);
      actionButtons.appendChild(deleteBtn);
    });
  };


  
const createUpdateCrud = event => {
    event.preventDefault();
    if (updateFlag) {
      let updatedCrud = {
        name: document.getElementById("name").value,
        model: document.getElementById("model").value,
        doors: document.getElementById("doors").value,
        color: document.getElementById("color").value,
        brand: document.getElementById("brand").value
      };
  
      crudList[updateIndex] = updatedCrud;
  
      updateFlag = false;
      updateIndex = null;
      renderList();
    } else {
      let crud = {
        name: document.getElementById("name").value,
        model: document.getElementById("model").value,
        doors: document.getElementById("doors").value,
        color: document.getElementById("color").value,
        brand: document.getElementById("brand").value
      };
      crudList.push(crud);
      renderList();
    }
    crudForm.reset();
  };

  const updateCrud = (index, crud) => {
    console.log(index);
    console.log(crud);
    document.getElementById("name").value = crud.name;
    document.getElementById("model").value = crud.model;
    document.getElementById("doors").value = crud.doors;
    document.getElementById("color").value = crud.color;
    document.getElementById("brand").value = crud.brand;
    updateFlag = true;
    updateIndex = index;
  };

  
const deleteCrud = index => {
    crudList.splice(index, 1);
    console.log(
      `Vamos a eliminar a ${crudList[index].name} que esté en la posición ${index}`
    );
    renderList();
  };

crudForm.addEventListener("submit", createUpdateCrud);
document.addEventListener("DOMContentLoaded", renderList);
