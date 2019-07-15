var great = $('.great');
var animal = $('.animal');
var cats = $('.cats');
var happycat = ['.one','.two'];

great.on('click', feelingFunction);

function feelingFunction(){
  console.log('hi');
  animal.toggleClass('animal');
  if('.cats'.clicked){
    cats.on('click', catPhoto);
  }else if ('.dogs'.clicked){
    dog.on('click', dogPhoto);
  }else if ('.bunny'.clicked){
    dog.on('click', bunnyPhoto);
  }else if ('.llama'.clicked){
    dog.on('click', llamaPhoto);
  }
}

function catPhoto(){
  var num = Math.random()*2;
  num = Math.floor(num);
  console.log(num);
  // alert("almost")
  $('.one').css('display', 'block');
}

function dogPhoto(){
  var num = Math.random()*2;
  num = Math.floor(num);
  console.log(num);
  // alert("almost")
  $('.five').css('display', 'block');
}

function bunnyPhoto(){
  var num = Math.random()*2;
  num = Math.floor(num);
  console.log(num);
  // alert("almost")
  $('.nine').css('display', 'block');
}

function llamaPhoto(){
  var num = Math.random()*2;
  num = Math.floor(num);
  console.log(num);
  // alert("almost")
  $('.thirteen').css('display', 'block');

// var eh = $('.eh');
//
// eh.on('click', feelingFunction);
//
// function feelingFunction(){
//   console.log('hi');
//   animal.toggleClass('animal');
// }



//   if($('.cats').clicked){
//     $('.one').show()
//   } else if($('.dogs').clicked){
//     $('.three').show()
//   }else if($('.bunny').clicked){
//
//   }else($('.llama').clicked){
// }
