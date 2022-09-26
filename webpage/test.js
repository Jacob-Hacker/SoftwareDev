
function reqMe(){
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //document.write("break1");
  if(request.readyState === 4){
      console.log(request.responseText);
      document.write("break2");
  }
  document.write(request.responseText);
});
request.open('GET','https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/fataldoctor?api_key=RGAPI-96ef7c08-03f6-4548-afec-81526dff12f3');
}
