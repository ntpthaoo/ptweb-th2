<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giari phương trình bậc 2</title>
</head>
<body>
    <?php
    $result ='';
    if(isset($_POST['submit']))
    {
        $a =  isset($_POST['a']) ? $_POST['a'] : '';
        $b =  isset($_POST['b']) ? $_POST['b'] : '';
        $c =  isset($_POST['c']) ? $_POST['c'] : '';
        $delta = ($b*$b)-(4*$a*$c);
        if($_POST['a']==0){
            $result = 'Phương trình có nghiệm: ' .-$b/$c;
        }
        else{

            if($delta<0){
                $result = 'Phương trình vô nghiệm';
            }
            else if($delta==0){
                $result = 'Phương trình có nghiệm kép x1=x2= ' .(-$b/2*$a);
            }
            else{
                $result = 'Phương trình có hai nghiệm phân biệt: x1=  ' .(($b+sqrt($delta))/2*$a) ;
                $result .= ', x2 = ' .(($b-sqrt($delta))/2*$a);
            }
        }
        
    }
    ?>
			<div class="Top">
				<h4>
					Giải phương trình bậc 2
                    <span id="A">a</span>x<sup>2</sup>+<span id="B">b</span>x+<span id="C">c</span>=0
				</h4>
			</div>
			
                <form method="POST" action="">
                    Nhập số a:<br>
                    <input   type="number" name="a">
                    <br>
                    Nhập số b:<br>
                    <input   type="number" name="b">
                    <br>
                    Nhập số c:<br>
                    <input  type="number" name="c">
                    <br>
                    <br>
                    <button name="submit">Gỉai</button>
                </form>

           

    <?php echo $result; ?>
</body>
</html>