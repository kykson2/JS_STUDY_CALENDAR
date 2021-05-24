const table = document.getElementById("js-calendar");

function getToday(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

}

function dayOfTheWeek(){
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    let dayOfTheWeekString = "";
    const dayOfTheWeekArray = [
        " Mon ", 
        " Tue ", 
        " Wed ", 
        " Thu ", 
        " Fri ", 
        " Sat ", 
        " Sun "
    ];
    
    for(var i=0; i<dayOfTheWeekArray.length; i++){
        //let dayOfTheWeekString = "";
        dayOfTheWeekString += `<td>${dayOfTheWeekArray[i]}</td>`
    }
    tr.innerHTML = dayOfTheWeekString;
    // tr.appendChild(td);
    table.appendChild(tr);
    tr.id = "dayOfTheWeek";
}

function changeMonthAndYear(){
    const tr = document.createElement("tr");
    const td_prevBtn = document.createElement("td");
    const td_YM = document.createElement("td");
    const td_postBtn = document.createElement("td");

    const prevBtn = document.createElement("button");
    const postBtn = document.createElement("button");
    
    let yearsAndMonth = " years - month ";
    let yearsAndMonthShow = document.createTextNode(yearsAndMonth);
    prevBtn.innerText = "<";
    postBtn.innerText = ">";
    
    td_prevBtn.appendChild(prevBtn);
    td_YM.appendChild(yearsAndMonthShow);
    td_YM.id = "YM";
    td_postBtn.appendChild(postBtn);
    tr.appendChild(td_prevBtn);
    tr.appendChild(td_YM);
    tr.appendChild(td_postBtn);
    table.appendChild(tr);
    dayOfTheWeek();
}

function init(){
    changeMonthAndYear();
}

init();