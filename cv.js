var card = document.querySelector('.all');
card.addEventListener( 'mouseover', function() {
  document.querySelector('#right').classList.add('moveLeft');
  document.querySelector('#left').classList.add('moveRight')
});

card.addEventListener( 'mouseout', function() {
  document.querySelector('#right').classList.remove('moveLeft');
  document.querySelector('#left').classList.remove('moveRight')
});

// هذا عشان القى السهم على اليمين
document.querySelector('.fa-angle-right').addEventListener('click', function(){
 document.querySelector('#whatsapp').classList.add('moveR');
})
  // هذا عشان القى السهم على اليسار


document.querySelector('.fa-angle-left').addEventListener('click', function(){
  document.querySelector('#email').classList.add('moveL')
})

