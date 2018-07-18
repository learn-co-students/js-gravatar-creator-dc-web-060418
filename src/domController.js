function updateDOM() {
    const identicon = new Identicon(document.querySelector('#identicon-str-input').value)
    const colorStr = `rgb(${identicon.color[0]},${identicon.color[1]},${identicon.color[2]})`
    const identiconGrid = [...document.querySelector('#identicon').children]
    identiconGrid.forEach((block, i)=>{
        if (identicon.squares[i]){
            block.style.backgroundColor = colorStr
        }
        else{
            block.style.backgroundColor = "white"
        }
    })
    
}
