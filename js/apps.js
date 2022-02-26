

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
    <li style="margin-left:20px" >${text}</li>

    <button class="edit"> <i class="fas fa-pen eventOff "></i></button>
    <button class="completed"> <i class="fas fa-check eventOff "></i></button>
    <button class="delete"> <i class="fas fa-trash-can eventOff "></i></button>

    `
    taskList.appendChild(item);
    const tasks = getDataFromLocalStoage();
    let uniqueName = text
    for( let taskName of tasks){
        if(taskName.trim() == text){
            uniqueName += ' '
        }
    }

    tasks.push(uniqueName);
    setTaskLocalStorage(tasks)

    

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
    const taskName =  event.target.parentElement.firstElementChild.innerText ;
    deleteDataFromLocalStorage(taskName)
}


//delete from local storage

function deleteDataFromLocalStorage(taskName){
    const tasks = getDataFromLocalStoage();
    const index = tasks.indexOf(taskName);
    tasks.splice(index,1 );
    setTaskLocalStorage(tasks)
}



//set local storage


function setTaskLocalStorage(tasks){
    localStorage.setItem('tasks' , JSON.stringify(tasks))

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
    createInput.style.padding ='.5rem ';
    createInput.style.backgroundColor ='#f2f2f2';
    createInput.style.border ='none';
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


// onload the page 



document.body.onload = function(e){
        const tasks = getDataFromLocalStoage();
        displayShow(tasks)
}



// getDataFromLocalStoage
function getDataFromLocalStoage(){
    let tasks ;
    const data = localStorage.getItem('tasks');
    if(data){
        tasks = JSON.parse(data)
    }
    else{
        tasks = [];
    }

    return tasks;
}


//Rendering task the value


function displayShow(tasks){
    console.log(tasks);
    tasks.forEach(task =>{

    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
   
    <li class="list_item">${task}</li>
    <button class="edit"> <i class="fas fa-pen eventOff "></i></button>
    <button class="completed"> <i class="fas fa-check eventOff "></i></button>
    <button class="delete"> <i class="fas fa-trash-can eventOff "></i></button>

   
    `
    taskList.appendChild(div);
    



    })

    


}


// const exam = localStorage.getItem('tasks',JSON.stringify(['a','b']))