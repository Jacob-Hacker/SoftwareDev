<?php

  $key = 'RGAPI-25e6133c-9c2f-4ae6-8e93-395e2f9ffe75';

 	$username = 'Fataldoctor';

  $region = 'na1';

  $user = json_decode(file_get_contents('https://'.$region.'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'.$username.'?api_key='.$key),true);

  $id = $user["id"];

  echo $id;

  $ranked = json_decode(file_get_contents("https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/rbQf0-DJBHBmTGFSqkggUziQKeaTMXRA_K1lbsLmlpzjacY?api_key=RGAPI-25e6133c-9c2f-4ae6-8e93-395e2f9ffe75"),true);

  echo ($ranked);

 ?>
