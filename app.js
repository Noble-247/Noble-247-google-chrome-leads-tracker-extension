// Variables
const saveInputButton = document.querySelector("#save-input-button");
const inputElement = document.querySelector("#input-element");
const leadsElement = document.querySelector("#leads-element");
let myLeads = [];
const deleteInputButton = document.querySelector("#delete-input-button");
const saveTabButton = document.querySelector("#save-tab-button");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// check if localStrorage is truthy
// if so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [
  { url: "https://emmanuel4reals.netlify.app", title: "Emmanuel's Profile" },
];

// eventListeners
saveInputButton.addEventListener("click", () => {
  myLeads.push(inputElement.value);
  inputElement.value = "";

  //save to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});

deleteInputButton.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
  //window.location.reload();
});

saveTabButton.addEventListener("click", () => {
  console.log(tabs[0].url, tabs[0].title);
});

// Functions
function render(whatToRender) {
  //empty the list items
  let listItems = "";

  //loop through the array and create a list item for each item
  for (lead of whatToRender) {
    listItems += `
    <li>
        <a href="http://${lead}" target="_blank" rel="noopener noreferrer">${lead}</a>
    </li>`;

    console.log(lead);
  }
  leadsElement.innerHTML = listItems;
}

function displayArray([first, second, third]) {}
