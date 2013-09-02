<?php
//header("content-type:text/html; charset=utf-8");
include_once("../include/mysql_class.php");

InsertOneRecord($params);
function InsertOneRecord($params){
    $mysql_server_name='localhost';
//改成自己的mysql数据库服务器
    $mysql_username='jinkeeper';
//改成自己的mysql数据库用户名
    $mysql_password='kingsoft119';
//改成自己的mysql数据库密码
    $mysql_database='jinkeeper';
    //改成自己的mysql数据库名
    $mysql_table='medicalservicedb';

    $db = new mysql($mysql_server_name, $mysql_username, $mysql_password, $mysql_database, "utf-8");

    //插入一条数据
    //echo $params->{'uid'};
    $name ='你';
    $address ='是';
    $phone ='好';
    $x = '样';
    $y = '的';
    $description ='啊';

    $db->fn_insert($mysql_table, 'name,address,phone,x,y,description',
        "'$name','$address','$phone','$x','$y','$description'");

//    $query = $db->query("SELECT * FROM $mysql_table WHERE name='$name' OR phone='$phone'");
//    $num = $db->num_rows($query);
//    echo $num;

//    if ($num > 0) {
//        echo 'Exist!';
//    } else {
//        $result = $db->fn_insert($mysql_table, 'name,address,phone,x,y,description',
//            "'$name','$address','$phone','$x','$y','$description'");
//    }

    $db->close();
}

?>