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


/********************************************************************************/
Flight::route('GET /', function(){
	$db_conn = Flight::get('db_conn');
	$user = Flight::get('user');
	
	$session = new session($db_conn,$user);
	$session->get_nav();

	$out = array(
		'nav' => $session->nav
	);

	Flight::json($out);
});
/********************************************************************************/


/********************************************************************************/
Flight::route('PUT /search', function(){
	$db_conn = Flight::get('db_conn');
	$user = Flight::get('user');
	
	$search = new search($db_conn,$user);
	$search->terms = $_POST;
	$search->go();

	$out = array(
		'rfps' => $search->rfps
	);

	Flight::json($out);
});
/********************************************************************************/


/********************************************************************************/
Flight::route('GET /rfp/@id', function($id){
	$db_conn = Flight::get('db_conn');
	$user = Flight::get('user');

	$rfp = new rfp_actions($db_conn,$user);
	$rfp->id = $id;
	$rfp->get();

	$out = array();
	foreach ($rfp as $key => $value) {
		if(!empty($value)) {
			$out[$key] = $value;
		}
	}

	Flight::json($out);
});
/********************************************************************************/


Flight::start();


