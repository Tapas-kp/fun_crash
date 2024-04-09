// let name=["Rice", "Dal", "Salt"]
// let quantity=[2, 3, 1]
// let price=[60, 50, 20]
// let arr=[]
// for(let i=0;i<price.length;i++){
//     let obj={}
//     obj.name=name[i]
//     obj.price=price[i]
//     obj.quantity=quantity[i]
//     obj.total=function(){
//         return(this.quantity[i]*this.price[i])
//     }
//     arr.push(obj)
    
// }
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=price[i]*quantity[i]

// }
// console.log(sum);

let sum=0
let obj={
  nm:["Rice", "Dal", "Salt"],
  qt:[2, 3, 1],
  pr:[60, 50, 20],
  total:function(){
    for(let i=0;i<this.nm.length;i++){
      sum+=this.qt[i]*this.pr[i]
    }
    console.log(sum)
  }

}
obj.total()