//selecting the required elements
function getById (id){
    return document.getElementById(id);
};


const addBtn = getById('addNewBtn');
const inputTask = getById('inputTask');
const taskList = getById('task_list');


//add a click event to the add  btn

addBtn.addEventListener('click',function (e){

   const inputValue =  inputTask.value; 
   if(!inputValue){
       alert('please Enter the item ')
       return;
   }

   inputTask.value ="";
    // console.log(inputValue);


    //call function
   addNewItem(inputValue);
   
  
});


function addNewItem (text){
    const item = document.createElement('div');
    item.className= 'item';
    item.innerHTML =
    `
    <li>${text}</li>
    <button class="edit ">Edit <i class="fas fa-pen eventOff "></i></button>
    <button class="completed  <i class="fas fa-check eventOff "></i></button>
    <button class="delete ">Delete <i class="fas fa-trash-can eventOff "></i></button>
    `
    

  
    taskList.appendChild(item)
    

}



// get the input value 

taskList.addEventListener('click', function(event) {
    
    if(event.target.className == "delete"){
        // console.log('click edit delete');
        deleteItem(event);
    }
    else if(event.target.className == "completed"){
        // console.log('click edit completed');
        completeTask(event);
    }
    else if(event.target.className == "edit"){
        // console.log('click edit edit');
        editItem(event)
    }
}) 



function deleteItem(event){
    event.target.parentElement.remove();
}




function completeTask(event){
    const li = event.target.parentElement.firstElementChild;
    li.classList.toggle('colorBlur')
    
}


function editItem(event){
    const li = event.target.parentElement.firstElementChild;
    const preText = li.innerText;
    li.innerHTML = ''
  

    //create input 
    const createInput = document.createElement('input');
    createInput.type ='text';
    createInput.value = preText;
    //add even 

    createInput.addEventListener('keypress', function(e){
        if(e.key == "Enter"){
            const modifiedName = e.target.value ;
            li.innerHTML = '';
            li.innerText = modifiedName;
            // console.log(modifiedName);
            event.target.style.display ='inline';
        }
    })

    li.appendChild(createInput);
    event.target.style.display ='none'



}