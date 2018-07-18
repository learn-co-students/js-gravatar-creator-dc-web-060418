class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(name) {
    //return 16 value hash of numbers 0-255
    this.hashArray = md5.array(name);
    this.color = `rgb(${this.hashArray[0]}, ${this.hashArray[1]}, ${this.hashArray[2]})`
  }
  
  addBackGroundColorIfSquareIsEven(rowIdx, colIdx) {
    //instance method to add bg color
    document.getElementById(`${rowIdx}-${colIdx}`).style.backgroundColor = this.color
  }

  iterateAndColorEvenSquares() {
    //go through all of squares, see if "corresponding" hash value is even, if it is, add color
    let hashIndex = 0;
    //rowCounter = 0; //max value is 2
    //columnCounter = 0; //max value is 4
    for (let columnCounter = 0; columnCounter < 3; columnCounter++) {
      //iterate through first 3 columns, then iterate through each row of those columns
      for (let rowCounter = 0; rowCounter < 5; rowCounter++) {
        if (this.hashArray[hashIndex]%2==0) {
          //if current hash value is even, color that square
          this.addBackGroundColorIfSquareIsEven(rowCounter, columnCounter)
        }
        hashIndex++;
      }
    }
  }

  colorMirrored() {
    //color columns 4 and 3 with mirroring values
    let hashIndex = 0;
    for (let columnCounter = 4; columnCounter > 2; columnCounter--) {
      for (let rowCounter = 0; rowCounter < 5; rowCounter++) {
        if (this.hashArray[hashIndex]%2==0) {
          //if current hash value is even, color that square
          this.addBackGroundColorIfSquareIsEven(rowCounter, columnCounter)
        }
        hashIndex++;
      }
    }
  }
  
}
