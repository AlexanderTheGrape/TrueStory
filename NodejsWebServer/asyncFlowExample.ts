// $ npx tsc asyncFlowExample.ts
// $ node asyncFlowExample.js
function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
}

function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
        console.log(result);
        // requires callback to 'return' result
    });
}

initiate();


// ----------- Asyncronous Control flow -------------

function getSong() {
    var _song:string = "";
    let i = 100;
    setTimeout(function () {
        for (i; i > 0; i -= 1) {
            _song += `${i} beers on the wall, you take one down and pass it around, ${i - 1
                } bottles of beer on the wall\n`;

            if (i === 1) {
                _song += "Hey let's get some more beer";
            }
        }
    }, 0);


    return _song;
}

function singSong(_song) {
    if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
    console.log(_song);
}

const song = getSong();
// this will work
singSong(song);

// -------------- Async Operation Patterns: 1. In Series ------------

// Do the write up & test it now that I've read it
