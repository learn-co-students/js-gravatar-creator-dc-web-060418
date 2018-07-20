function handleSubmit(e) {
e.preventDefault();
const hashedArr = md5.array(e.target.querySelectorAll('input')[0].value);
const user = new Identicon(hashedArr);
updateDOM(user);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
