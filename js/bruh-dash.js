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
      index = 0;
    }

    if(index != value){
    return array.indexOf(value);
    }else {

      return array.index(value + index);
    }
  },


  inital: function () {


  },

  last: function () {

  },

  lastIndexof: function () {

  },

  pull: function () {

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