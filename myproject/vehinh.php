<html>
<head>
	<title>Form ve bang</title>
</head>
<body>

<form action="vehinh.php" method="post" >
		<table>
			<tr>
				<td align="center" colspan="2">Form ve bang</td>
			</tr>	
			<tr>
				<td>So dong: </td>
				<td><input type="number" id="dong" name="dong"></td>
			</tr>               
			<tr>
				<td>So cot: </td>
				<td><input type="number" id="cot" name="cot"></td>
			</tr>
			<tr>
                            <td><input type="reset" name="btn_submit" value="Nhap Lai"></td>
                            <td><input type="submit" name="btn_submit" value="Ve"></td>
			</tr>
		</table>
</form>
    <?php
    if(isset ($_POST['dong'])){

    echo "<table width=600 border=2";
     for ($i=1;$i<=$_POST['dong'];$i++)
     {echo "<tr>";
        for ($j=1;$j<=$_POST['cot'];$j++)
         if ($j<=$i){
         echo "<td>&nbsp;$j</td>";}
          else 
          {echo "<td>&nbsp;</td>";}
        echo "<br/>";
       echo"</tr>";
     }
     echo "</table>";
    }
    ?>
</body>
</html>
