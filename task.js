
var request =new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)

request.send();

request.onload = function() {
var data = JSON.parse(request.response)
console.log(data) 
 for (var i=0;i<=data.length;i++){
    //country name
    console.log(data[i].name.common);
    //flags
    console.log(data[i].flags);
    //region
    console.log(data[i].region);
    //subregion
    console.log(data[i].subregion);

 }
};

var obj1=[{
"name":"person",
"age":5
},
{
  "age":5,
  "name":"person"
}];
console.log(obj1);
