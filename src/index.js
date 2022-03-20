document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("LOADED!")
    fetchDogsInfo()
    // dogGoodorBad()

    dogDiv = document.getElementById("dog-info")
    
})

let dogDiv

let buttonGoodorBad


const dogUrl = "http://localhost:3000/pups"

const fetchAtr =  {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }

}

let info = []

function fetchDogsInfo(){

    fetch(dogUrl, fetchAtr)
    .then(response => response.json())
    .then(data => {
        // console.log('Success:', data);
       
        data.forEach(element => {
            // console.log('Success:', element);
            createDogsBar(element)
            info.push(element)
            // console.log("I am the info:", info)
            // console.log('Success:', element.name)
            // console.log('Success:', element.isGoodDog)
            // console.log('Success:', element.image)
           
            let spans = document.getElementsByTagName('span');
            for(i=0;i<spans.length;i++)
                spans[i].onclick=createAndRenderDogsCards;

        });

    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

function createDogsBar(dogData){
    let dogSpan = document.createElement("span")
    dogSpan.id = dogData.name
    dogSpan.innerHTML = dogData.name
    const dogBar = document.getElementById("dog-bar")
    dogBar.appendChild(dogSpan)

}



function createAndRenderDogsCards(){
    // alert(this)
    console.log(this)
    console.log(this.id)
    // let i = 1;
    // for (let obj in info) {
    //     console.log(i++)
    // }


    
    // console.log("I am the info:", info)
    dogDiv.innerHTML = " "
    info.forEach(element => {
        // console.log(element.id)

        if(this.id === element.name){
        // console.log("GO")
        let dogImg = document.createElement("img")
        dogImg.src = element.image
        let dogH = document.createElement("h2")
        dogH.innerHTML = element.name
        let dogButton = document.createElement("button")
        
        if(element.isGoodDog === true){
            dogButton.innerHTML = "Good Dog!"
        }
        else
            dogButton.innerHTML = "Bad Dog!"

        dogButton.id = "good-bad"
        dogDiv.appendChild(dogImg)
        dogDiv.appendChild(dogH)
        dogDiv.appendChild(dogButton)



        buttonGoodorBad = document.getElementById("good-bad")

        }
    })

    buttonGoodorBad.addEventListener("click", (event) => {
        
        // console.log("I've been clicked")
        dogGoodorBad()
        // if(buttonGoodorBad.innerHTML === "Good Dog!"){
        //     buttonGoodorBad.innerHTML = "Bad Dog!"
        // }

        // else if(buttonGoodorBad.innerHTML === "Bad Dog!"){
        //     buttonGoodorBad.innerHTML = "Good Dog!"
        // }
        
        
    })

    
}

let dogId 

function dogGoodorBad(){

    if(buttonGoodorBad.innerHTML === "Good Dog!"){
        buttonGoodorBad.innerHTML = "Bad Dog!"
    }

    else if(buttonGoodorBad.innerHTML === "Bad Dog!"){
        buttonGoodorBad.innerHTML = "Good Dog!"
    }

    // console.log(info)
    // for (let index = 0; index < info.length; index++) {
    //     const element = info[index];

    //     dogId = index
    //     console.log(element)
    //     console.log(element)


        
    // }



    
   
}



