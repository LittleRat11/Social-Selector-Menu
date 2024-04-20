const menu = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");
const socialLists = document.querySelector(".social-lists");
const down = document.querySelector("#down");
const allLiEls = document.querySelectorAll(".social-lists li");

menu.addEventListener("click", function() {
    socialLists.classList.toggle("hide");
    menu.classList.toggle("rotate");
});
//!for Li elements we use forEach loop
allLiEls.forEach(li => {
    li.addEventListener("click", () => {
        menuText.innerHTML = li.innerHTML;
        socialLists.classList.add("hide");
        menu.classList.toggle("rotate");
    })
})