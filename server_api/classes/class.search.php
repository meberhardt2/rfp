<?php

/**********************************************************************/
class search extends rfp{
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
		//$debug = var_export($this->terms,true);
		//file_put_contents('c:/test.txt', $debug);

		$sql_where = '';
		foreach($this->terms as $term => $value){
			if(!empty($value)){
				$sql_where .= "$term like :$term and ";
			}
		}		

		$sql = "select * from rfp ";
		if(!empty($sql_where)){
			$sql_where = substr($sql_where,0,-4);
			$sql .= "where $sql_where ";
		}

		$sql = $this->db->conn->prepare($sql);
		if(!empty($sql_where)){
			foreach($this->terms as $term => $value){
				if(!empty($value)){
					$sql->bindValue(':'.$term, '%'.$value.'%');
				}
			}
		}

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
