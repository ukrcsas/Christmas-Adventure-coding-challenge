var wheelEl = document.getElementById('wheel');

function Wheel () {
  this.current = 4;
}

Wheel.prototype.init = function () {
  this.onItem();
}

Wheel.prototype.randomNext = function () {
  return Math.floor(Math.random() * wheelEl.children.length);
}

Wheel.prototype.spin = function (next, itemsPerSecond) {
  var timeout = setTimeout(onItem.bind(this), (1 / itemsPerSecond) * 1000);

  function onItem () {
    // stop if speed is low enough
    if (itemsPerSecond < 1)
      return;

    // spin to next item
    this.current ++;
    if (this.current >= wheelEl.children.length)
      this.current = 0;

    // paint text
    this.onItem();

    // reduce speed
    clearTimeout(timeout);
    itemsPerSecond--;
    timeout = setTimeout(onItem.bind(this), (1 / itemsPerSecond) * 1000);
  }
}

// paints the index of this.current
Wheel.prototype.onItem = function () {
  for (var i = 0 ; i < wheelEl.children.length ; i++)
    wheelEl.children[i].style.color = (i == this.current) ? '#6d4321' : '#000000';
}

var w = new Wheel();
w.init();