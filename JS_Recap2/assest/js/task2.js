const inp=document.getElementById("inp")
const btn=document.getElementById("btn")
const obj=localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) :{inp:""}
inp.value=obj.inp
inp.addEventListener("keyup",function () {
    
     obj.inp=inp.value
     localStorage.setItem("key",JSON.stringify(obj))
})
// localStorage.clear()