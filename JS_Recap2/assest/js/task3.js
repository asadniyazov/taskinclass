 const inp1=document.getElementById("inp1")
 const inp2=document.getElementById("inp2")
 const btn=document.getElementById("btn")
 const div=document.getElementById("main_div")
let arr=localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) :[]
console.log(arr);
arr.forEach(x => {
    const div1=document.createElement("div")
    div1.className="create_div"
    const h1=document.createElement("h1")
    h1.className="h1"
    const p=document.createElement("p")
    p.className="p"
    h1.textContent=x.title;
    p.textContent=x.description;
    div.append(div1)
    div1.append(h1,p)
 });
btn.addEventListener("click",function (e) {
    if (inp1.value==="" || inp2.value==="") {
        return
    }
    e.preventDefault()
    const div1=document.createElement("div")
    div1.className="create_div"
    const h1=document.createElement("h1")
    h1.className="h1"
    const p=document.createElement("p")
    p.className="p"
    h1.textContent=inp1.value;
    p.textContent=inp2.value
    arr.push({title:inp1.value,description:inp2.value})
    localStorage.setItem("key",JSON.stringify(arr))
    div.append(div1)
    div1.append(h1,p)
 })
