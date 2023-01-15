fetch("//your URL").then((data)=> { 
    return data.json(); 
}).then((value)=> { 
    document.getElementById("textapi").innerHTML=value; 
}) 
