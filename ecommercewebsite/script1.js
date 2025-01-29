document.addEventListener('DOMContentLoaded',() => {
    const Categories = document.querySelectorAll('.regi');
    const prevbtn = document.querySelector('.previous');
    const nextbtn = document.querySelector('.nextone');
    let currentindex=0;
    function showImage(index){
        Categories.forEach((category,i) =>{
            category.classList.toggle('active',i===index);
        });
    }
    prevbtn.addEventListener('click',() =>{
        currentindex = (currentindex - 1 + Categories.length)%Categories.length;
        showImage(currentindex);
    });
    nextbtn.addEventListener('click',() =>{
        currentindex = (currentindex+1)%Categories.length;
        showImage(currentindex);
    });
    showImage(currentindex);
});