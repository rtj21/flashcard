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
    const question =document.getElementById("question").value;
    const answer =document.getElementById("answer").value;

    var cardDiv = document.createElement("div");
    var questionDiv = document.createElement("h2");
    var answerDiv = document.createElement("h2");
    var showButton = document.createElement("button");
    var editButton = document.createElement("button");
    var editTextArea = document.createElement("textarea");


    questionDiv.innerHTML=question;
    answerDiv.innerHTML=answer;

    showButton.innerHTML="Show answer";
    showButton.className="btn btn-outline-info btn-sm"
    editButton.innerHTML="Edit";
    editButton.className="btn btn-outline-info btn-sm"

    answerDiv.style.display="none";
    answerDiv.style.color="red";
    editTextArea.style.display="none";

    cardDiv.appendChild(showButton);
    cardDiv.appendChild(editButton);
    cardDiv.appendChild(questionDiv);
    cardDiv.appendChild(answerDiv);
    questionDiv.appendChild(editTextArea);


    showButton.addEventListener("click", function(){
    if(answerDiv.style.display=="none"){
        answerDiv.style.display="block";
    }
    else{
        answerDiv.style.display="none";
    }
})

cardDiv.addEventListener("dblclick",function(){
cardDiv.remove();
})


editButton.addEventListener("click",function(){
    editTextArea.placeholder="Write here your new question";
    if(editTextArea.style.display=="none")
    editTextArea.style.display="block";
    else editTextArea.style.display="none";
})

cardDiv.setAttribute("style", "background:white; padding:20px 40px; border: 1px solid orange; margin:10px; overflow:hidden;");
if(document.getElementById("question").value!="")
    {container3.insertAdjacentElement("beforeend", cardDiv);
    document.getElementById("question").value="";
    document.getElementById("answer").value="";}

    
}

