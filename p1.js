let nm=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let age=[32, 30, 26, 28, 44]
let  arr=[]
for(let i=0;i<nm.length;i++){
    let obj={}
    obj.name=nm[i]
    obj.age=age[i]
    arr.push(obj)
}
for(let i=0;i<arr.length;i++){
    if(arr[i].age>30){
        console.log(arr[i].name)
    }
}
