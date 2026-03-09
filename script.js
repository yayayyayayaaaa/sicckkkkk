let scene = 0;

let story = [
"Boy: I think I have fever 🤒",
"Girlfriend 💬: Go to doctor!",
"Boy: No no I'll take medicine myself 💊",
"3 days later... still sick 🤧",
"Girlfriend: GO TO DOCTOR 😑",
"Boy: No need",
"Day 4...",
"Girlfriend: Now seriously go to doctor",
"Boy: Ok I'll go",
"Anubhav enters 😎: Wait bro take this medicine"
];

function nextScene(){

scene++;

if(scene < story.length){
document.getElementById("message").innerText = story[scene];
}

}
