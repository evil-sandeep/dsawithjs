let data=[];
let currLength=data.length; 4>0 

function text(x){
    data[currLength]=x
    currLength+=1
}

function pop(){
    if(currLength>0){
         currLength-=1
         data.length=currLength
    }
}

text(20)
text(20)
text(20)
text(20)
pop()
console.log(data)