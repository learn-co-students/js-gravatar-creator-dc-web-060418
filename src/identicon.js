class Identicon {
  constructor(str){
    const hashedArray = md5.array(str)
    this.color = hashedArray.slice(0,3)
    this.squares = this.generateSquares(hashedArray.slice(0, 16))
  }
  generateSquares(numArray){
    const squaresArray = new Array(25)
    for(let i=0;i<5;i++){
      for(let j=0;j<3;j++){
        let boolean = (numArray[i * 3 + j] % 2 === 0) ? true : false
        if (j===0){
          squaresArray[i*5+j] = boolean
          squaresArray[i*5+j+4] = boolean
        }else if(j===1){
          squaresArray[i * 5 + j] = boolean
          squaresArray[i * 5 + j + 2] = boolean
        }else{
          squaresArray[i * 5 + j] = boolean
        }
      }
    }
    return squaresArray
  }
}
