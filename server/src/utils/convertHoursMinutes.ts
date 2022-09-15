// hours => 18:00 -- hours with split["18", "00"] => hours map number[18, 00]

 export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number);
  
   const minutesAmount = (hours * 60) + minutes;
 
   return minutesAmount;
 
 }