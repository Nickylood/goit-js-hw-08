import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const STORAGE_TIME = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}) {
    localStorage.setItem(STORAGE_TIME, seconds)
}



function updateTime() {
    const currentTime = localStorage.getItem(STORAGE_TIME)
    if (currentTime) {
        player.setCurrentTime(currentTime)
    }
    
}
updateTime()