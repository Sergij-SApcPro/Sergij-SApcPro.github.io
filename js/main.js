const body = document.body;
const backdrop = document.getElementsByClassName("backdrop")[0];
const left = document.getElementsByClassName("left")[0];
const heroH = left.getElementsByTagName("h1")[0];
const underline = document.getElementsByClassName("underline")[0];

body.addEventListener("mousemove", function(e) {
  let x = e.pageX / window.innerWidth;
  let y = e.pageY / window.innerHeight;
  
  backdrop.style.transform = `translate(${-x * 4}%, ${-y * 4}%) rotate(-6.16deg)`;
  heroH.style.transform = `translate(${x * 3}%, ${y * 3}%)`;
  underline.style.transform = `translate(${x * 3}%, ${y * 3}%)`;
})