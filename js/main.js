//Hide the modal before load
var modal = document.getElementById("listModal")
modal.style.display = "none";


const generateList = () =>{
    //get the title of the list from the input box
    var title = document.getElementById("newListName").value;
    const regex = /^\s*$/;
    const exitBtn = document.getElementById("btnMakeList");
    if(title === null || regex.test(title)){ 
        exitBtn.classList.remove("modal-close");
        alert("Title cannot be empty, please try again");
        return;
    }else{
        exitBtn.classList.add("modal-close");

    }
    //create an array of list item separated by a comma or a line break
    var listData = document.getElementById("newListContents").value.split(/[,\r\n]+/);
    //temporary id scrambler until proper storage is implemented
    var random = Math.random();
    //create a unique div for each new list
    var list = document.createElement('div');
    //grab the section that contains the lists
    var board = document.getElementById('lists');
    //setting a unique id for each list
    list.setAttribute("id", "list" + random );
    
    //creating a title element for a list
    const h5 = document.createElement('h5');
    //getting the actual text for the title
    const listNode = document.createTextNode(title);
    h5.setAttribute("class", "collection-header");
    //add the text to the element
    h5.appendChild(listNode);

    
    var ul = document.createElement("ul");
    ul.setAttribute("class", "collection with-header col s3 m3 l2 card-content zoom");
    ul.style.marginLeft = "2em";
    ul.appendChild(h5);
    for(key in listData){
        var li = document.createElement("li");
        li.setAttribute("class", "collection-item");
        ul.appendChild(li);
        li.innerHTML = listData[key];
        
    }
    list.appendChild(ul);
    list.setAttribute("class", "card float center");

    board.appendChild(list);
}


