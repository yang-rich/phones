<?php

$dbconn = pg_connect("host=localhost dbname=smartphones");

class Phone{
    public $id;
    public $name;
    public $ostype;
    public $brand;
    public $price;
    public $specs;
    
    public function __construct($id, $name, $ostype, $brand, $price, $specs){
        $this->id = $id;
        $this->name = $name;
        $this->ostype = $ostype;
        $this->brand = $brand;
        $this->price = $price;
        $this->specs = $specs;
    }
}

class Allphones{

    static function create($phones){
        $query = "INSERT INTO phones (name, ostype, brand, price, specs) VALUES ($1, $2,$3, $4, $5)";
        $query_params = array($phones->name, $phones->ostype, $phones->brand, $phones->price, $phones->specs);

        pg_query_params($query, $query_params);
        return self::display();
    }

    static function update($phones){
        $query = "UPDATE phones set name = $1, ostype = $2, brand = $3, price = $4, specs = $5 WHERE id = $6";
        $query_params = array($phones->name, $phones->ostype, $phones->brand, $phones->price, $phones->specs, $phones->id);

        pg_query_params($query, $query_params);
        return self::display();
    }

    static function delete($id){
        $query = "DELETE FROM phones WHERE id = $1";
        
        pg_query_params($query, array($id));
        return self::display();
    }

    static function display(){
        $myPhones = array();

        $results = pg_query("SELECT * FROM phones ORDER BY id ASC");
        $row = pg_fetch_object($results);

        while($row){
            $new_phone = new Phone(
                intval($row->id),
                $row->name,
                $row->ostype,
                $row->brand,
                intval($row->price),
                $row->specs
            );
            $myPhones[] = $new_phone;
            $row = pg_fetch_object($results);
        }
        return $myPhones;
    }
}
?>