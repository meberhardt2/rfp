<?php

$body = file_get_contents('php://input');
$body = json_decode($body, true);

/*
$get = var_export($_GET,true);
$post = var_export($_POST,true);

$body = json_decode($body, true);
$body = var_export($body,true);

$out = 'get:'."\n".$get."\n\n".'post:'."\n".$post."\n\n".'body:'."\n".$body;

file_put_contents('c:/test.txt', $out);

array (
  'data' =>
  array (
    'subject' => 'asd',
  ),
)

*/

$rfps = array(
	array(
		'id' => 4,
		'subject' => 'test1',
		'category' => 'i am a category'
	),
	array(
		'id' => 10,
		'subject' => 'test2 dd',
		'category' => 'i am also a category'
	)
);

$out = array(
	'rfps' => $rfps
);



echo json_encode($out);

