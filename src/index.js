function handleSubmit(e) {
  e.preventDefault()
  e.stopPropagation()
  updateDOM()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
