'use strict'
window.addEventListener('DOMContentLoaded', () =>{
   console.log(new Date());
   let btnInput = document.querySelector('.btn__input');     

function r(){
   let dayInput = +document.getElementById('day__input').value;
   let monthInput = +document.getElementById('month__input').value;
   let yearInput = +document.getElementById('year__input').value;   

   let birthday = '';

   birthday = `${yearInput}-${monthInput}-${dayInput}`;
   console.log(dayInput ,monthInput, yearInput, birthday );

   function errorDay () {
         document.querySelector('.day__error').innerHTML = 'Must be a valid date'
         document.querySelector('.day__error').classList.add('red')
         document.querySelector('.h2-day').classList.add('red-title')
         document.querySelector('.years__num').innerHTML = '--'
         document.querySelector('.months__num').innerHTML = '--'
         document.querySelector('.days__num').innerHTML = '--' 
   }

   function errorDayRemove () {
      document.querySelector('.day__error').innerHTML = '';
      document.querySelector('.h2-day').classList.remove('red-title');
      document.querySelector('.day__error').classList.remove('red');
   }
      
      if  (dayInput > 29 && monthInput === 2 && (yearInput % 4 === 0 )){
         errorDay ()
         return birthday = '';
   } else{
      
   }; 
      if(dayInput > 28 && monthInput == 2 && (yearInput % 4 !== 0 ) ){
         errorDay ()
         return birthday = '';
   } else{
      errorDayRemove ()
   };
   if(dayInput === 31 &&  monthInput === 4  ) {
      errorDay ()
      return birthday = '';
   } else{
      errorDayRemove ()
   };  
    if(dayInput === 31 &&   monthInput === 6  ) {
      errorDay () 
      return birthday = '';
   } else{
      errorDayRemove ()
   }; 
    if(dayInput === 31 &&   monthInput === 9 ) {
      errorDay () 
      return birthday = '';
   } else{
      errorDayRemove ()
   };  
    if(dayInput === 31 &&   monthInput === 11 ) {
      errorDay () 
      return birthday = '';
   } else{
      errorDayRemove ()
   }; 
      
   
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
        document.querySelector('.year__error').classList.add('red');
        document.querySelector('.h2-year').classList.add('red-title');
        document.querySelector('.years__num').innerHTML = '--'
        document.querySelector('.months__num').innerHTML = '--'
        document.querySelector('.days__num').innerHTML = '--'        
      }else{
      document.querySelector('.year__error').innerHTML = '';
      document.querySelector('.h2-year').classList.remove('red-title');
      document.querySelector('.year__error').classList.remove('red');
      };
     
      if (isNaN(months) == true){
        document.querySelector('.month__error').innerHTML = 'Must be a valid month';
        document.querySelector('.month__error').classList.add('red');
        document.querySelector('.h2-month').classList.add('red-title');
        document.querySelector('.years__num').innerHTML = '--'
        document.querySelector('.months__num').innerHTML = '--'
        document.querySelector('.days__num').innerHTML = '--'
        
      }else{
      document.querySelector('.month__error').innerHTML = '';
      document.querySelector('.h2-month').classList.remove('red-title');
      document.querySelector('.month__error').classList.remove('red');
   };
   if (isNaN(days) == true){
      errorDay ()
      return
    }else{
      errorDayRemove ()
 };  
   
    
   }
   oldOut(birthday);
   
}
btnInput.onclick = r
}); 