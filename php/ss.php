<?php
include_once("include/mysql_class.php");

$json = file_get_contents('php://input');
$obj = json_decode($json);
$params = $obj->{'params'};
//echo $obj->{'method'};
//echo $params->{'IP'};
// echo $obj->{'params'}->{'IP'};
// var_dump($params);
// echo $params;
connect($obj->{'method'}, $params);
function connect($method, $params)
{
    if (!strcmp($method, 'CountInstallInfo')) {

        //echo $obj->{'method'}.'yes CountInstallInfo';
        CountInstallInfo($params);
    } elseif (!strcmp($method, 'test')) {
        echo die('yes test');
    } else {
        echo die('no');
    }
}

function CountInstallInfo($params)
{

    $mysql_server_name = 'localhost';
    //改成自己的mysql数据库服务器
    $mysql_username = 'jinkeep';
    //改成自己的mysql数据库用户名
    $mysql_password = 'kingsoft119';
    //改成自己的mysql数据库密码
    $mysql_database = 'jinkeep';
    //改成自己的mysql数据库名
    $mysql_table = 'bglab_wpassist_installinfo';

    // $conn=mysql_connect($mysql_server_name,
    // $mysql_username,$mysql_password) or die('Could not connect'.mysql_error());
    // echo '连接成功！';
    // mysql_select_db($mysql_database,$conn) or die('Could not connect'.mysql_error());
    $db = new mysql($mysql_server_name, $mysql_username, $mysql_password, $mysql_database, "GBK");
    //echo '连接成功！';


    //插入一条数据
    //echo $params->{'uid'};

    $uid = $params->{'uid'};
    $version = $params->{'version'};
    $machine_name = $params->{'machine_name'};
    $machine_type = $params->{'machine_type'};
    $model = $params->{'model'};
    $OS_name = $params->{'OS_name'};
    $OS_version = $params->{'OS_version'};
    $IP = $params->{'IP'};
    $user_name = $params->{'user_name'};
    $comments = $params->{'comments'};
    $api_key = $params->{'api_key'};

    $query = $db->query("SELECT * FROM $mysql_table WHERE uid='$uid' AND version='$version'");
    $num = $db->num_rows($query);
    echo $num;

    if ($num > 0) {
        echo 'Exist!';
    } else {
        $result = $db->fn_insert($mysql_table, 'uid,version,machine_name,machine_type,model,OS_name,OS_version,IP,installedDate,user_name,comments,api_key',
            "'$uid','$version','$machine_name','$machine_type','$model','$OS_name','$OS_version','$IP',now(),'$user_name','$comments','$api_key'");
    }

    // $result = $db->fn_insert($mysql_table,'uid',
    // "'$uid'");

    // $result = $db->fn_insert($mysql_table,'uid,version,machine_name,machine_type,model,OS_name,OS_version,IP,installedDate,user_name,comments,api_key',
    // "'$uid','$version','$machine_name','$machine_type','$model','$OS_name','$OS_version','$IP',now(),'$user_name','$comments','$api_key'");


    // $result = $db->fn_insert($mysql_table,'uid,version,machine_name,machine_type,model,OS_name,OS_version,IP,installedDate,user_name,comments,api_key',
    // "$uid,$version,$machine_name,$machine_type,$model,$OS_name,$OS_version,$IP,$installedDate,$user_name,$comments,$api_key");
    // $result = $db->fn_insert($mysql_table,'uid,version,machine_name,machine_type,model,OS_name,OS_version,IP,installedDate,user_name,comments,api_key',
    // "(string)$obj->{'uid'},(string)$obj->{'version'},(string)$obj->{'machine_name'},(string)$obj->{'machine_type'},(string)$obj->{'model'},(string)$obj->{'OS_name'},(string)$obj->{'OS_version'},
    // (string)$obj->{'IP'},now(),(string)$obj->{'user_name'},(string)$obj->{'comments'},(string)$obj->{'api_key'}");
    //echo $result;

    // $sql = "DELETE FROM $mysql_table WHERE uid = 'testuid'";
    // $result = $db->query($sql);
    // echo '删除测试数据成功!';

    //echo $sql;
    //mysql_close($conn);
    $db->close();
    echo "OK";
}

?>