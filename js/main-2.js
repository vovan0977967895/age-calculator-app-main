'use strict'
window.addEventListener('DOMContentLoaded', () =>{
   console.log('Hello');
   console.log(new Date());

   let btnInput = document.querySelector('.btn__input');   
   document.querySelector('.years__num').innerHTML = '--'
   document.querySelector('.months__num').innerHTML = '--'
   document.querySelector('.days__num').innerHTML = '--'

function r(){
   let dayInput = +document.getElementById('day__input').value;
   let monthInput = +document.getElementById('month__input').value;
   let yearInput = +document.getElementById('year__input').value;
   if (dayInput < 1 && dayInput >31){
    document.querySelector('.day__error').innerHTML = 566
   }
   let birthday = '';
   birthday = `${yearInput}-${monthInput}-${dayInput}`;
   console.log(dayInput ,monthInput, yearInput, birthday );
   
   
   function oldOut (input){
      let days = 0;
      let months = 0;
      let years = 0;
      const t = Date.parse(new Date()) - Date.parse(input); 
      console.log(t);
      years = Math.floor( t / (365.25 * 1000 * 60 * 60 * 24)),
      months = Math.floor((t - (365.25 * 1000 * 60 * 60 * 24) * years) / (3600*1000*24*(365.25/12))),
      days = Math.floor((((t - (365.25 * 1000 * 60 * 60 * 24) * years)) - months*(3600*1000*24*(365.25/12))) /(3600*1000*24)), 
         
      document.querySelector('.years__num').innerHTML = years
      document.querySelector('.months__num').innerHTML = months
      document.querySelector('.days__num').innerHTML = days
      console.log(years);
      console.log(months);
      console.log(days);
      if(t < 0){
        document.querySelector('.year__error').innerHTML = 'Must be in the past';
        document.querySelector('.years__num').innerHTML = '--'
        
      }else{document.querySelector('.year__error').innerHTML = '';
      }
      if (months === NaN){
        document.querySelector('.month__error').innerHTML = 'Must be in the past';
      }
    
   }
   oldOut(birthday);
   
}
btnInput.onclick = r
}); 