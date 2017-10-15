<?php
$root = $_SERVER['DOCUMENT_ROOT'];
require("$root/bootstrap.php");


/********************************************************************************/
//make the database connection available to the flight routes
/********************************************************************************/
Flight::set('db_conn', $db_conn);
Flight::set('user', $user);
/********************************************************************************/


/********************************************************************************/
//we are running this over CORS, cors will first do a preflight on each request, so the method is OPTIONS. then it will ake the real request. 
//we have to respond with something to validate the options request
/********************************************************************************/
Flight::route('OPTIONS /*', function() {
	Flight::json('Anyway, return something for OPTIONS requests');
});
/********************************************************************************/


include("$root/routes/session.php");

include("$root/routes/rfp.php");


//$debug = file_get_contents('php://input');
//$debug = var_export($debug,true);
//file_put_contents('c:/test.txt', $debug);

Flight::start();


