let rectangle_obj={
    length:5,
    width:6,
    perimeter:function(){
        return 2*(this.length+this.width)

    },
    area:function(){
        return(this.length*this.width)
    }
}
console.log(rectangle_obj.perimeter())
console.log(rectangle_obj.area())