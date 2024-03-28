const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
let say1=0
let say2=0
for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i]==".") {
        say1=say1+1
        
    }
    if (sampleNews[i]==",") {
        say2=say2+1
        
    }
    
}
console.log(`noqtelerin sayi  : ${say1}`);
console.log(`vergullerin sayi : ${say2}`);