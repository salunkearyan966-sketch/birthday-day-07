const memories = [
  "Memory 1 ❤️: This picture is special because it carries a little piece of you.",
  "Memory 2 🌸: Some moments become beautiful just because you are part of them.",
  "Memory 3 ✨: Every photo here is a tiny reminder of how special you are.",
  "Memory 4 ❤️: This countdown is not only for your birthday, it is for every smile before it.",
  "Memory 5 🌙: Some people become memories you never want to lose. You are one of them.",
  "Secret Letter 💌: Shree, this is only Day 7. Every day till 28 June has a new surprise waiting for you, because you deserve to feel special every single day. ❤️"
];

function showMemory(index){
  const box = document.getElementById("memoryBox");

  box.style.opacity = "0";
  box.style.transform = "translateY(15px)";

  setTimeout(()=>{
    box.innerHTML = memories[index];
    box.style.opacity = "1";
    box.style.transform = "translateY(0)";
  },250);

  for(let i=0;i<8;i++){
    createFloat();
  }
}

function createFloat(){
  const item = document.createElement("div");
  item.className = "float";

  const symbols = ["❤️","🌸","✨","📸","💖"];
  item.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];

  item.style.left = Math.random()*100 + "vw";
  item.style.animationDuration = (Math.random()*3 + 4) + "s";

  document.body.appendChild(item);

  setTimeout(()=>{
    item.remove();
  },7000);
}