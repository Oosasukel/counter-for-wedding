const targetDate = new Date('2024-03-09T00:00:00-03:00');

const updateCounter = () => {
  const now = new Date();
  const difference = targetDate - now;

  const days = padNumber(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = padNumber(
    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = padNumber(
    Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = padNumber(Math.floor((difference % (1000 * 60)) / 1000));
  const milliseconds = padNumber(difference % 1000, 3);

  document.getElementById(
    'counter'
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;

  if (difference <= 0) {
    document.getElementById('counter').innerHTML = "It's here!";
  } else {
    requestAnimationFrame(updateCounter);
  }
};

const padNumber = (number, length = 2) => {
  return String(number).padStart(length, '0');
};

updateCounter();
