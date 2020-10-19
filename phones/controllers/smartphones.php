<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/smartphone.php';

if($_REQUEST['action'] === 'index'){
    // echo "hello world";
    echo json_encode (Allphones::display() );
}else if($_REQUEST['action']  === 'create'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    
    $new_phone = new Phone(null, $body_object->name, $body_object->ostype, $body_object->brand, $body_object->price, $body_object->specs, $body_object->image);

    $all_phones = Allphones::create($new_phone);
    echo json_encode($all_phones);

}else if($_REQUEST['action']  === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    
    $update_phones = new Phone($_REQUEST['id'], $body_object->name, $body_object->ostype, $body_object->brand, $body_object->price, $body_object->specs, $body_object->image);

    $all_phones = Allphones::update($update_phones);
    echo json_encode($all_phones);

}else if($_REQUEST['action'] === 'delete' ){
    $all_phones = Allphones::delete($_REQUEST['id']);
    echo json_encode($all_phones);
}

?>