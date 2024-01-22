'use strict'
window.addEventListener('DOMContentLoaded', () =>{
   let dayInput = +document.querySelector('.day__input').value;
   let monthInput = +document.querySelector('.month__input').value;
   let yearInput = +document.querySelector('.year__input').value;
   let btnInput = document.querySelector('.btn__input')
   let birthday = '';
   if (monthInput > 0 && monthInput < 10  ){
      birthday = `${yearInput}-0${monthInput}-${dayInput}`;
   }else{
      birthday = `${yearInput}-${monthInput}-${dayInput}`;
   }
   console.log(birthday);  
   console.log(new Date());
   
   document.querySelector('.years__num').innerHTML = '--'
   document.querySelector('.months__num').innerHTML = '--'
   document.querySelector('.days__num').innerHTML = '--'
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
      
      return {
         'total': t,
         'years': years,
         'months': months,
         'days': days     
      }
   }
   btnInput.onclick = function() {
      oldOut(birthday);
   }  
    
});






    
    