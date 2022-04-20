// Variables
const saveInputButton = document.querySelector("#save-input-button");
const inputElement = document.querySelector("#input-element");
const leadsElement = document.querySelector("#leads-element");
let myLeads = [];
let listItems = "";

// eventListeners
saveInputButton.addEventListener("click", saveLeads);

// Functions
function saveLeads() {
  myLeads.push(inputElement.value);

  //empty the list items
  let listItems = "";

  //loop through the array and create a list item for each item
  for (lead of myLeads) {
    listItems += `
    <li>
        <a href="http://${lead}" target="_blank" rel="noopener noreferrer">${lead}</a>
    </li>`;

    console.log(lead);
  }
  leadsElement.innerHTML = listItems;
  inputElement.value = "";
}

// <a href="http://" target="_blank" rel="noopener noreferrer"></a>
