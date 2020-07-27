import { radioPLayerInit } from './radioPLayer.js';


import { videoPlayerInit } from './videoPLayer.js';


import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');


musicPlayerInit();

radioPLayerInit();

videoPlayerInit();