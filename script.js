const links = document.querySelectorAll("a");
const hightlight = document.createElement("span");
hightlight.classList.add("highlight");
document.body.appendChild(hightlight);

function hightlightLinks() {
  const linkscoords = this.getBoundingClientRect();
  //   console.log(coords);
  const coods = {
    width: linkscoords.width,
    height: linkscoords.height,
    top: linkscoords.top + window.scrollY,
    left: linkscoords.left + window.scrollX,
  };
  hightlight.style.width = `${coods.width}px`;
  hightlight.style.height = `${coods.height}px`;
  hightlight.style.transform = `translate(${coods.left}px,${coods.top}px)`;
  //   this.classList.add("highlight");
}
links.forEach((link) => link.addEventListener("mouseenter", hightlightLinks));
