<?php
include_once("../include/mysql_class.php");
$mysql_server_name = 'localhost';
//改成自己的mysql数据库服务器  
$mysql_username = 'jinkeeper';
//改成自己的mysql数据库用户名  
$mysql_password = 'kingsoft119';
//改成自己的mysql数据库密码  
$mysql_database = 'jinkeeper';
//改成自己的mysql数据库名
$mysql_table = 'medicalservicedb';

$db = mysql_connect($mysql_server_name, $mysql_username, $mysql_password)or die('Could not connect' . mysql_error());
//echo '连接成功！';
mysql_select_db($mysql_database, $db);
$sql = "SELECT * FROM $mysql_table";
//$sql = "SELECT * FROM $mysql_table";
$result = mysql_query($sql, $db);
//$fields=mysql_list_fields($mysql_database,$mysql_table,$db); //列出test库friends表的信息
$cols = mysql_num_rows($result); //获取总行数

//echo $cols; //返回总行数

//////////////返回xml格式
/*echo '<?xml version="1.0" encoding="ISO-8859-1"?>
<person>';
while ($row = mysql_fetch_array($result)) {
    echo "<firstname>" . $row['id'] . "</firstname>";
    echo "<lastname>" . $row['machine_name'] . "</lastname>";
    echo "<age>" . $row['OS_version'] . "</age>";
}
echo "</person>";*/

/////////////返回json格式
$arr = array();
while ($row = mysql_fetch_array($result,MYSQL_ASSOC)) {
    array_push($arr,$row);
}
$json_string = JSON($arr);
echo "$json_string";
//$json_string = JSON(mysql_fetch_array($result));
//$json_string = json_encode(mysql_fetch_array($result));
//$json_string = mysql_fetch_array($result);
//echo $json_string;
//echo "showData($json_string)";

//echo $sql;
mysql_close($db);
//$db->close();
//echo "关闭成功";
function JSON($array)
{
    arrayRecursive($array, 'urlencode', true);
    $json = json_encode($array);
    return urldecode($json);
}

function arrayRecursive(&$array, $function, $apply_to_keys_also = false)
{
    static $recursive_counter = 0;
    if (++$recursive_counter > 1000) {
        die('possible deep recursion attack');
    }
    foreach ($array as $key => $value) {
        if (is_array($value)) {
            arrayRecursive($array[$key], $function, $apply_to_keys_also);
        } else {
            $array[$key] = $function($value);
        }
        if ($apply_to_keys_also && is_string($key)) {
            $new_key = $function($key);
            if ($new_key != $key) {
                $array[$new_key] = $array[$key];
                unset($array[$key]);
            }
        }
    }
    $recursive_counter--;
}

?> 