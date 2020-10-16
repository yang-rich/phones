<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/smartphone.php';

if($_REQUEST['action']){
    echo json_encode (Phone::all() );
}else if($_REQUEST['action']){

}else if($_REQUEST['action']){

}else if($_REQUEST['action']){
    //stuff
}

?>