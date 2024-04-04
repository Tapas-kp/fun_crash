function replace(char){
    let bag=""
    for(let i=0;i<char.length;i++){
        if(char[i]==" "){
            bag+="_"
        }
        else{
            bag+=char[i]
        }
    }
    return bag

}
console.log(replace("The quick brown fox jumps over the lazy dog"));