$(document).ready(function(){
    console.log('jQuery in action');
    document.getElementById('grayButton').onclick = switchGray;
    document.getElementById('whiteButton').onclick = switchWhite;
    
    function switchGray() {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
      document.getElementsByTagName('body')[0].style.color = 'white';
    }
    
    function switchWhite() {
      document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
      document.getElementsByTagName('body')[0].style.color = 'black'; 
    }




})
