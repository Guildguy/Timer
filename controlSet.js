export default function controls({
    buttonStart,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
})
{
    function start(){
    buttonStart.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    }
  
    function pause(){
    buttonStart.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    }
  
    function reset(){
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStart.classList.remove('hide')
    }
  
    function soundOnConfig(){
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
    }
  
    function soundOffConfig(){
    buttonSoundOff.classList.toggle('hide')
    buttonSoundOn.classList.toggle('hide')
    }

    function getMinutes(){
        let newMinutes = prompt('Selecione o tempo')
        
        if(!newMinutes){
          return false 
        }
        
        return newMinutes 
    }
  
    return{
    pause,
    start,
    reset,
    getMinutes,
    soundOnConfig,
    soundOffConfig}
}
