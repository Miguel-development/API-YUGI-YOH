
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
    
        console.log(item);
        i++;
        if(i>45) break;
    }
}

readJSON();