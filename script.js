let step=0

let story=[

{day:"Day 1",text:"Boy: I got cold, cough and fever today 🤧"},

{day:"Day 1",text:"Girlfriend: Please go to the doctor."},

{day:"Day 1",text:"Boy: No no it's nothing serious. I'll take medicine myself."},

{day:"Day 3",text:"3 days later... he is still sick and sneezing 🤧🤧"},

{day:"Day 3",text:"Girlfriend: You are still sick. Please go to the doctor."},

{day:"Day 3",text:"Boy: Relax, I'll be fine."},

{day:"Day 4",text:"Boy: Okay fine, I'll go to the doctor today."},

{day:"Day 4",text:"😎 Anubhav enters: Wait bro! Don't go to doctor. Take the medicine I suggest."},

{day:"Day 4",text:"Boy: Okay bro I'll try that medicine."},

{day:"Day 4",text:"Narrator: But he never actually took that medicine."},

{day:"Day 6",text:"He gets even more sick 🤧🤧🤧"},

{day:"Day 6",text:"Girlfriend: Please go to doctor now. This is getting worse."},

{day:"Day 6",text:"Boy: Doctor will charge too much money. I'll be fine in few days."},

{day:"Day 6",text:"Girlfriend: 😡😡 I told you earlier!"},

{day:"Day 8",text:"Now he is even more sick and tired."},

{day:"Day 8",text:"Boy: Okay now I'll finally go to doctor."},

{day:"Day 8",text:"🧑 Kunal enters: Wait bro! My sister is a doctor. I'll ask her."},

{day:"Day 8",text:"Boy: Oh nice, okay ask her."},

{day:"Day 8",text:"Kunal's sister: Just keep taking those medicines."},

{day:"Day 10",text:"Day 10... he is STILL sick."},

{day:"Day 10",text:"Girlfriend: That's it. You are going to the doctor RIGHT NOW."},

{day:"Day 10",text:"Boy finally goes to the doctor."},

{day:"Day 10",text:"Doctor: Here are your medicines."},

{day:"Day 10",text:"Doctor: Total cost = ₹70 only."},

{day:"Day 10",text:"Doctor: No consultation fee 😂"},

{day:"Day 10",text:"Girlfriend: SEE?? I told you 10 days ago!"},

{day:"THE END",text:"📜 Moral of the story:"},

{day:"THE END",text:"Humesha apni girlfriend ki baat maan leni chahiye 😌"},

{day:"THE END",text:"Friends give advice."},

{day:"THE END",text:"Girlfriend gives solution."},

{day:"THE END",text:"GF advice > Friends advice. Always 😎"}

]

function sneezeParticles(){

for(let i=0;i<5;i++){

let p=document.createElement("div")

p.className="particle"

p.innerText="💧"

p.style.left="120px"

p.style.top="240px"

stage.appendChild(p)

setTimeout(()=>p.remove(),1000)

}

}

function nextScene(){

step++

if(step<story.length){

bubble.innerText=story[step].text

day.innerText=story[step].day

}

/* actions */

if(step==1){

bf.classList.add("walk")

}

if(step==3){

bf.classList.add("sneeze")

sneezeParticles()

}

if(step==7){

anubhav.classList.add("slideIn")

}

if(step==13){

gf.classList.add("angry")

}

if(step==16){

kunal.classList.add("pop")

}

if(step==21){

stage.classList.remove("room")

stage.classList.add("clinic")

doctor.style.opacity=1

}

if(step==26){

bf.classList.add("embarrassed")

anubhav.classList.add("leave")

kunal.classList.add("leave")

}

}

/* start music after first click */

document.querySelector("button").addEventListener("click",()=>{

document.getElementById("bgmusic").play()

},{once:true})
