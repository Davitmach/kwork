
document.addEventListener('wheel', function(event) {
 
if(event.deltaY == 100) {
    this.location.href = './pages/logistika/logistika.html'
   
    }
else if(event.deltaY == -100) {
    this.location.href = './pages/production/production.html'
}
});
