document.addEventListener('DOMContentLoaded',function() {
  const setMilliseconds = document.getElementById('milliseconds');
  const setSeconds = document.getElementById('seconds');
  const setMinutes = document.getElementById('minutes');

  const dot = document.getElementById('dot');
  const doubDot = document.getElementById('doubDot');

  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  const resetBtn = document.getElementById('reset');
  const markBtn = document.getElementById('mark');

  const markListEl = document.getElementById('markedList');

  const markMsg = document.getElementById('markMsg');
  const timeId = document.getElementById('timeId');
  const timeMin = document.getElementById('timeMin');
  const timeSec = document.getElementById('timeSec');
  const timeMilliSec = document.getElementById('timeMilliSec');

  markMsg.innerHTML = 'No marks';

  stopBtn.style.display = 'none';
  markBtn.style.display = 'none';
  resetBtn.style.opacity = '50%'
  

  let timeMarks = [];
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let id = 0;
  let interval;

  resetBtn.disabled = 'true';

  const runTimer = () => {
  
    milliseconds++;
    //Milliseconds Section
    if(milliseconds <= 99 ){
      setMilliseconds.innerText = `0${milliseconds}`;
      setMilliseconds.style= 'opacity: 100%';   
      if(milliseconds > 9){
        setMilliseconds.innerText = `${milliseconds}`
      }
    }

    //Seconds Section
    if(milliseconds > 99){
      seconds++;
      milliseconds = 0;
      setSeconds.innerText = `0${seconds}`;
      setSeconds.style= 'opacity: 100%';
      dot.style.opacity = '100%';
      setMilliseconds.innerText = `0${milliseconds}`;

      if(seconds > 9){
      setSeconds.innerText = `${seconds}`; 
      }
    }

    // //Minutes Section
    if(seconds > 59){
      minutes++;
      console.log(minutes);
      setMinutes.innerText = `0${minutes}`;
      setMinutes.style= 'opacity: 100%';

      seconds = 0;
      setSeconds.innerText = `0${seconds}`;
      doubDot.style.opacity = '100%';
      if(minutes > 9){
        setMinutes.innerText = `${minutes}`;
      }
    }
  };

  resetBtn.onclick = () => {
    clearInterval(interval);

    markMsg.innerHTML = 'No marks'

    setMilliseconds.style = 'opacity: 50%'
    setSeconds.style = 'opacity: 50%';
    setMinutes.style = 'opacity: 50%';

    resetBtn.style.opacity = '50%';
    resetBtn.disabled = 'true';
    
    timeId.innerHTML = '';
    timeMin.innerHTML = '';
    timeSec.innerHTML = '';
    timeMilliSec.innerHTML = '';


    dot.style.opacity = '50%';
    doubDot.style.opacity = '50%';

    resetBtn.addEventListener('mouseout', () => {
      resetBtn.style.opacity = '50%'; 
       
    })

    timeMarks = [];
    id = 0;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    let resetMilliseconds = '00';
    let resetSeconds = '00';
    let resetMinutes = '00';

    setMilliseconds.innerText = resetMilliseconds;
    setSeconds.innerText = resetSeconds;
    setMinutes.innerText = resetMinutes;

    console.log(timeMarks)

    return markListEl;

  }

  startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(runTimer, 10);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'flex';
    markBtn.style.display = 'flex';
    resetBtn.style.display = 'none';
  }
  
  stopBtn.onclick = () => {
    clearInterval(interval);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'flex';
    markBtn.style.display = 'none'
    resetBtn.style.display = 'flex';
    resetBtn.style.opacity = '100%';

    resetBtn.addEventListener('mouseover', () => {
      resetBtn.style.transition = '0.2s';;
      resetBtn.style.opacity = '50%';
    })
    resetBtn.addEventListener('mouseout', () => {
      resetBtn.style.opacity = '100%';
    })
    
    if(timeMarks !== 0){
    resetBtn.removeAttribute('disabled')

    }
  }
  
  const markTime = () => {

    id++;
    let newObject = {getId: id, getMinutes: minutes, getSeconds: seconds, getMilliseconds: milliseconds};

    timeMarks.push(newObject);

    id !== 0 ? markMsg.innerHTML = '' : ''; 

    let markedTimeIdElement = document.createElement('p');
    let markedMilliSecElement = document.createElement('p');
    let markedSecElement = document.createElement('p');
    let markedMinElement = document.createElement('p');

    timeId.appendChild(markedTimeIdElement);
    timeMin.appendChild(markedMinElement);
    timeSec.appendChild(markedSecElement);
    timeMilliSec.appendChild(markedMilliSecElement);

    let idT = newObject.getId;
    let milli = newObject.getMilliseconds;
    let sec = newObject.getSeconds;
    let min = newObject.getMinutes;

    // console.log(`${idT}:${min}:${sec}:${milli}`);

    markedTimeIdElement.innerText = `${idT}`;
    if(milliseconds <= 99){
    markedMilliSecElement.innerText = `:0${milli}`;
      if(milliseconds > 9){
        markedMilliSecElement.innerText = `:${milli}`;
      }
    }
    if(seconds <= 9){
      markedSecElement.innerText = `:0${sec}`; 
    }
    if(seconds > 9){
      markedSecElement.innerText = `:${sec}`;
    }
    if(minutes <= 9){
      markedMinElement.innerText = `0${min}`;
      if(minutes > 9){
        markedMinElement.innerText = `${min}`;
      }
    }

    console.log(timeMarks)

  }
  markBtn.onclick = () => {
    markTime()
  }
  
}
)


