let ingreItem = document.querySelectorAll('.ingre-item');
let item = document.querySelectorAll('.item-content .item');

ingreItem.forEach((element, index) =>{
    element.addEventListener('click', function(){
        
        item[index].classList.toggle('active');
    })
})
