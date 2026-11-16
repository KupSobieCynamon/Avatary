"use strict";
let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let desc = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
    let isHero = document.body.classList.contains("hero");
    if(isHero) {
    name.textContent = "Ciotka Prakseda";
    desc.textContent = "Tryb: Ciotka Władzia Zagłady";
    avatar.src = "https://api.dicebear.com/10.x/voxel-art/svg?seed=53798484";
    document.body.classList.remove("hero");
    document.body.classList.add("villain");
}
else{
    name.textContent = "Detektyw Gerwazy";
    desc.textContent = "Tryb: Przeciwnik Władzia Zagłady";
    avatar.src = "https://api.dicebear.com/10.x/voxel-art/svg?seed=detective";
    document.body.classList.add("hero");
    document.body.classList.remove("villain");
}
    
});