
document.addEventListener('wheel', function(event) {
   
if(event.deltaY == 100) {
    this.location.href = '../../index.html'
}
else if(event.deltaY == -100) {
    this.location.href = '../logistika/logistika.html'
  
}
});