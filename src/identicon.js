class Identicon {

  constructor(string) {
    let md5Array = md5.array(string)
    let color = `rgb(${md5Array[0]}, ${md5Array[1]}, ${md5Array[2]})`

    this.md5Array = md5Array
    this.color = color
    console.log(color)
}

  makeBetterAssociationObject() {

    let nestedArray = [[0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]]
    let gridAssociation = {}
    let i = 0
    for ( const nest1 in nestedArray ) {
      for ( const nest2 in nestedArray ) {
        if (parseInt(nest2) == 3) {
          i -= 2
          gridAssociation[`${nest1}-${nest2}`] = this.md5Array[i]
        } else if (parseInt(nest2) == 4) {
          gridAssociation[`${nest1}-${nest2}`] = this.md5Array[--i]
        } else {
          gridAssociation[`${nest1}-${nest2}`] = this.md5Array[i++]
        }

        if (parseInt(nest2) == 4) {
          i+=3
        }

      }
    }
    return gridAssociation
  }

}
