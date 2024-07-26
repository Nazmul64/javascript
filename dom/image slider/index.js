  let Image = document.querySelector('img');
  let photos=['images/nazmul.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
  let count =0;
  function next(){
    count++;
    if(count==photos.length){
        count=0;
    }
    Image.src=photos[count];
  }
   function prev(){
    count--;
    if(count==0){
        count=photos.length-1;
    }
    Image.src=photos[count];
  }
  setInterval(next,2000);