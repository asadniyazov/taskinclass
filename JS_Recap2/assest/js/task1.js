const inp=document.getElementById("inp")
const btn=document.getElementById("btn")
btn.addEventListener("click",function (p) {
  p.preventDefault()
 alert(`${inp.value}`)
})