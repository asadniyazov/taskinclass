let Confirm=confirm("kakulyatordan istifade etmek istediyinize eminmisiniz")
if(Confirm==true){
     num1 = parseInt((prompt("ededi daxil et")))
     num2 = parseInt((prompt("ededi daxil et"))) 
}
if ( isNaN(num1) || isNaN(num2)) {
    alert("reqem daxil edin")
}
else {
    let Operation= parseInt(prompt(`Istediyin emeliyyati daxil edin 
    1-cixma
    2-toplama
    3-bolme
    4-vurma`))
    switch (Operation) {
       case 1:
          let cix=num1-num2;
          alert(`${num1} - ${num2} =${cix}`)
       break;
    
       case 2:
           let topla =num1+num2;
           alert(`${num1} + ${num2} =${topla}`)
           
       break;
       case 3:
           let bol =num1/num2;
          alert(`${num1} / ${num2} =${bol}`)
       break;
       case 4:
           let vur =num1*num2;
           alert(`${num1} * ${num2} =${vur}`)
           
       break;
       default:
           alert("emeliyyati yerine yetirmek mumkun deyil")
           break;
    }
}

 




