import controls from "./controlSet.js"
import timer from "./timeSet.js"
import { elements } from "./elements.js"
import Sounds from "./sounds.js"

//---------------------------------------------
const {
  buttonStart,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} = elements

//----------------------------------------------

const sounds = Sounds()

let Controls = controls({
  buttonStart,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
})

let Timer = timer({
  minutesDisplay,
  secondsDisplay,
  Controls
})

//----------------------------------------------

buttonStart.addEventListener('click', ()=>{
  Controls.start()
  Timer.timeDown()
  sounds.btnPress()
})

buttonPause.addEventListener('click', ()=>{
  Controls.pause()
  Timer.pause()
  sounds.btnPress()
})

buttonSet.addEventListener('click', ()=>{
  sounds.btnPress()
  
  let newMinutes = Controls.getMinutes()
  
  if(!newMinutes){
    Timer.reset()
    return
  }
  
  Timer.timeDisplay(newMinutes, '0')
  Timer.updateMinutes(newMinutes)
})

buttonStop.addEventListener('click', ()=>{
   Controls.reset()
   Timer.reset()
   sounds.btnPress()
})

buttonSoundOn.addEventListener('click', ()=>{
  Controls.soundOnConfig()
  sounds.bgSound.play()
  sounds.btnPress()
})

buttonSoundOff.addEventListener('click', ()=>{
  Controls.soundOffConfig()
  sounds.bgSound.pause()
  sounds.btnPress()
})

