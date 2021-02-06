class App{
  constructor() {
    const clockContainer = document.querySelector(".js-clock");
    const clockTitle = clockContainer.querySelector("h2");
    
    setInterval(this.getTime, 1000);
  }
  
  changeTime(time) {
    if (time < 10)
    {
      time = 0 + '' + time;
    }
    return time;
  }
  
  getTime() {
    const date = new Date();
    var minute = date.getMinutes();
    var hour = date.getHours();

    this.hour = this.changeTime(hour);
    this.minute = this.changeTime(minute);

    //clockTitle.innerText = `${hour} : ${minute}`;
  }
  
  setTime() {
    clockTitle.innerText = `${this.hour} : ${this.minute}`;
  }
}



window.onload = () => {
  app = new App();
}

/*

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");




function changeTime(time) {
  if (time < 10)
  {
    time = 0 + '' + time;
  }
  return time;
}

function getTime() {
  const date = new Date();
  var minute = date.getMinutes();
  var hour = date.getHours();

  hour = changeTime(hour);
  minute = changeTime(minute);

  clockTitle.innerText = `${hour} : ${minute}`;
}

function init() {
  getTime();
  timer = setInterval(getTime, 1000);
}

init();
*/
