var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function() {
    var data =JSON.parse(this.response);
    console.log(data);
    for(var i=0; i<data.length; i++){
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
        
       console.log();
    
   
}

}
