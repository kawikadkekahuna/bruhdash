var global = window || GLOBAL;


global.bruhdash = {
  chunk: function(array,size){
   var newArray = [];

   for(var i =0; i < array.length; i+= size){
    
    newArray.push(array.slice(i,i+size));

   }
   return newArray;
},


  compact: function(array) {
  var newArray = []; 
  var falseyArray = [undefined,null,0,"",NaN,false];
  
  for(var i = 0; i<= array.length; i++){
    if(array[i] !== falseyArray[0] && array[i] !== falseyArray[1] && array[i] !== falseyArray[2] && array[i] !== falseyArray[3] && isNaN(array[i]) === false && array[i] !== falseyArray[5]){
      newArray.push(array[i]);
    }
    
    
  }
  return newArray;

  
  

  },

  difference: function() {




  },

  drop: function(array, dropCount){

    if(dropCount === undefined){
      dropCount = 1;
    }
    return array.slice(dropCount,array.length);



  },

  dropRight: function(array,dropCount) {

 if(dropCount === undefined){
      dropCount = 1;
    }
   for(var i = 0; i< dropCount; i++){
    array.pop();
  
    }
    return array; 
  },

  fill: function(array,value,start,end) {
    
    if(start === undefined && end === undefined){  
    var start = 0;
    var end = array.length;

  }
    array.fill(value,start,end);

    return array;


  },

  first: function (array) {
      return array[0];
  },

  indexOf: function (array, value, index) {

      if(index === undefined){

        index = 1;
      }

      for(var i = index; i < array.length; i++){

       if(array[i] === value){
        return i;
      }
       
     }

     return -1;
    

  },


  inital: function (array) {

    return array.slice(0,(array.length));

  },

  last: function (array) {

    return array[array.length - 1];

  },

  lastIndexOf: function (array, value, index) {
    var newVal = 0;
    var counter = 0;
    if(index === undefined){

        index = 1;
      }

    while (counter != array.length){

      if(array[counter] === value){

        newVal = counter;

      }
      counter++;
    }

    if(newVal !== undefined){
      return counter - newVal;
    }else{
      return -1;
    }
    

  },

  pull: function (array) {
  var newArray = [];

  for(var i =0; i< array.length; i++){
    
    var doPush = true;

    for(var k =1; k< arguments.length; k++){
      if(arguments[k] === array[i]){
        doPush = false;
      }

    }

    if(doPush === true){
      newArray.push(array[i]);
    }

  }   

  return newArray;


  },

  pullAt: function () {

  },

  rest: function () {

  },

  slice: function () {

  },

  take: function () {

  },

  takeRight: function () {

  },

  zip: function () {

  },

  unzip: function () {

  },

  without: function(array, exclude) {

    var newArray = [];

    if(SameValueZero(exclude[0],array[0])){
      console.log('true');
    }

    return newArray;



  }
};