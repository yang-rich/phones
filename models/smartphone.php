<?php

$dbconn = pg_connect("host=localhost dbname=contacts");

class Phone{
    public $id;
    public $name;
    public $ostype;
    public $brand;
    public $price;
    public $specs;
}
?>