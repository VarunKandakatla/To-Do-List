
const btn = document.querySelector("#submit");
const task = document.querySelector("#task");
const list = document.querySelector(".top");


btn.addEventListener("click",addTask);


function addTask(){
   
   if(task.value.length===0)
   {
     alert("please enter your task");
     return
   }
    let newTask = addAttributes();

    let nodeList = document.querySelectorAll('.lists');

    newTask.innerText=`${nodeList.length}. ${task.value}`;

    nodeList[nodeList.length-1].after(newTask);
    
}

function addAttributes(){

    let newEle = document.createElement("div");
    
    newEle.setAttribute("class","lists");
    list.appendChild(newEle);
   return newEle;

}