// Set the launch date (Year, Month (0-11), Day, Hour, Minute, Second)
const launchDate = new Date(2024, 5, 30, 10, 0, 0);

function updateCountdown() {
  const currentDate = new Date();
  const difference = launchDate - currentDate;

  if (difference <= 0) {
    document.getElementById('countdown').innerHTML = 'Launch time!';
  } else {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
      <div>${days} <span>days </span>${hours} <span>hours </span>${minutes} <span>minutes </span>${seconds} <span>seconds </span></div>`;
  }
}

// Initial call
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

// JavaScript for movement effect
document.addEventListener('mousemove', function(e) {
  let moveX = (e.pageX * -1 / 12);
  let moveY = (e.pageY * -1 / 12);
  this.querySelector('header').style.backgroundPosition = moveX + 'px ' + moveY + 'px';
});
