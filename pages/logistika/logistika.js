
document.addEventListener('wheel', function(event) {

if(event.deltaY == 100) {
    this.location.href = '../production/production.html'
}
else if(event.deltaY == -100) {
    this.location.href = '../../index.html'
}
});