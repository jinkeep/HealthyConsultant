<?php   
include_once("include/mysql_class.php");
$mysql_server_name='localhost'; 
//改成自己的mysql数据库服务器  
$mysql_username='jinkeep'; 
//改成自己的mysql数据库用户名  
$mysql_password='kingsoft119'; 
//改成自己的mysql数据库密码  
$mysql_database='jinkeep';
 //改成自己的mysql数据库名  
$mysql_table='bglab_wpassist_installinfo';
 
// $conn=mysql_connect($mysql_server_name,
// $mysql_username,$mysql_password) or die('Could not connect'.mysql_error());
// echo '连接成功！'; 
// mysql_select_db($mysql_database,$conn) or die('Could not connect'.mysql_error());   
$db =  new mysql($mysql_server_name,$mysql_username,$mysql_password,$mysql_database,"GBK");
echo '连接成功！';

//插入一条数据
$result = $db->fn_insert($mysql_table,'uid,version,machine_name,machine_type,model,OS_name,OS_version,IP,installedDate,user_name,comments,api_key',
"'testuid','testversion','testmachine_name','testmachine_type','testmodel','testOS_name','testOS_version','testIP',now(),'testuser_name','testcomments','testapi_key'");
echo $result;

// $sql = "DELETE FROM $mysql_table WHERE uid = 'testuid'";
// $result = $db->query($sql);
// echo '删除测试数据成功!';


//echo $sql;   
//mysql_close($conn);   
$db->close();
echo "关闭成功";   
?> 