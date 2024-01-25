'use strict'
window.addEventListener('DOMContentLoaded', () =>{
   console.log(new Date());
   let btnInput = document.querySelector('.btn__input');   
   

function r(){
   let dayInput = +document.getElementById('day__input').value;
   let monthInput = +document.getElementById('month__input').value;
   let yearInput = +document.getElementById('year__input').value;
   
   

   let birthday = '';
   
   if(dayInput > 30 && monthInput === 4 || monthInput === 6 || monthInput === 9 || monthInput === 11)  {
      console.log('error');         
      document.querySelector('.day__error').innerHTML = 'Must be a valid date'
      document.querySelector('.day__error').classList.add('red')
      document.querySelector('.h2-day').classList.add('red-title')
      document.querySelector('.years__num').innerHTML = '--'
      document.querySelector('.months__num').innerHTML = '--'
      document.querySelector('.days__num').innerHTML = '--' 
      return
   } 
      if  (dayInput > 29 && monthInput === 2 && (yearInput % 4 === 0 )){
         console.log('error')
         document.querySelector('.day__error').innerHTML = 'Must be a valid date'
         document.querySelector('.day__error').classList.add('red')
         document.querySelector('.h2-day').classList.add('red-title')
         document.querySelector('.years__num').innerHTML = '--'
         document.querySelector('.months__num').innerHTML = '--'
         document.querySelector('.days__num').innerHTML = '--' 
         return
   }  
      if(dayInput > 28 && monthInput == 2 && (yearInput % 4 !== 0 ) ){
         console.log('error')
         document.querySelector('.day__error').innerHTML = 'Must be a valid date'
         document.querySelector('.day__error').classList.add('red')
         document.querySelector('.h2-day').classList.add('red-title')
         document.querySelector('.years__num').innerHTML = '--'
         document.querySelector('.months__num').innerHTML = '--'
         document.querySelector('.days__num').innerHTML = '--'
         return
   }else{           
      birthday = `${yearInput}-${monthInput}-${dayInput}`;
      console.log(dayInput ,monthInput, yearInput, birthday );
   }   
   
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
      }else{document.querySelector('.year__error').innerHTML = '';
      document.querySelector('.h2-year').classList.remove('red-title');
      }
     
      if (isNaN(months) == true){
        document.querySelector('.month__error').innerHTML = 'Must be a valid month';
        document.querySelector('.month__error').classList.add('red');
        document.querySelector('.h2-month').classList.add('red-title');
        document.querySelector('.years__num').innerHTML = '--'
        document.querySelector('.months__num').innerHTML = '--'
        document.querySelector('.days__num').innerHTML = '--'
      }else{document.querySelector('.month__error').innerHTML = '';
      document.querySelector('.h2-month').classList.remove('red-title');
   }
   if (isNaN(days) == true){
      document.querySelector('.day__error').innerHTML = 'Must be a valid day';
      document.querySelector('.day__error').classList.add('red');
      document.querySelector('.h2-day').classList.add('red-title');
      document.querySelector('.years__num').innerHTML = '--'
      document.querySelector('.months__num').innerHTML = '--'
      document.querySelector('.days__num').innerHTML = '--'
    }else{document.querySelector('.day__error').innerHTML = '';
    document.querySelector('.h2-day').classList.remove('red-title');
 }
    
   }
   oldOut(birthday);
   
}
btnInput.onclick = r
}); 