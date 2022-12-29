//Hide the modal before load
var modal = document.getElementById("listModal")
modal.style.display = "none";


const showModal = () =>{
        if(modal.style.display === "none"){
            modal.style.display="block";
        } else {
            modal.style.display="none";
        }
}

const generateList = () =>{
    //get the title of the list from the input box
    var title = document.getElementById("newListName").value;
    //create an array of list item separated by a comma
    var listData = document.getElementById("newListContents").value.split(",");
    //temporary id scrambler until proper storage is implemented
    var random = Math.random();
    //create a unique div for each new list
    var list = document.createElement('div');
    //grab the section that contains the lists
    var board = document.getElementById('lists');
    //setting a unique id for each list
    list.setAttribute("id", "list" + random );
    
    //creating a title element for a list
    const h1 = document.createElement('h1');
    //getting the actual text for the title
    const listNode = document.createTextNode(title);
    //add the text to the element
    h1.appendChild(listNode);

    
    var ul = document.createElement("ul");
    for(key in listData){
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = listData[key];
        
    }
    list.appendChild(h1);
    list.appendChild(ul);

    board.appendChild(list);
}

