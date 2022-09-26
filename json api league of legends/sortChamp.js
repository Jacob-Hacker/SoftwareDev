function sortChamps(){

  var fs = require('fs');

  fs.readFile('C:\\Users\\jaket\\OneDrive\\Desktop\\json api league of legends\\1234567.txt','utf8',function(error, data){

    x=0;
    while('DoneForSort' != data.substring(x,x+11)){
      if(data.substring(x,x+3)=="id\""){
        y=x;
        while(data.substring(y,y+5)!="title"){
          y=y+1;
        }
        console.log(data.substring(x,y));
      }
      x=x+1;
    }
    console.log("done");



  });
}
sortChamps();
