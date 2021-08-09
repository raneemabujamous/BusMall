'use strict';
let arrayImgName = [
    'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg',
    'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg',
    'unicorn.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']


let sectionImage = document.getElementById('imgSection');
let oneImage = document.getElementById('one')
let towImage = document.getElementById('tow')
let threeImage = document.getElementById('three')

let getUl = document.getElementById('ul');
let sectionButton = document.getElementById('forButton');

let forButton = document.createElement('button');
forButton.textContent = 'take me to our bagshop'

let counter = 0
let randomNunmOne  
let randomNunmtow 
let randomNunmthree 
let numberOFcounter = 25
let arrryOFRandom= []
class BusMall {
    constructor(name, imgSrc) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.shown = 0;
        this.clicked = 0;
        BusMall.arrayOfObject.push(this);
    }
}



BusMall.arrayOfObject = [];

for (let i = 0; i < arrayImgName.length; i++) {
    new BusMall(arrayImgName[i].split('.')[0], arrayImgName[i])
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
function render() {
  

   do { 
    randomNunmOne = randomNumber(0, arrayImgName.length - 1);

    randomNunmtow = randomNumber( 0, arrayImgName.length - 1 );
    randomNunmthree = randomNumber(0, arrayImgName.length - 1);
 
  } while( (randomNunmOne === randomNunmtow)|| ( randomNunmOne=== randomNunmthree)||(randomNunmtow===randomNunmthree) || (arrryOFRandom.includes(randomNunmOne) ) || (arrryOFRandom.includes(randomNunmtow) ) || (arrryOFRandom.includes(randomNunmthree) )  )  


  arrryOFRandom=[randomNunmOne,randomNunmtow,randomNunmthree]


    oneImage.src = './img/' + BusMall.arrayOfObject[randomNunmOne].imgSrc
    towImage.src = './img/' + BusMall.arrayOfObject[randomNunmtow].imgSrc
    threeImage.src = './img/' + BusMall.arrayOfObject[randomNunmthree].imgSrc

    BusMall.arrayOfObject[randomNunmOne].shown++
    BusMall.arrayOfObject[randomNunmtow].shown++
    BusMall.arrayOfObject[randomNunmthree].shown++
     counter ++
    
}

render();

sectionImage.addEventListener('click', whenClick);
function whenClick(event) {


       
        if (event.target.id === 'one'&& counter < numberOFcounter) {
            BusMall.arrayOfObject[randomNunmOne].clicked++;
   
            console.log(BusMall.arrayOfObject[randomNunmOne])
            render();

        }
        else if (event.target.id === 'tow'&& counter < numberOFcounter) {
            BusMall.arrayOfObject[randomNunmtow].clicked++;
 
            console.log(BusMall.arrayOfObject[randomNunmtow])
            render();

        }
        else if (event.target.id === 'three'&& counter < numberOFcounter) {
            BusMall.arrayOfObject[randomNunmthree].clicked++;
         
            console.log(BusMall.arrayOfObject[randomNunmthree])
            render();

        }

    else {
        forButton.onclick = function() {showElements()}  

        forButton.id="clickonme"
        sectionButton.appendChild(forButton)
        console.log('ff')

        sectionImage.removeEventListener('click', whenClick)

         }
    
}


function showElements(){
    for(let i=0;i<arrayImgName.length;i++){
let createLi = document.createElement('li') 
createLi.textContent = BusMall.arrayOfObject[i].name +' had ' + BusMall.arrayOfObject[i].shown+ ' votes, and was seen '+ BusMall.arrayOfObject[i].clicked +'times'
getUl.appendChild(createLi);

    }

    chart()

}
 
function chart(){
let nameChart = [];
let showChart = [];
let clickedChart = [];

for (let x=1 ; x<BusMall.arrayOfObject.length ; x++){

    nameChart.push(BusMall.arrayOfObject[x].name)
    showChart.push(BusMall.arrayOfObject[x].shown)
    clickedChart.push(BusMall.arrayOfObject[x].clicked)


}
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameChart,
        datasets: [{
            label: '# of Votes',
            data: showChart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: nameChart,
            data: clickedChart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


}



