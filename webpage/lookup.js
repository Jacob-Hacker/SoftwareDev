function httpRequestInfo(reqUrl){
  let puid = "";

  function reqListener () {
      var myArr = JSON.parse(this.responseText);
      let accountName = myArr[0]['summonerName'];
      let accountNameLP = myArr[0]['leaguePoints'];
      let accountNameTier = myArr[0]['tier'];
      let accountNameRank = myArr[0]['rank'];
      let accountNameWins = myArr[0]['wins'];
      let accountNameLosses = myArr[0]['losses'];
      let winRatio = accountNameWins / (accountNameWins + accountNameLosses);
      const userNameContent = document.getElementById("userNameContent");
      userNameContent.textContent = "The User: "+accountName+" was found.";
      const userNameRankContent = document.getElementById("userNameRankContent");
      userNameRankContent.textContent = "Rank of "+accountNameTier+" "+accountNameRank + " with a win ratio of "+ winRatio;
      const userNameLPContent = document.getElementById("userNameLPContent");
      userNameLPContent.textContent = accountName+"has a current LP of : " +accountNameLP;
  }

  function reqErrorHandler() {
    username = document.getElementById("LeagueName").value;
    const userNameContent = document.getElementById("userNameContent");
    userNameContent.textContent = "The User: "+username+" was not found. Ensure the username was typed in correctly";
    const userNameRankContent = document.getElementById("userNameRankContent");
    userNameRankContent.textContent = "";
    const userNameLPContent = document.getElementById("userNameLPContent");
    userNameLPContent.textContent = "";
  }

  function reqListener1 () {
    var myArr = JSON.parse(this.responseText);
    console.log(myArr);
    let puid = myArr['id']
    let newUrl = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+puid+'?api_key='
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", newUrl);
    req.send();
  }

  const req1 = new XMLHttpRequest();
  req1.addEventListener("load", reqListener1);
  req1.addEventListener("error", reqErrorHandler);
  req1.open("GET", reqUrl);
  req1.send();

}


function reqLeagueNameInfo()
{
  username = document.getElementById("LeagueName").value;
  httpRequestInfo('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+username+'?api_key=');
}
