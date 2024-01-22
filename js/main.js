'use strict'
/* window.addEventListener('DOMContentLoaded', () =>{
    
}); */

let dayInput = +document.querySelector('.day__input').value;
    let monthInput = +document.querySelector('.month__input').value;
    let yearInput = +document.querySelector('.year__input').value;
    
    let birthday = `${yearInput}-${monthInput}-${dayInput}`;
    console.log(birthday);  
    
    function yearsPassed (timeBirthday){
        let days, months, years;
        let t = Date.parse(new Date()) - Date.parse(timeBirthday); 
        console.log(t);
 /*   if (t <= 0){
      years = 0;
      months = 0;
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
   }else{ */
        years = Math.floor( t / (12*30*1000 * 60 * 60 * 24));
       /*  months =Mafh.floor( t / (30*1000 * 60 * 60 * 24)),
        days = Math.floor( t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60 ) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60); */
   
            return years;
 /*   return {
      'total': t,
      'years': years,
      'months': months,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
   }   */
}
    
    console.log(yearsPassed (birthday));
    
    document.querySelector('.years__num').innerHTML = yearsPassed (birthday)