// 1. arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)
arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
let minimal=Infinity
 function minimumOdd() {
    
   for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2!==0 && minimal>arr[i]  ) {
        minimal=arr[i]
        minimalIndex=i
    }
   }
   return minimal
 }   
 let largest=-Infinity
function maxsimumEven() {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===0 && arr[i]>largest ) {
           largest=arr[i]
           largestIndex=i
        }
}
return largest
}
let max=maxsimumEven()
let min=minimumOdd()
function change( ) {      
   arr[minimalIndex]=largest
   arr[largestIndex]=minimal
    return arr 
}
console.log(arr);

console.log(change());
// 2. var arr = [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// Verilmis arrayin  daxilinde qiymeti  50 den cox olanlari array kimi qaytaran kod yaz  (array  methodlarina nezer yetir) 
var arr = [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek", },
    { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri", },
    { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler", },
    { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler", },
    { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" ,},
    { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler", },
    { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" ,},
    { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" ,},
    { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri",},
    { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" ,}
];
function showStok() {
   const arr2=[]
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].stok>50) {
         arr2.push(arr[i])
         
      }
      
   }
   return arr2
   
}
console.log(showStok());
// 3. yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
const arr3=[]
function showfruit(){
 for (let i = 0; i < arr.length; i++) {
   if (arr[i].kategori==="Meyve ve Sebzeler") {
      arr3.push(arr[i])
   }
   
 }
 return arr3
}
console.log(showfruit());
// 4.   yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari   ve stokda  2 den cox olanlari   ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
const arr4=[]
function showfruit2(){
   
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].kategori==="Meyve ve Sebzeler" && arr[i].stok>2) {
           arr4.push(arr[i])
        }
        
      }
      return arr4
}
console.log(showfruit2());
// 5.  yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz    (array  methodlarina nezer yetir)
function checkMilk() {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i].urunAdi==="Süt") {
    return true 
     }
    
   }
   return false
}
console.log(checkMilk());
// 6.  yuxaridaki arrayde   Ton baliginin indexini tapan program yaz  (array  methodlarina nezer yetir)
function findFish(){
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].urunAdi==="Ton Balığı") {
         return  index=i
         
      }
      
   }
}
console.log(findFish());