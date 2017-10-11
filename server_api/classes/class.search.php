<?php

/**********************************************************************/
class search{
	public $terms = array();
	public $rfps = array();

	protected $db, $user;
	
	
	/******************************************/
	function __construct($db_conn,$user){
		$this->db = $db_conn;
		$this->user = $user;
	}
	/******************************************/
	

	/******************************************/
	function go(){
		$sql = "select * from rfp";
		$sql = $this->db->conn->prepare($sql);
		$sql->execute();
		
		while ($row = $sql->fetch(PDO::FETCH_ASSOC)){
			$temp_array = array(
				'id' => $row['id'],
				'subject' => $row['subject'],
				'category' => $row['category']
			);

			$this->rfps[] = $temp_array;
		}
	}
	/******************************************/
}
/**********************************************************************/
