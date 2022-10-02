import Vimeo from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const videoTimeKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

setVidPlayer();

function setVidPlayer() {
  try {
    if (!localStorage.getItem(videoTimeKey))
      throw 'Previous timer values are not found';
    player.setCurrentTime(JSON.parse(localStorage.getItem(videoTimeKey)));
  } catch (e) {}
}

function onPlay(e) {
  localStorage.setItem(videoTimeKey, `${Math.floor(e.seconds)}`);
}
