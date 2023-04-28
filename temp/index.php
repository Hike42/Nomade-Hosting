<?php
$output = shell_exec('sudo whoami 2> error;cat error;pwd;ls -l');
echo "<pre>$output</pre>";

$mysqli = new mysqli('localhost', 'user42', 'user42', 'user42');

if (mysqli_connect_error()) {
	die('Connect Error (' . mysqli_connect_errno() . ') '
		. mysqli_connect_error());
}

echo 'Success... ' . $mysqli->host_info . "\n";

$mysqli->close();

$AccountSize = shell_exec("du -sh /home/user42 | awk '{print $1}'");
echo "<pre>Espace consommé $AccountSize</pre>";
$DBSize = shell_exec("sudo du -sh /var/lib/mysql/user42 | awk '{print $1}'");
echo "<pre>Taille de la base de donnée :  $DBSize</pre>";

?>