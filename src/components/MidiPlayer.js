import React from 'react';
import 'html-midi-player';

const Midiplayer = () => {
    return (
        <div>
            <h1>안녕안녕 나는 지수야</h1>

            <script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0"></script>

            <midi-player src="https://magenta.github.io/magenta-js/music/demos/melody.mid" sound-font visualizer="#myVisualizer"></midi-player>
            <midi-visualizer type="piano-roll" id="myVisualizer"></midi-visualizer>
        </div>
    );
}

export default Midiplayer;
