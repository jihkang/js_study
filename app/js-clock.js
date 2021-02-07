
class Clock {
  constructor() {
    const clockContainer = document.querySelector(".js-clock");
    this.clockTitle = clockContainer.querySelector("h1");
  }

  changeTime(time) {
    if (time < 10) {
      time = 0 + "" + time;
    }
    return time;
  }

  getTime() {
    var date = new Date();

    this.minute = date.getMinutes();
    this.hour = date.getHours();
//    this.sec = date.getSeconds();
  }

  setTime() {
    this.minute = this.changeTime(this.minute);
    this.hour = this.changeTime(this.hour);
//    this.sec = this.changeTime(this.sec);

    this.clockTitle.innerText = this.hour + ":" + this.minute;
  }
}

function refresh() {
  clock.getTime();
  clock.setTime();
}

clock = new Clock();
setInterval(refresh, 1000);
