const getSleepHours = day => {
    switch (day) {
     case 'Monday':
       return 8
       break;
     case 'Tuesday':
       return 7
       break;
     case 'Wednesday':
       return 8
       break;
     case 'Thursday':
       return 6
       break;
     case 'Friday':
       return 10
       break;
     case 'Saturday':
       return 9
       break;
     case 'Sunday':
       return 7
       break;
     default:
     return 'Error!'
   
    } 
   };
   
   const getActualSleepHours = () => 
     getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
   
   const getIdealSleepHours = () => {
     const idealHours = 8;
     return idealHours * 7;
   };
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours ();
     const idealSleepHours = getIdealSleepHours();
   
     if (actualSleepHours === idealSleepHours) {
       console.log ('You\'ve got a perfect amount of sleep');
     } else if (actualSleepHours > idealSleepHours) {
       console.log ('You\'ve got ' + (idealSleepHours - actualSleepHours) +  'more hours of sleep this week');
     } else if(actualSleepHours < idealSleepHours) {
       console.log ('You should get some rest because you\'ve slept ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you should have this week ');
     } else {
       console.log ('Error! Something went wrong');
     }
   }
   
   calculateSleepDebt();