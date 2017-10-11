<?php

/**********************************************************************/
class rfp{
	public $id,$category,$subject,$source,$stamp,$date_modified,$author,$brokerage,$city,$state,$exception,$vendor,$question,$answer;
	public $cat_ep,$cat_dms,$cat_mp,$cat_wholesaler,$cat_char_limit,$cat_global;

	protected $db, $user;
	
	
	/******************************************/
	function __construct($db_conn,$user){
		$this->db = $db_conn;
		$this->user = $user;
	}
	/******************************************/
	
}
/**********************************************************************/
