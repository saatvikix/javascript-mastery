// fetch is promise based
// jo bhi url doge, woha se data leke ayega

fetch("https://randomuser.me/api")
.then((rawData)=>{
    return rawData.json();    
})
.then(data=> {
    console.log(data.results[0].name.first);
})
.catch((err)=>{
    console.log(err);
})