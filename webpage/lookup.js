
//The httpRequestInfo function does a xmlhttp request. This info is then used in conjunction with riot games api
function httpRequestInfo(reqUrl){
  let puid = "";
//This function is called when the XMLHttpRequest is loaded successfully
  function reqListener () {
      let myArr = JSON.parse(this.responseText);
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
//This function is called when the XMLHttpRequest errors and is not successfully loaded.
  function reqErrorHandler() {
    username = document.getElementById("LeagueName").value;
    const userNameContent = document.getElementById("userNameContent");
    userNameContent.textContent = "The User: "+username+" was not found. Ensure the username was typed in correctly";
    const userNameRankContent = document.getElementById("userNameRankContent");
    userNameRankContent.textContent = "";
    const userNameLPContent = document.getElementById("userNameLPContent");
    userNameLPContent.textContent = "";
  }
//This function is called when the XMLHttpRequest is loaded successfully
//No error handler is needed as only valid html links can be provided
  function reqListener1 () {
    let myArr = JSON.parse(this.responseText);
    console.log(myArr);
    puid = myArr['id']
    let newUrl = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+puid+'?api_key='
    //creates a new XMLHttpRequest and EventListeners
    const requestProfileData = new XMLHttpRequest();
    requestProfileData.addEventListener("load", reqListener);
    requestProfileData.open("GET", newUrl);
    requestProfileData.send();
  }
  //creates a new XMLHttpRequest and EventListeners
  const reqPlayerId = new XMLHttpRequest();
  reqPlayerId.addEventListener("load", reqListener1);
  reqPlayerId.addEventListener("error", reqErrorHandler);
  reqPlayerId.open("GET", reqUrl);
  reqPlayerId.send();

}

//calls httpRequestInfo with a league name supplied by the document getElementById
function reqLeagueNameInfo()
{
  let username = document.getElementById("LeagueName").value;
  httpRequestInfo('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+username+'?api_key=');
}
