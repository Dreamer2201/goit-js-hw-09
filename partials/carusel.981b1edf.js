var nextBtn=document.getElementById("nextImg"),prevBtn=document.getElementById("prevImg"),imgs=document.querySelectorAll(".elem"),dots=document.querySelectorAll(".dotImg"),index=0,toggleActiveSlide=function(e){var t=!0,i=!1,n=void 0;try{for(var l,o=imgs[Symbol.iterator]();!(t=(l=o.next()).done);t=!0)item=l.value,item.classList.remove("active")}catch(e){i=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}imgs[e].classList.add("active")},toggleActiveDot=function(e){var t=!0,i=!1,n=void 0;try{for(var l,o=dots[Symbol.iterator]();!(t=(l=o.next()).done);t=!0)item=l.value,item.classList.remove("active-dot")}catch(e){i=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}dots[e].classList.add("active-dot")},nextImg=function(){index===imgs.length-1?(toggleActiveSlide(index=0),toggleActiveDot(index)):(index++,toggleActiveSlide(index),toggleActiveDot(index))},prevImg=function(){0==index?(index=imgs.length-1,toggleActiveSlide(index),toggleActiveDot(index)):(index--,toggleActiveSlide(index),toggleActiveDot(index))};nextBtn.addEventListener("click",nextImg),prevBtn.addEventListener("click",prevImg),setInterval(nextImg,5e3);
//# sourceMappingURL=carusel.981b1edf.js.map