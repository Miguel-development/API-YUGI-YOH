
//read JSON

async function readJSON(){
    
    const endPoint = "cardinfo.php";
    const url = `https://db.ygoprodeck.com/api/v7/${endPoint}`;

    const api = await fetch(url);
    const dataJson = (await api.json()).data;
    let i = 0;
    for(let item of dataJson){
        const divMainCardsHTML = document.getElementsByClassName("main-cards")[0];

        const divItemHTML = document.createElement("div");
        divItemHTML.setAttribute("class","card-item");
        
        const divImgHTML = document.createElement("div");
        //divImgHTML.setAttribute("class","img-card");
        //divImgHTML.setAttribute("id","img-id-card");

        const imgHTML = document.createElement("img");
        //imgHTML.setAttribute("class","img-card");
        imgHTML.setAttribute("src",item.card_images[0].image_url_small);
        const divCardInfHTML = document.createElement("div");
        divCardInfHTML.setAttribute("class","card-inf");

        const pNameHTML = document.createElement("p");
        const pRaceHTML = document.createElement("p");
        const pArcheHTML = document.createElement("p");
        const pDescHTML = document.createElement("p");
        
        const pNameTextNodeHTML = document.createTextNode(`Name : ${item.name}`);
        const pRaceTextNodeHTML = document.createTextNode(`Race : ${item.race}`);
        const pArcheTextNodeHTML = document.createTextNode(`Archetype: ${item.archetype}`);
        const pDescTextNodeHTML = document.createTextNode(`Description: ${item.desc}`);

        pNameHTML.setAttribute("class","card-p-item");

        pNameHTML.appendChild(pNameTextNodeHTML);
        pRaceHTML.appendChild(pRaceTextNodeHTML);
        pArcheHTML.appendChild(pArcheTextNodeHTML);
        pDescHTML.appendChild(pDescTextNodeHTML);


        divCardInfHTML.appendChild(pNameHTML);
        divCardInfHTML.appendChild(pRaceHTML);
        divCardInfHTML.appendChild(pArcheHTML);
        divCardInfHTML.appendChild(pDescHTML);
        
        divImgHTML.appendChild(imgHTML);

        divItemHTML.appendChild(divImgHTML);
        divItemHTML.appendChild(divCardInfHTML);

        divMainCardsHTML.appendChild(divItemHTML);
    
        //console.log(item);
        i++;
        if(i>500) break;
    }
}

readJSON();


const d = document;
const divItemHTML = d.getElementsByClassName('card-item');

d.addEventListener("DOMContentLoaded",(e)=>{
    const inputSearch = d.querySelector("#input-search");
    d.addEventListener("click",(ee)=>{
        if(ee.target.id == "btn-search"){
            //console.log(inputSearch.value); 
            Array.from(divItemHTML).forEach((x)=>{
                if(x.getElementsByClassName("card-p-item")[0].textContent.toLowerCase().includes(inputSearch.value.toLowerCase())){
                   // console.log();
                    x.classList.remove("card-item-hide");
                }else{
                    x.classList.add("card-item-hide");
                };
            });
        }
    });

    d.addEventListener("input",(ee)=>{
        if(ee.target.id == "input-search"){
            console.log(ee.target.value);
            Array.from(divItemHTML).forEach((x)=>{
                if(x.getElementsByClassName("card-p-item")[0].textContent.toLowerCase().includes(inputSearch.value.toLowerCase())){
                    //console.log(x);
                    x.classList.remove("card-item-hide");
                }else{
                    x.classList.add("card-item-hide");
                };
            });
        }
    });
    
});