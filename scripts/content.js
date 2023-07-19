const body = document.body

if (body) {
  const div = document.createElement("div")
  div.innerHTML = "<h1>TiDB Admin Extension Debug</h1>"
  body.insertAdjacentElement("afterend", div)
}