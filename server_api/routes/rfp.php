<?php

/********************************************************************************/
Flight::route('PUT /rfp/@id', function($id){
	$db_conn = Flight::get('db_conn');
	$user = Flight::get('user');

	$body = Flight::request()->getBody();
	$body = json_decode($body,true);
	
	$rfp = new rfp_actions($db_conn,$user);
	$rfp->id = $id;
	
	//the json body was decoded above. fill in the fields that were sent. also store the field names so in the update we only update what we were sent, not the whole object/form
	foreach($body as $field_name => $field_value){
		$rfp->updated_form_fields[] = $field_name;
		$rfp->$field_name = $field_value;
	}
		
	$rfp->update();

	$out = array(
		'status' => 'success'
	);

	Flight::json($out);
});
/********************************************************************************/


/********************************************************************************/
Flight::route('POST /rfp', function(){
	$db_conn = Flight::get('db_conn');
	$user = Flight::get('user');
	
	$rfp = new rfp_actions($db_conn,$user);
	
	//loop through all the properties of the class and see if any of that data was passed to the api
	foreach ($rfp as $key => $value) {
		$rfp->$key = Flight::request()->data->$key;
	}
	
	$rfp->add();

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

	$terms = array();

	$search = new search($db_conn,$user);
	
	foreach ($search as $key => $value) {
		if($key != 'terms' && $key != 'rfps'){
			$terms[$key] = Flight::request()->data->$key;
		}
	}
		
	$search->terms = $terms;
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
		$out[$key] = $value;
	}

	Flight::json($out);
});
/********************************************************************************/
