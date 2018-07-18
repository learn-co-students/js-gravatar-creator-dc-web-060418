function clearAllSquares() {
  for (let cols = 0; cols < 5; cols++) {
    for (let rows = 0; rows < 5; rows++) {
      document.getElementById(`${rows}-${cols}`).style.backgroundColor = ""
    }
  }
}

function handleSubmit(event) {
  clearAllSquares();
  event.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);
  const myIdenticon = new Identicon(name);
  myIdenticon.iterateAndColorEvenSquares();
  myIdenticon.colorMirrored();

}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)

})
