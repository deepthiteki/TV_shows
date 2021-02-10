let q="";
let id= "";
let ccode = "";
let date = "";
//creates textarea and submit button for "search for possible matches"
function inp_for_search() {
    let t = document.createElement('input');
    t.type="text";
    t.id="inp_possible";
    t.placeholder="Enter the name of the show";
    let button = document.getElementById("possible");
    button.appendChild(t);

    let submit = document.createElement('button');
    submit.type = "submit";
    submit.addEventListener('click',search_possible);
    submit.innerHTML="Search";
    button.appendChild(submit);
    
}
//creates textarea and submit button for "search for exact match"
function inp_for_search_exact() {
    let t = document.createElement('input');
    t.type="text";
    t.id="inp_exact";
    t.placeholder="Enter the name of the show";
    let button = document.getElementById("exact");
    button.appendChild(t);

    let submit = document.createElement('button');
    submit.type = "submit";
    submit.addEventListener('click',search_exact);
    submit.innerHTML="Search";
    button.appendChild(submit);
    
}
//fetches and displays possible matches
function search_possible(){
    q = document.getElementById("inp_possible");
    q = q.value;
    
fetch(`http://api.tvmaze.com/search/shows?q=${q}`).then(response => response.json())
.then(data => {
    //console.log(data[0])
    
    for(var i =0;i<data.length;i++){
        console.log(data[i]);
        var img =  document.createElement("img");
    img.src=data[i]["show"]["image"]["original"];
    img.style.height= "100px";
    img.style.width = "100px";
    document.getElementById("results").appendChild(img);

    var genre = document.createElement('p');
    genre.innerHTML=`Genre:${data[i]["show"]["genres"].join(' ')}`;
    document.getElementById("results").appendChild(genre);

    var pre = document.createElement('p');
    pre.innerHTML=`Premiered date:${data[i]["show"]["premiered"]}`;
    document.getElementById("results").appendChild(pre);

    var schedule = document.createElement('p');
    schedule.innerHTL=`Timing:${data[i]["show"]["schedule"]}`;
    document.getElementById("results").appendChild(schedule);

    var country = document.createElement('p');
    country.innerHTML=`Country:${data[i]["show"]["network"]["country"]["code"]}`;
    document.getElementById("results").innerHtml=appendChild(country);
      

    }
}).catch(()=>{});
}

//fetches and displays exact match
function search_exact(){
    q = document.getElementById("inp_exact");
q = q.value;
fetch(`http://api.tvmaze.com/singlesearch/shows?q=${q}`)
.then(response => response.json())
.then(data =>{
    
    
    let img =  document.createElement("img");
    img.src=data.image["original"];
    img.style.height= "100px";
    img.style.width = "100px";
    document.getElementById("results").appendChild(img);

    let genre = document.createElement('p');
    genre.innerHTML=`Genre:${data.genres.join(' ')}`;
    document.getElementById("results").appendChild(genre);

    let pre = document.createElement('p');
    pre.innerHTML=`Premiered date:${data.premiered}`;
    document.getElementById("results").appendChild(pre);

    let schedule = document.createElement('p');
    schedule.innerHTL=`Timing:${data.schedule}`;
    document.getElementById("results").appendChild(schedule);

    let country = document.createElement('p');
    country.innerHTML=`Country:${data.network.country["code"]}`;
    document.getElementById("results").appendChild(country);

    

}).catch(()=>{});}