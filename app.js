
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