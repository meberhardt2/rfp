<?php

/**********************************************************************/
class session{
	public $nav = array();

	protected $db, $user;
	
	
	/******************************************/
	function __construct($db_conn,$user){
		$this->db = $db_conn;
		$this->user = $user;
	}
	/******************************************/
	

	/******************************************/
	function get_nav(){
		if($this->user->access_level == 2){
			$this->nav = array(
				array(
					'id' => 0,
					'to' => '/',
					'display' => 'Home'
				),
				array(
					'id' => 1,
					'to' => '/results',
					'display' => 'Search Results'
				),
				array(
					'id' => 2,
					'to' => '/rfp',
					'display' => 'RFP'
				)
			);
		}
	}
	/******************************************/
}
/**********************************************************************/
