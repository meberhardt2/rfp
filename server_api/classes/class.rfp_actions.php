<?php

/**********************************************************************/
class rfp_actions extends rfp{
	public $updated_form_fields = array();

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
		$sql_update = '';
		foreach($this->updated_form_fields as $field){
			$sql_update .= $field.'=:'.$field.',';
		}

		if(!empty($sql_update)){
			//dates come in like this 2017-10-21T02:35:59.000Z
			//if one was set, strip out the time info
			if(!empty($this->stamp)){
				$temp = explode('T',$this->stamp);
				$this->stamp = $temp[0];
			}
			if(!empty($this->date_modified)){
				$temp = explode('T',$this->date_modified);
				$this->date_modified = $temp[0];
			}

			$sql_update = substr($sql_update,0,-1);
			
			$sql = "update rfp set $sql_update where id = :id";
			$sql = $this->db->conn->prepare($sql);
			$sql->bindValue(':id', $this->id);
			
			foreach($this->updated_form_fields as $field){
				$sql->bindValue(':'.$field, $this->$field);
			}
			$sql->execute();
			$arr = $sql->errorInfo();
			$debug = var_export($arr,true);
			file_put_contents('c:/test.txt', $debug);
		}
	}
	/******************************************/


	/******************************************/
	function delete(){

	}
	/******************************************/


	/******************************************/
	function add(){
		$sql_first = '';
		$sql_second = '';
		foreach(get_object_vars($this) as $prop=>$val){
			if($prop != 'id' && $prop != 'db' && $prop != 'user'){
				$sql_first .= $prop.',';
				$sql_second .= ':'.$prop.',';
			}
		}

		if(!empty($sql_first)){
			$sql_first = substr($sql_first,0,-1);
			$sql_second = substr($sql_second,0,-1);

			//dates come in like this 2017-10-21T02:35:59.000Z
			//if one was set, strip out the time info
			if(!empty($this->stamp)){
				$temp = explode('T',$this->stamp);
				$this->stamp = $temp[0];
			}
			if(!empty($this->date_modified)){
				$temp = explode('T',$this->date_modified);
				$this->date_modified = $temp[0];
			}

			$sql = "insert into rfp($sql_first) values($sql_second)";
			$sql = $this->db->conn->prepare($sql);
			foreach(get_object_vars($this) as $prop=>$val){
				if($prop != 'id' && $prop != 'db' && $prop != 'user' && $prop != 'updated_form_fields'){
					$sql->bindValue(':'.$prop, $val);
				}
			}
			$sql->execute();
		}
	}
	/******************************************/
}
/**********************************************************************/
