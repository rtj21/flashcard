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

    var node0 = document.createElement("div");
    var node1 = document.createElement("h2");
    var node2 = document.createElement("h2");

    node1.innerHTML=question;
    node2.innerHTML=answer;
    
    node2.style.display="none";
    node2.style.color="red";

    node0.appendChild(node1);
    node0.appendChild(node2);

    container3.insertAdjacentElement("beforeend", node0);
}