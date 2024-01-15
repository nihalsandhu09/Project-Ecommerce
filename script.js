const wrapper = document.querySelector(".sliderWrapper") 

const menuItem = document.querySelectorAll(".menuItem")

menuItem.forEach((item,index)=>{
  console.log(item , index)
    item.addEventListener("click",function(event){

    wrapper.style.transform = `translateX(${-100 * index}vw)`

    })
     

})