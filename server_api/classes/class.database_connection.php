<?php

/**********************************************************************/
class database_connection{
	public $conn;

	function __construct($db_config){
		try {
			$this->conn = new PDO("mysql:dbname=".$db_config['db_name'].";host=".$db_config['db_host'].";charset=utf8", $db_config['db_user'], $db_config['db_pass'],array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8") );
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
		} catch (PDOException $e) {
			//send email about error $e->getMessage()
		}
	}
}
/**********************************************************************/

