document.addEventListener('DOMContentLoaded', () => {
const Images = document.querySelectorAll('.pimage');
const thumbnails = document.querySelectorAll('#angle img');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');
let currentindex = 0;

function showImage(index){
    Images.forEach((image,i) =>{
        image.classList.toggle('active',i===index);
    });
}

prevbtn.addEventListener('click', () =>{
    currentindex = (currentindex-1 + Images.length)%Images.length;
    showImage(currentindex);
});
nextbtn.addEventListener('click', () =>{
    currentindex = (currentindex+1)%Images.length;
    showImage(currentindex);
});
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentindex = index; 
      showImage(currentindex);
    });
  });
showImage(currentindex);
});