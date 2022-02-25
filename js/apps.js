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
   addNewItem(taskList);
   
  
});


function addNewItem (text){
    const item = document.createElement('div');
    item.classList = 'item'
    item.innerHTML =
    

  
    taskList.appendChild(item)
    

}



// get the input value 