const inputBox =  document.getElementById("todoInput");
const itemList = document.getElementById("listContainer");


function addtask(){
    if(inputBox.value === ''){
        alert('Please enter a task');
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        itemList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}

itemList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", itemList.innerHTML);

}

function showData(){
    itemList.innerHTML = localStorage.getItem("data");
}

showData()