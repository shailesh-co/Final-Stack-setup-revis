import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './services/myservice.service';
import { debounceTime, fromEvent, interval, observable, Observable, throttleTime, timer } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { resolve } from 'path';
import { rejects } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
Parentmsg  =" I m from Parent component";
inputinfo :any ;
userinfo :any;
userform! : FormGroup
  na ="";
  title = 'frontend';
  show=false
  details = ['angular','css','javascript'];
  users = ['admin', 'customer', 'wendor']

  parantmsg = "from parent msg"
   userRole: string = 'admin';
   searchControl = new FormControl();



  constructor(public router:Router, private myservice:MyserviceService , private fb :FormBuilder){
    this.searchControl.valueChanges
      .pipe(debounceTime(50000))
      .subscribe(value =>{
        console.log('API call for',value)
      });
  }

  ngOnInit(): void {

    console.log(0 / 0); 
       const us= [
  { name: 'Shailesh', age: 28 },
  { name: 'Amit', age: 30 }
];
  const names = us.map(info =>info.name );
  console.log(names)
    const arr =[1,1,2,3,4,5,5,6,7,7];
      let arr2 = [... new Set(arr)];
      console.log(arr2);
      console.log(arr);
      

    fromEvent(window,'scroll')
      .pipe(throttleTime(30000))
      .subscribe(()=> {
        console.log('scroll event TRiggrd')
      })

      this.promi()
       
    }

    promi(){
    const promis = new Promise((resolve,reject)=>{
          let success =true;
          if(success){
            resolve('promise resolved')
          }
          else {
            reject(' promise rejected')
          }
    });
      promis
              .then((res) => console.log(res))
              .catch((err) => console.log(err))
              .finally(()=> console.log('kddklfdjkf promise.......'))
    }
 
  pusmethid(){
    const arr : (number | string) [] =[1,2,3,4];
    const arr2 =arr.push("five");
    console.log(arr);
    const arr3 =arr.pop()
    console.log(arr2);
    console.log(arr3);
    console.log(arr);
    const unshift = arr.unshift(1,"shailesh");
    console.log(unshift);
    console.log(arr)
    const shift = arr.shift();
    console.log(arr);
    const ab = [2,5,"ddssd"]
    const concat = arr.concat(ab);
    console.log(concat);
    const aeejo =[1,2,3,4,5];
    const join = aeejo.join();
    console.log(typeof(join),join);

    const rev = join.split(',').reverse();
    console.log(rev, typeof(rev))

    const reverse = rev.reverse();
    console.log(reverse)

    //slice(start, end)
    const arr4= [1,0,0,2,3,4,5,6];
    // const aee = arr4.slice(2,6);
    // console.log(aee);
    const indexof = arr4.indexOf(2);
    console.log(indexof);
    const lastindex = arr4.lastIndexOf(4);
    console.log(lastindex);

    const include = arr4.includes(3);
    console.log(include);

    // const fore = [1,2,4,5,6];
    // const forval = fore.forEach((val)=>{
    //  val*2;
    // });

    // console.log(forval)
    const fore = [1, 2, 4, 5, 6];

const forval = fore.forEach((val) => {
  return val * 2; // return value is ignored
});

console.log(forval); // 🔴 undefined
  }

shallocopy  (){
  const shallow  ={ a:2,b:3,
     address: {
    city: "Delhi",
    pincode: 110001
  }
  };
  console.log(shallow);
  //Shallow copy
  // const shallocopy = {...shallow};
  // shallocopy.address.city = "Mumbai";
  // console.log("Origional shallow copy",shallow);
  // console.log("sdd",shallocopy);

  const deepcopy = JSON.parse(JSON.stringify(shallow));
 deepcopy.address.city = "Hyderabad";
 console.log("origional",shallow);
 console.log("After deep",deepcopy)
}

prototype(){
  const animal = {
    eats :true
  }

  const dog ={
    barks :true
  }

// dog.__proto__ = animal;
Object.setPrototypeOf(dog,animal);
console.log("dog barks",dog.barks);
console.log(animal.eats);
}
  onSubmit( val:any) {

    if(val.status =="VALID"){
        console.log(val.value)
    }
    else {
      console.log("form empty")
    }
 console.log(val)

  }

  objectkeypair(){
    console.log("bbjectPair");
    for (let i = 0; i < 5; i++) {
  console.log(i); // 0 to 4
}
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
const arr = [10, 20, 30];
for (let val of arr) {
  console.log(val); // 10, 20, 30
}

const obj : { [key: string]: any }  = { name: "Alice", age: 25 };
for (let key in obj) {
  console.log(key, obj[key]); // name Alice, age 25
}



  }





}
