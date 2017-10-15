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
					if($key == 'stamp' || $key == 'date_modified'){
						$temp_value = '';
					}
					else{
						$temp_value = '';
					}
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
		foreach(get_object_vars($this) as $prop=>$val){
			if($prop != 'id' && $prop != 'db' && $prop != 'user'){
				$sql_first .= $prop.',';
				$sql_second .= ':'.$prop.',';
			}
		}
		$sql_first = substr($sql_first,0,-1);
		$sql_second = substr($sql_second,0,-1);

		$sql = "insert into rfp($sql_first) values($sql_second)";
		$sql = $this->db->conn->prepare($sql);
		foreach(get_object_vars($this) as $prop=>$val){
			if($prop != 'id' && $prop != 'db' && $prop != 'user'){
				$sql->bindValue(':'.$prop, $val);
			}
		}
		$sql->execute();
	}
	/******************************************/
}
/**********************************************************************/
