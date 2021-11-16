
//read JSON

async function readJSON(){
    
    const endPoint = "cardinfo.php";
    const url = `https://db.ygoprodeck.com/api/v7/${endPoint}`;

    const api = await fetch(url);
    const dataJson = (await api.json()).data;
    
    let i = 0;
    for(let x of dataJson){
        console.log(x)
        i++;
        if(i>5) break;
    }
}

//readJSON();