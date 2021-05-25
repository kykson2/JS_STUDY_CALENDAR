const table = document.getElementById("js-calendar");

// function lastMonth(event){
//     event.preventDefault();
//     const today = new Date();
//     let year = today.getFullYear();
//     let month = today.getMonth()+1;
//     if(month===0){
//         month = 12;
//         year -= 1;
//     } else{
//         month -= 1;
//     }
//     console.log(month);
//     thisDays(year,month);
// }

// 요일에 맞게 날짜 입력
function thisDays(year, month){    
    const showDays = document.getElementById("js-days");
    let prevLastDate = new Date(year, month-1, 0).getDate(); // 지난달 마지막 날짜
    let thisLastDate = new Date(year, month, 0).getDate(); // 이번달 마지막 날짜
    
    // let prevLastDay = new Date(year, month-1, 0).getDay(); // 지난달 마지막 요일
    let thisFirstDay = new Date(`${month}, 1, ${year}`).getDay(); // 이번달 1일의 요일
    let subDate = (prevLastDate-thisFirstDay)+1// 이번달 첫째 주 빈곳에 채울 지난달 날짜 중 첫번째
    let subDateDay = new Date(`${month-1}, ${subDate}, ${year}`).getDay();// 적기 시작할 날짜의 요일
    let count = 1; // 1일 부터 이번달 마지막 날까지 올라가는 변수
    
    var row = showDays.insertRow(showDays.rows.length);
    
    if(thisFirstDay!=0) { // 이번달 첫째날이 일요일이 아닐 때
        for(subDateDay;subDateDay<thisFirstDay;subDateDay++){
            row.insertCell(subDateDay).innerText = subDate;
            subDate++;           
        }
        while(count <= thisLastDate){
            let countDay = new Date(`${month}, ${count}, ${year}`).getDay(); // 적는 날짜의 요일
            if(countDay==6){
                row.insertCell(countDay).innerText = count;
                count++;
                var row = showDays.insertRow(showDays.rows.length);
            }
            else if(countDay!=6){
                row.insertCell(countDay).innerText = count;
                count++;
            }
        }
        count = 1;
    } else if(thisFirstDay===0){
        while(count <= thisLastDate){
            let countDay = new Date(`${month}, ${count}, ${year}`).getDay(); // 적는 날짜의 요일
            if(countDay==6){
                row.insertCell(countDay).innerText = count;
                count++;
                var row = showDays.insertRow(showDays.rows.length);
            }
            else if(countDay!=6){
                row.insertCell(countDay).innerText = count;
                count++;
            }
        }
    }
}

function showYM(){
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;

    let yearsAndMonth = `${year}年 - ${month}月`;
    // thisDays(year, month);
    return yearsAndMonth;
}

function getToday(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    thisDays(year, month); // 이번달 날짜 불러오는 함수
}

function dayOfTheWeek(){
    const tr = document.createElement("tr");
    // const td = document.createElement("td");
    let dayOfTheWeekString = "";
    const dayOfTheWeekArray = [
        " Sun ",
        " Mon ", 
        " Tue ", 
        " Wed ", 
        " Thu ", 
        " Fri ", 
        " Sat ", 
    ];
    
    for(var i=0; i<dayOfTheWeekArray.length; i++){
        dayOfTheWeekString += `<td>${dayOfTheWeekArray[i]}</td>`
    }
    tr.innerHTML = dayOfTheWeekString;
    // tr.appendChild(td);
    table.appendChild(tr);
    tr.id = "dayOfTheWeek";
}

function changeMonthAndYear(){
    let yearMonth = new showYM();
    const tr = document.createElement("tr");
    const td_prevBtn = document.createElement("td");
    const td_YM = document.createElement("td");
    const td_postBtn = document.createElement("td");

    const prevBtn = document.createElement("button");
    const postBtn = document.createElement("button");
    
    
    prevBtn.innerText = "<";
    postBtn.innerText = ">";
    
    td_prevBtn.appendChild(prevBtn);
    //prevBtn.addEventListener("click",lastMonth);
    td_YM.appendChild(document.createTextNode(showYM()));
    td_YM.id = "YM";
    td_postBtn.appendChild(postBtn);
    tr.appendChild(td_prevBtn);
    tr.appendChild(td_YM);
    tr.appendChild(td_postBtn);
    tr.id = "changeYM";
    table.appendChild(tr);
    dayOfTheWeek();
    getToday();
}

function init(){
    changeMonthAndYear();
}

init();