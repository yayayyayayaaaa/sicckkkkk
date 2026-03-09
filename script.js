let step = 0;

let story = [

{day:"Day 1", text:"Boy: I feel sick 🤒"},
{day:"Day 1", text:"Girlfriend: Go to doctor"},
{day:"Day 1", text:"Boy: I'll take medicine myself 💊"},

{day:"Day 3", text:"Still sick 🤧"},
{day:"Day 3", text:"Girlfriend: Please go to doctor"},
{day:"Day 3", text:"Boy: No need"},

{day:"Day 4", text:"Boy: Ok I'll go to doctor"},
{day:"Day 4", text:"😎 Anubhav enters: Wait bro! Take this medicine I'm suggesting"},
{day:"Day 4", text:"Boy: Ok bro"},
{day:"Day 4", text:"(But he never took that medicine)"},

{day:"Day 6", text:"Boy gets more sick 🤧🤧"},
{day:"Day 6", text:"Girlfriend: Please go to doctor now"},
{day:"Day 6", text:"Boy: It will be costly, I'll be fine in few days"},
{day:"Day 6", text:"Girlfriend: 😡😡😡"},

{day:"Day 8", text:"Boy is even more sick now"},
{day:"Day 8", text:"Girlfriend: Enough! GO TO DOCTOR"},
{day:"Day 8", text:"Boy: Ok I'll go now"},

{day:"Day 8", text:"🧑 Kunal enters: Wait bro! My sister is doctor"},
{day:"Day 8", text:"Boy: Oh okay"},
{day:"Day 8", text:"Kunal's sister: Keep taking those medicines"},

{day:"Day 10", text:"Boy still sick 🤒"},
{day:"Day 10", text:"Girlfriend forces him to go to doctor"},
{day:"Day 10", text:"Boy finally goes to doctor 🩺"},

{day:"Day 10", text:"Doctor: Here is medicine"},
{day:"Day 10", text:"Doctor: Total cost = ₹70"},
{day:"Day 10", text:"Doctor: No consultation fee 😂"},

{day:"Day 10", text:"Girlfriend: SEE?? I told you 10 days ago"},
{day:"Day 10", text:"THE END"}
];

function nextScene(){

step++;

if(step < story.length){

document.getElementById("bubble").innerText = story[step].text;
document.getElementById("day").innerText = story[step].day;

}

}
