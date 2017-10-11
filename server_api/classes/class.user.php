<?php

/**********************************************************************/
class user{
	protected $db;

	public $access_level,$username;
	public $authenticated = false;

	/******************************************/
	function __construct($db_conn){
		$this->db = $db_conn;

		$this->authenticated = true;
		$this->access_level = 2;
	}
	/******************************************/
	
}
/**********************************************************************/
