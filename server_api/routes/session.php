<?php

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
