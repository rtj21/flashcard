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

}