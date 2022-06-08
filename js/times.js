window.onload=function() {
    var element=document.querySelector('.element');
    var counter=document.querySelector('.counter');
    element.addEventListener('click',function() {
        counter.innerHTML = 1 * counter.innerHTML + 1;

    })
}