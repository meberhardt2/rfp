<?php

/********************************************************************************/
Flight::route('POST /add', function(){
	$db_conn = Flight::get('db_conn');
	$user = Flight::get('user');
	
	$rfp = new rfp_actions($db_conn,$user);
	
	//loop through all the properties of the class and see if any of that data was passed to the api
	foreach ($rfp as $key => $value) {
		$rfp->$key = Flight::request()->data->$key;
	}
	
	$out = array();
	foreach ($rfp as $key => $value) {
		if(!empty($value)) {
			$out[$key] = $value;
		}
	}

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
