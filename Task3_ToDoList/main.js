let item=document.getElementById("item");
let item2=document.getElementById("item2");
let toDoBox=document.getElementById("to-do-box");

item.addEventListener('keyup',
    function(event){
        // console.log(event.key);
        if(event.key=="Enter")
        {
            // console.log(this.value);
            addToDo(this.value);
            this.value="";
        }
    }
)
item2.addEventListener('click',
    function(){
        // console.log(event.key);
        // if(event.key=="Enter")
        // {
            // console.log(this.value);
            addToDo(item.value);
            item.value="";
        // }
    }
)


let addToDo = (item) =>{
    let listItem=document.createElement("li");
    listItem.innerHTML=`
        ${item}
        <i class="fa-solid fa-circle-xmark"></i>
    `;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )


    toDoBox.appendChild(listItem);
}