<?php

$username = "admin"; //db username
$password = "Software2016"; //db pass
$dbName = "sfwg3"; // db name
$uri = "mongodb://".$username.":".$password."@ds031607.mlab.com:31607/sfwg3";
$collection = "info";

//Create a connection to mongodb
$connection = new MongoClient($uri);
echo $connection;
 
 $db = $connection->selectDB($dbName);
 echo $db;

 // Convert JSON to a PHP array
$userManifest = json_decode($userManifest);

// Loop array and create seperate documents for each tweet
foreach ($userManifest as $id => $item) {
   $collection->insert($item);
}

// Creates new collection
 $col = new MongoCollection($db, $collection);
 $cur = $col->find();

// Searches collection
$result = array();
foreach($cur as $doc) {
	$tmp = array();
	$tmp["_id"] = $doc["_id"];
	array_push($result, $tmp);
}

echo json_encode($result);
?>
