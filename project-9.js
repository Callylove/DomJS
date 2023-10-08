const reviews = [
    { id: 1,
      name: "Ima Nweke",
      job: "frontend developer",
      img: "img/me2.jpg",
      text: "I love programming."
    
    },
            { id: 2,
            name: "Ima Nweke",
            job: "frontend developer",
            img: "img/me3.jpg",
            text: "I love programming."
        
      },
      { id: 3,
        name: "Ima Nweke",
        job: "frontend developer",
        img: "img/me4.jpg",
        text: "I love programming."
      
      },
      { id: 4,
        name: "Ima Nweke",
        job: "frontend developer",
        img: "img/me5.jpg",
        text: "I love programming."
      
      }
]
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
 const prevBtn = document.querySelector(".prev-btn");
 const  nextBtn = document.querySelector(".next-btn");
 const randomBtn = document.querySelector(".random-btn");
 //load items
 let currentItem = 0;
 
 window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
    
 })
 // show next button
 function showPerson(person){
    const item = reviews[person];
    img.src = item.img; 
    author.textContent =item.name;
   
    job.textContent = item.job;
    info.textContent = item.text;
    
 }
 nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
 })
 prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
 })
 
 randomBtn.addEventListener("click", function(){
    let randomPerson = Math.floor(Math.random() * reviews.length);
    showPerson(randomPerson);
 })
