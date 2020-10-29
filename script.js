const mainContainer = document.getElementsByClassName("main-container")[0];
const container2 = document.getElementsByClassName("container-2")[0];
const container3 = document.getElementsByClassName("container-3")[0];

function showContainer2(){
    container2.style.display = "block";
}

function hideContainer2(){
    container2.style.display = "none";
}

function saveFlashCard(){
    var question =document.getElementById("question").value;
    var answer =document.getElementById("answer").value;

    var cardDiv = document.createElement("div");
    var questionDiv = document.createElement("h2");
    var answerDiv = document.createElement("h2");
    var showButton = document.createElement("button");
    var editButton = document.createElement("button");
    var editTextArea = document.createElement("textarea");
    var confirmEdit = document.createElement("button");
    var deleteFlashcard = document.createElement("button");

    questionDiv.innerHTML=question;
    answerDiv.innerHTML=answer;

    showButton.innerHTML="Show answer";
    editButton.innerHTML="Edit";
    confirmEdit.innerHTML="Confirm edit";
    deleteFlashcard.innerHTML="X";

    showButton.className="btn btn-outline-info btn-sm";
    editButton.className="btn btn-outline-info btn-sm";
    confirmEdit.className="btn btn-outline-danger btn-sm";
    deleteFlashcard.className="btn btn-outline-secondary btn-sm";

    editTextArea.id="newText";

    answerDiv.style.display="none";
    answerDiv.style.color="red";
    editTextArea.style.display="none";
    confirmEdit.style.display="none";
    editTextArea.style.resize="none";

    cardDiv.appendChild(showButton);
    cardDiv.appendChild(editButton);
    cardDiv.appendChild(deleteFlashcard);
    cardDiv.appendChild(questionDiv);
    cardDiv.appendChild(answerDiv);
    cardDiv.appendChild(confirmEdit);
    questionDiv.appendChild(editTextArea);
    


    showButton.addEventListener("click", function(){
    if(answerDiv.style.display=="none"){
        answerDiv.style.display="block";
    }
    else{
        answerDiv.style.display="none";
    }
})


deleteFlashcard.addEventListener("click",function(){
cardDiv.remove();
})


editButton.addEventListener("click",function(){
    editTextArea.placeholder="Write here your new question";
    if(editTextArea.style.display=="none")
    {editTextArea.style.display="block";
    confirmEdit.style.display="block";
}
    else {editTextArea.style.display="none";
    confirmEdit.style.display="none";
}

confirmEdit.addEventListener("click",function(){
    //var q =document.getElementById("question");
    var newText= document.getElementById("newText");
    questionDiv.innerHTML = newText.value;
    confirmEdit.style.display="none";
})

})

cardDiv.setAttribute("style", "background:white; padding:20px 40px; border: 1px solid orange; margin:10px; overflow:hidden;");

if(document.getElementById("question").value!="" && document.getElementById("answer").value!="")
    {container3.insertAdjacentElement("beforeend", cardDiv);
    document.getElementById("question").value="";
    document.getElementById("answer").value="";}

    
}
