// let marks=5;
// if(marks>=33){
//     console.log("you are pass ")
//     if(marks<=45){
//         console.log("c grade")
//     } else if(marks<=70){
//         console.log("B grade")
//     } else if(marks<=100){
//         console.log("A grade")
//     }
// } else {
//     console.log("you are failed")
// }



// let str="aman"
// if(str[0]=="a" && str.length<5){
//     console.log("its a good string")
// } else{
//     console.log("not a good string")
// }




// let date=8
// switch(date){
//     case 1:{
//         console.log('monday')
//         break
//     }
//     case 2:{
//         console.log('tuesday')
//         break
//     }
//     case 3:{
//         console.log('wednesday')
//         break
//     }
//     case 4:{
//         console.log('thursday')
//         break
//     }
//     case 5:{
//         console.log('wednesday')
//         break
//     }
//     case 6:{
//         console.log('wednesday')
//         break
//     }
//     case 6:{
//         console.log('wednesday')
//         break
//     }
//     case 7:{
//         console.log('wednesday')
//         break
//     }
//     default:{
//         console.log('hmm kuch v.....')
//     }
// }





// numb1=prompt("enter your first name")
// numb2=prompt("enter your last name")
// console.log(`hello ${numb1+numb2}`)
// console.warn('chhuio mt')
// console.error("nakli error")




// a="  hello   "
// console.log(a.trim())
// console.log(a)
// b=a.trim()


//  let students= ['aman','rajkumar','rahul singh']
//  let students1= [4,5.7,'rahul singh']
//  let primarycolor=['red','blue','green']
//  let secondarycolor=['orang','black','white']
//  let char=['a','v','x','e']
//  let num=[23,45,56,71,2]
//  let nestedarry=[[1,9],[2,8],[3,7],[4,6]]
//  let tictoe=[['x',null,'o'],[null,'x',null],['o',null,'x'],]





// for(i=1;i<=5;i++){
//     console.log(i)
// }


// for(i=1;i<16;i=i+2){
//     console.log(i)
// }
// for(i=2;i<11;i=i+2){
//     console.log(i);
// }
// for(i=10;i>1;i=i-2){
//     console.log(i);
// }





// n=prompt()
// for(i=1;i<11;i++){
//     console.log(n,'*',i,'=',i*n)
// }


// for(i=1;i<4;i++){
//     console.log(`outer loop ${i}`)
//     for(j=1;j<5;j++){
//     console.log(5,'*',j,'=',j*5)
//     }

// }


// let i=1
// while(i<=10){
//     console.log(i)
//     i++;
// }

// j=10
// while(j>0){
//     console.log(j)
//     j--;
// }


// guess=prompt('guess my favmovie')
// favmovie='5cmpersec'
// q='quite'
// while(guess!=favmovie || guess!=q){
//     guess=prompt('you are wrong  please try again')
// }
// if(guess==prompt){
//     console.log('you won!')
// }
// if(guess==q){
//     console.log('ok')
// }





// let fruits=['mango','papaya','tamatar','guava','graps'];
// for(i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }



// let fruits=[['mango','papaya','tamatar'],['guava','graps']];
// for(i=0; i<fruits.length;i++){
//     console.log(i,fruits[i])
//     for(j=0;j<fruits[i].length;j++){
//         console.log(j,fruits[i][j])
//     }
// }




// let fruit=[['mango','papaya','tamatar'],['guava','graps']];
// for(bigitems of fruit){
//     console.log(bigitems)
//     for(items of bigitems){
//         console.log(items)
//     }
// }




// let fruits=['mango','papaya','tamatar','guava','graps'];
// for(item of fruits){
//     console.log(item)
// }
// for(char of 'apnacollege'){
//     console.log(char)
// }



// to-do list
// task=[];
// req=prompt('pleas enter your request');
// while(true){
//     if(req=='quite'){
//         console.log('ok');
//         break;
//     }
    
    
//     if (req=='list'){
//         console.log('your updated list are below');
//         for(items of task){
//             console.log(items);
//         }
//     }
    
//     else if(req=='add'){
//         newtask=prompt('please  enter your task to add');
//         task.push(newtask)
//         console.log('done')
//     }else if(req=='delet'){
//         let index=prompt('please enter your index')
//         task.splice(index,1)
//         console.log('deleted')
//     }
//     req=prompt('pleas enter your request');
    
// }





// let student={
//     name:'vikash',
//     class:12,
//     rollno:"34972",
//     subjects:['english','hindi','math']
// }

// const post={
//     username:'@vikashdeepkumar0',
//     like:1289,
//     tags:['@vikash','@coder'],
//     follower:455,
//     true:'ha',
//     false:'na',
//     1:'a'
// }







// let student={
//     vikash:{
//     class:12,
//     marks:74,
//     grade:'b',
//     },
//     rahul:{
//         class:12,
//         marks:74,
//         grade:'c',
//         },
//     chnadan:{
//     class:12,
//     marks:94,
//     grade:'a',
//     },
// }




// data=Math.random()
// data=data*100
// data=Math.floor(data)
// one_line_data=Math.floor(Math.random()*1000)+1



//guess the number game


// input=prompt('enter the max number' )
// data=Math.floor(Math.random()*input)+1
// // console.log(data)
// while(true){
//     guess=prompt('guess the number')
//     if(guess==data){
//         console.log('you won!')
//         break
//     }if (guess=='quite'){
//         console.log('quiting the game')
//         break
//     }
// }




// function dice(){
//     roll=Math.floor(Math.random()*7)
//     console.log(roll)
// }
//  dice();
 




// function avg(a,b,c){
//     console.log(`average of a,b and c are = ${(a+b+c)/2}`)
// }

// avg(1,2,3)








// n=prompt()
// console.log('table of',n)
// function table(n){
//     for(i=1;i<11;i++){
//         console.log(`${n} * ${i} =${n*i}`)
//     }
// }
// table(n)




// num=prompt('enetr the number upto where you want the total sum value')
// sum=0
// for(i=1;i<=num;i++){
//     sum=sum+i
// }
// console.log(sum)





// arr=['2','5','6','78','67']
// concation=0
// for(i=0;i<=4;i++){
//     a=arr[i]
//     concation=concation+a
// }
// console.log(concation)







// arr=['67','78','67','56']
// function sum(index){
//     console.log(arr)
// }


// arr1=['656','5678','6337','5633']
// sum1=function(index){
//     console.log(arr1)
// }







// multiple=function(func,count){
//     for(i=0;i<count;i++){
//         func()
//     }
// }

// print=function(){
//     console.log('hellow')
// }





// odd= function(el){
//     if(!(el%2==0)){
//         console.log('true from odd func')
//     }else{
//         console.log('false from odd func')
//     }
// }


// even= function(el){
//     if((el%2)==0){
//         console.log('true from even func')
//     }else{
//         console.log('false from even')
//     }
// }



// checkatonce=function(req){
//     if(req=='odd'){
//         return odd()
//     }if(req=='even'){
//         return even()
//     }
// }

//or

// checkatonce=function(req){
//     if(req=='odd'){
//         return function odd(el){
//             if(!(el%2==0)){
//                 console.log('true from odd func')
//             }else{
//                 console.log('false from odd func')
//             }
//         }
//     }if(req=='even'){
//         return function even(el){
//             if((el%2)==0){
//                 console.log('true from even func')
//             }else{
//                 console.log('false from even')
//             }
//         }
        
//     }
// }




// const students={
//     name:'vikash',
//     class:567,
//     voteridnumber:'this'
// }





// const calculator={
//     add:function(a,b){
//         return a+b
//     },
//     sub:function(a,b){
//         return a-b
//     },
//     multi:function(a,b){
//         return a*b
//     }, 
// }

//or

// const calculator={
//     add(a,b){
//         return a+b
//     },
//     sub(a,b){
//         return a-b
//     },
//     multi(a,b){
//         return a*b
//     }, 
// }



// const students={
//     name:'vikash',
//     eng:56,
//     math:79,
//     hindi:67,
//     avg(){
//         console.log(this.eng+this.math+this.hindi)
//     }

// }


///or


// const students={
//     name:'vikash',
//     eng:56,
//     math:79,
//     hindi:67,
//     avg(){
//         console.log(students.eng+students.math+students.hindi)
//     }

// }




// let arr=['2','5','6','78','67']
// let concation='';
// function con(arr){
//     for(i=0;i<=4;i++){
//         a=arr[i]
//         concation=concation+a
//     }
//     return concation;
// }





// sum=10   //globale scope
// function calculate(a,b){
//     let sum=a+b //function scope
//     console.log(sum)
// }


// calculate(3,4)
// console.log(sum)



// sum=10   //globale scope
// function calculate(a,b){
//     // let sum=a+b //function scope
//     console.log(sum)
// }


// calculate(3,4)
// console.log(sum)





// const student={
//     naam:'vikash',
//     class:6,
//     rool:67,
//     str(){
//         console.log(`${this.naam} has roll number ${this.class}`)
//     }
// }






// console.log('hellow')
// try{
//     console.log(a)
// } catch{
//     console.log('error pleas check this line for error correction')
// }
// console.log('hellow')
// console.log('hellow')




// function sum(a,b){
//     return a+b
// }

//or

// const sum=function(a,b){
//     return a+b
// }

//or


// const sub=(a,b)=>{
//     return a-b
// }

//or

// const mul=(a,b)=> a*b

// const sum=(a,b)=>{
//     return a+b
// }
// //or 
// const sub=(a,b)=>(
//     a-b
// )

// const print=()=>{
//     console.log('hellow world')
// }

// const power= n =>{
//     return n**n
// }



// console.log('hii')
// setTimeout( ()=>{
//         console.log('afetr 4 sec')
//     },4000
// )
// console.log('hmm')


// id= setInterval(()=>{
//     console.log('hiii...')
// },2000

// )



// id=setInterval(() => {
//     console.log('hello')
// },2000);

// setTimeout(() => {
//     clearInterval(id)
// },10000);






// arr=[5,6,7]
//  print=function (e){
//     console.log(e)
// }
// arr.forEach(print)


// arr.forEach(function (e){
//     console.log(e)
// })


// arr.forEach((e)=>{
//     console.log(e)
// })


// arr=[4,5,6,7]
// double=(el)=>{
//     console.log(el*2)
// }
// arr.forEach(double)


// a=[45,67,65]
// double=(el)=>{
//     console.log(el*2)
// }
// a.forEach(double)

//or

// arr=[45,67,8,67]
// let double=arr.map((el)=>{
//     return el*2
// })




// student=[{
//     name:'golu',
//     class:12,
//     percentage:80,
// },
// {
//     name:'aman',
//     class:12,
//     percentage:46,
// },
// {
//     name:'rahul',
//     class:12,
//     percentage:78,
// },
// {
//     name:'monu',
//     class:12,
//     percentage:90,
// }]







// let garde=(el)=>{
//     console.log(el.percentage/10)
// }
// student.forEach(garde)

//or
// let garde=student.map((el)=>{
//     console.log(el.percentage/10)
// })

// arr=[1,2,3,4,5,6,7,8]
// let all_in_arry=arr.filter((el)=>{
//     return el%2==0 ///even no.
// })








// arr=[3,4634,4364,53334,34344,3434]
// let ans=arr.reduce((accmu,el)=>{
//     if(el>accmu){
//         return el
//     }else{
//         return accmu
//     }
// })


// arry=[10,30,30,40,50]
// let check=arry.every((el)=>{
//     return el%10==0
// })




// aryy=[34,55,34,24,67,35]
// mincheck=aryy.reduce((accmu,el)=>{
//     if(el>accmu){
//         return accmu
//     }else{
//         return el
//     }
// }) 


// console.log(...'this is apnacollege')
// arr=[3,4,5,6,74,4435,464,4]
// console.log(...arr)



// console.log(Math.min(2,45,666,34))
// arry=[45,67,3,34,2,344,43,4]
// console.log(...arry)
// console.log(Math.max(...arry))


// const data={
//     email:'@gamil.com',
//     passward:'34243434'
// }
// console.log(data)
// newdata={...data,id:76,country:'india'}




// arg=[]
// let sum=function(...arg){
//     for(i=0;i<arg.length;i++){
//         console.log('you have entered ',arg[i])
//     }
// }