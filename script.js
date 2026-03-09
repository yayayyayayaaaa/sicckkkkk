let step = 0;

let story = [
{day:"Day 1", text:"Boy: I feel sick 🤒"},
{day:"Day 1", text:"Girlfriend 💬: Go to doctor"},
{day:"Day 1", text:"Boy: I'll take medicine myself 💊"},
{day:"Day 3", text:"Still sick 🤧"},
{day:"Day 3", text:"Girlfriend: Please go to doctor"},
{day:"Day 3", text:"Boy: No need"},
{day:"Day 4", text:"Girlfriend: NOW GO TO DOCTOR"},
{day:"Day 4", text:"Boy: Ok I'll go"},
{day:"Day 4", text:"😎 Anubhav: Wait bro take this medicine"}
];

function nextScene(){

step++;

if(step < story.length){

document.getElementById("bubble").innerText = story[step].text;
document.getElementById("day").innerText = story[step].day;

if(step == 8){
document.getElementById("anubhav").classList.add("show");
}

}

}
