

// Search for items
const SEARCH = document.forms['search-item'].querySelector('input');
SEARCH.addEventListener('keyup', (e)=>{
    let text = e.target.value.toLowerCase();
    //console.log(text);
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries = groceryList.getElementsByTagName('li');

    let groceriesArray = Array.from(groceries);
    groceriesArray.forEach((grocery) =>{
        let groceryName = grocery.firstElementChild.textContent;
        //console.log(groceryName);
        groceryNameLower = groceryName.toLocaleLowerCase();

        if(groceryNameLower.indexOf(text) == -1){
            grocery.style.display = 'none';
        } else {
            grocery.style.display = 'block';
        }
    })
})


// Show and hide items
let checkbox = document.querySelector('#hide');
checkbox.addEventListener('change', (e)=>{
    let groceryList = document.getElementById('grocery-list');
    if(checkbox.checked){
        groceryList.style.display = 'none';
    } else{
        groceryList.style.display = 'block';
    }
})



// Adding items
let formAdd = document.getElementById('adding-item');
formAdd.addEventListener('submit', (e) =>{
    let ul = document.getElementsByTagName('ul')[0];
    e.preventDefault();
    let text = formAdd.querySelector('input[type="text"]').value;
    // console.log(text);

    //Clear input box
    formAdd.querySelector('input').value = null;

    // creating list items
    let li = document.createElement('li');
    let groceryName = document.createElement('span');
    let deleteButton = document.createElement('span');

    li.appendChild(groceryName);
    li.appendChild(deleteButton);

    ul.appendChild(li);

    groceryName.textContent = text;
    deleteButton.textContent = 'delete';

    groceryName.classList.add('item');
    deleteButton.classList.add('delete');
})





// Deleting items

let groceryListUL = document.querySelector('#grocery-list ul');
groceryListUL.addEventListener('click', remove);
function remove(e){
    let target = e.target;
    if(target.className == 'delete'){
       let li = target.parentElement;
       li.remove();
    }
}

//Tabs
let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel')

let selectedPanel = null ;

headings.addEventListener('click', (e) =>{
    let target = e.target;
    let dataAttribute = e.target.dataset.clicked;

    if(target.tagName == "LI"){
        if(selectedPanel !=null){
            selectedPanel.classList.toggle('selected');
        }

        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        // Finding the panel to show
        let targetPanel = document.querySelector(dataAttribute);
        panels.forEach((panel) =>{
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active');
            }
        })
    }
})

//Button to display the answer
let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer(){
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent = "An Impasta";
    answerButton.style.display = 'none';
}