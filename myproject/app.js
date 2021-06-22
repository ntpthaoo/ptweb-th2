//  Bài 3: Tạo web site thực hiện giải phương trình bậc hai
//   – chỉ sự dụng javascript ( ax2+bx + c) =0
 
//  let a = Number(prompt("Please input a"));
//  let b = Number(prompt("Please input b"));
//  let c = Number(prompt("Please input c"));
//  let delta = b**2 -4*a*c ;
 
//  if(a === 0 ) {
//      alert(`x = ${(-b)/c}`);

//  }
//  else {
//      if( delta < 0) {
//          alert("Pt vô nghiệm");
//      }
//      else if(delta === 0){
//          alert('Pt có nghiệm kép x1 = x2 = ${-b/2*a}');

//      }
//      else {
//          let x1 =(-b-Math.sqrt(delta))/(2*a);
//          let x2 =(-b+Math.sqrt(delta))/(2*a);

//          alert(`PT có nghiệm x1 = ${x1}`);
//          alert(`PT có nghiệm x2 = ${x2}`);
//      }
//  }



function Submit(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = b**2 -4*a*c ;

    if (a == 0) {
        alert(`Pt có nghiệm  x = ${-b / c}`);
    }
    else {
        if (delta < 0) {
            alert("Pt vô nghiệm");
        }
        else if (delta === 0) {
            alert(`Pt có nghiệm kép x1 = x2 = ${-b / 2 * a}`);

        }
        else {
            let x1 = (-b - Math.sqrt(delta)) / (2 * a);
            let x2 = (-b + Math.sqrt(delta)) / (2 * a);

            alert(`PT có nghiệm x1 = ${x1}`);
            alert(`PT có nghiệm x2 = ${x2}`);
        }
    }
}

