import Sounds from "./sounds.js"

export default function timer({
    minutesDisplay,
    secondsDisplay,
    Controls
})
{   
    let pauseTime
    let minutes = minutesDisplay.textContent
    
    function timeDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    
    function reset(){
        timeDisplay(minutes, '0')
        clearTimeout(pauseTime)
    }
    
    function timeDown(){
        pauseTime = setTimeout(()=>{
          let seconds = secondsDisplay.textContent
          let minutes = minutesDisplay.textContent
          
          timeDisplay(minutes, '0')
      
          if(minutes <= 0 && seconds <= 0){
            Controls.reset()
            Sounds().timesOver()
            return
          }
      
          if(seconds <= 0){
            seconds = 60
            
            --minutes
          }
      
          timeDisplay(minutes, String(seconds -1))
      
          timeDown()
        }, 1000)
    }

    function pause(){
      clearTimeout(pauseTime)
    }

    function updateMinutes(newMinutes){
      minutes = newMinutes
    }

    return{
        timeDisplay,
        reset,
        timeDown,
        pause,
        updateMinutes 
    }
}
