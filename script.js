let image = document.querySelector('img');
let lArrow = document.querySelector('.leftArrow');
let rArrow = document.querySelector('.rightArrow');
let myImages = document.querySelector('.myImages');
let price = document.querySelector('#price');
let colorInfo = document.querySelector('.colorInfo')
let dimensionsInfo = document.querySelector('.dimensionsInfo')

var x = 0;
let imgArr = ['./image1.png','./blue.png','./gray.png'];

function mainImage(){
    if(x=='0'){
        image.src=imgArr[x];
        price.textContent = '680$'
        image.classList.add('jsImageAnimation')
        setTimeout(()=>{
            image.classList.remove('jsImageAnimation')
        },2000)
            colorInfo.textContent = 'Golden'
            dimensionsInfo.textContent = 'Diameter 22cm, Height 40cm'
    }else if(x=='1'){
        image.src =imgArr[x];
        price.textContent = '720$'
        image.classList.add('jsImageAnimation')
        setTimeout(()=>{
            image.classList.remove('jsImageAnimation')
        },2000)
        colorInfo.textContent = 'Blue'
        dimensionsInfo.textContent = 'Diameter 25cm, Height 45cm'
        
    }else if(x=='2'){
        image.src =imgArr[x]
        price.textContent = '600$'
        image.classList.add('jsImageAnimation');
        setTimeout(()=>{
            image.classList.remove('jsImageAnimation')
        },2000)
        colorInfo.textContent = 'Black'
        dimensionsInfo.textContent = 'Diameter 18cm, Height 38cm'
    }
}
lArrow.addEventListener('click',()=>{
    x++;
    if(x==3){
        x=0;
    }
   mainImage();
    console.log(x)
})

rArrow.addEventListener('click',()=>{
    x--;
    if(x<0){
        x=3
    }
    mainImage()
    console.log(x);
})

// color circles js 
let whiteCircle = document.querySelector('.whiteCircle');
let blueCircle = document.querySelector('.blueCircle');
let blackCircle = document.querySelector('.blackCircle');

whiteCircle.addEventListener('click',()=>{
    image.src = './image1.png';
    price.textContent = '680$'
    colorInfo.textContent = 'Golden'
    dimensionsInfo.textContent = 'Diameter 22cm, Height 40cm'

})
blueCircle.addEventListener('click',()=>{
    image.src = './blue.png'
    price.textContent = '720$'
    colorInfo.textContent = 'Blue'
    dimensionsInfo.textContent = 'Diameter 25cm, Height 45cm'

})
blackCircle.addEventListener('click',()=>{
    image.src = './gray.png'
    price.textContent = '600$'
    colorInfo.textContent = 'Black'
    dimensionsInfo.textContent = 'Diameter 18cm, Height 38cm'

})

// counter btn 
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let counter = document.querySelector('.counter');

increase.addEventListener('click',()=>{
counter.textContent = x++
})
decrease.addEventListener('click',()=>{
counter.textContent = x--;
if(x<1){
    x= 1;
}
})

// product details code 