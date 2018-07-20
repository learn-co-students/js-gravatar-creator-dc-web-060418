function updateDOM(user) {
document.getElementById('identicon').children
changeSquare(user);

}


function changeSquare(user){

  const backgroundColorRGB = `(${user.red}, ${user.green}, ${user.blue})`;
  let x = 0;
  let y = 0;

  user.fieldArray.forEach(function(num) {
    if(x > 2){x=0};
    if(y > 4){y=0};
    const currentSquare = selectSquare(y,x);
    const mirrorSquare = selectSquare(y,4-x);

    if(oddEven(num)){
      currentSquare.style.backgroundColor = 'rgb' + backgroundColorRGB;
      mirrorSquare.style.backgroundColor = 'rgb' + backgroundColorRGB;
    }
    x++; y++;
  })
}

function selectSquare(x,y){
  document.getElementById(`${x}-${y}`).style.backgroundColor = 'rgb' + "(255,255,255)";
  return document.getElementById(`${x}-${y}`);

}

function oddEven(num){

return  num%2 ? false : true;
}
