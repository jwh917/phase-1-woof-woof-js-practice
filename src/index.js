document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("LOADED!")
    fetchDogsInfo()
    goodDogFilter()

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
                // console.log(i)
            

        });

    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

function createDogsBar(dogData){
    // console.log(dogData)
    let dogSpan = document.createElement("span")
    dogSpan.id = dogData.name
    dogSpan.innerHTML = dogData.name
    const dogBar = document.getElementById("dog-bar")
    dogBar.appendChild(dogSpan)

}

let dogId

function createAndRenderDogsCards(){
    // console.log(this)
    // console.log(this.id)

    // console.log("I am the info:", info)
    dogDiv.innerHTML = " "
    info.forEach(element => {
        // console.log(element)

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
        if(element.isGoodDog === false){
            dogButton.innerHTML = "Bad Dog!"
        }
        

        dogButton.id = "good-bad"
        dogDiv.appendChild(dogImg)
        dogDiv.appendChild(dogH)
        dogDiv.appendChild(dogButton)
        dogId = element.id
        // console.log("this is dog's id", dogId)

        buttonGoodorBad = document.getElementById("good-bad")

        }
    })

    buttonGoodorBad.addEventListener("click", (event) => {
        // console.log("I've been clicked")
        dogGoodorBad()
        
    })

}

let dogTF 

function dogGoodorBad(){
    console.log()

    if(buttonGoodorBad.innerHTML === "Good Dog!"){
        buttonGoodorBad.innerHTML = "Bad Dog!"
        dogTF = false

    }

    else if(buttonGoodorBad.innerHTML === "Bad Dog!"){
        buttonGoodorBad.innerHTML = "Good Dog!"
        dogTF = true
    }
    
    // console.log("this is dog's id:", dogId)
    // console.log("this is dog's true or false:", dogTF)

    
    fetch(`${dogUrl}/${dogId}`, {
        method: "PATCH",
        body: JSON.stringify({
            isGoodDog: dogTF
            }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // data
        console.log('Success:', data.isGoodDog)
        // buttonGoodorBad.innerHTML = ""

        if(data.isGoodDog === true){
            buttonGoodorBad.innerHTML = "Good Dog!"
        
    
        }
    
        else 
            buttonGoodorBad.innerHTML = "Bad Dog!"
        

    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function goodDogFilter(){

    const filterButton = document.getElementById("good-dog-filter")

    filterButton.addEventListener("click", (event) => {
        if(filterButton.innerHTML === "Filter good dogs: OFF"){
            filterButton.innerHTML = "Filter good dogs: ON"
            // display only good dogs
    
        }
    
        else if(filterButton.innerHTML = "Filter good dogs: ON"){
            filterButton.innerHTML = "Filter good dogs: OFF"
            // display all good dogs

        }




    })


}


