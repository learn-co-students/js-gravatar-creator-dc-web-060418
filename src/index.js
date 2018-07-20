document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

function handleSubmit(e) {
  e.preventDefault()

  let input = document.querySelector("input")
  let identicon = new Identicon(input.value)
  identiconGrid(identicon.makeBetterAssociationObject(), identicon.color)
}

function findGridIds() {
  return Array.from(document.querySelector("#identicon").children).map( el => el.id)
}

function identiconGrid(object, color) {
  for(const key in object) {
    document.getElementById(key).style.backgroundColor = ""
    if (object[key] % 2 === 0) {
      document.getElementById(key).style.backgroundColor = color
    }
  }

}
