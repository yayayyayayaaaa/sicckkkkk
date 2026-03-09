let step = 0;

let story = [
"Day 1: Boyfriend gets cold, cough and fever 🤒",
"Girlfriend: Go to doctor!",
"Boyfriend: Ok ok I'll go 😌",
"Friend Anubhav: Wait bro take this medicine 💊",
"Boyfriend: Ok I'll wait",
"3 days later... still sick 🤧",
"Friend Kunal: Wait bro my sister is doctor 👩‍⚕️",
"Boyfriend: Ok I'll wait again",
"Girlfriend: 😑😑😑",
"Moral of the story: Listen to girlfriend first 😂"
];

function nextStory(){
    step++;

    if(step < story.length){
        document.getElementById("storyText").innerText = story[step];
    }
}
