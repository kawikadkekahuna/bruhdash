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

  drop: function(){

  },

  dropRight: function() {

  },

  fill: function() {

  },

  first: function (array) {
      return array[0];
  },

  indexOf: function () {

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