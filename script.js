const mybtn = document.getElementById("mybtn");
const mypopover = document.getElementById("mypopover");
const closebtn = document.getElementById("closebtn");

mybtn.addEventListener("click", function(){
    mypopover.classList.add("active");
});

closebtn.addEventListener("click", function(){
    mypopover.classList.remove("active");
});