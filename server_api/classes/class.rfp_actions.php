<?php

/**********************************************************************/
class rfp_actions extends rfp{
	protected $db, $user;
	
	
	/******************************************/
	function __construct($db_conn,$user){
		$this->db = $db_conn;
		$this->user = $user;
	}
	/******************************************/
	

	/******************************************/
	function get(){
		$sql = "select * from rfp where id = :id";
		$sql = $this->db->conn->prepare($sql);
		$sql->bindValue(':id', $this->id);
		$sql->execute();
		
		while ($row = $sql->fetch(PDO::FETCH_ASSOC)){
			foreach($row as $key=>$value){
				$temp_value = $value;
				if(empty($temp_value)){
					$temp_value = '';
				}

				$this->$key = $temp_value;
			}
		}
	}
	/******************************************/

			
	/******************************************/
	function update(){

	}
	/******************************************/


	/******************************************/
	function delete(){

	}
	/******************************************/


	/******************************************/
	function add(){

	}
	/******************************************/
}
/**********************************************************************/
