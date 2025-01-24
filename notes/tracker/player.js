const MAX_LINES = 63;
const MAX_CH = 7;

var cursor = [0, 0];

// TODO
// 1. UI to control/tweak channels
// 2. UI to change channel type - Synth, MembraneSynth and MetalSynth
// 3. Volume support

var synths = [];
for (i = 0; i < MAX_CH + 1; i++) {
    synths.push(new Tone.Synth().toDestination())
}

document.addEventListener("click", function(e) {
    if (!playing) {
        id = e.target.id;
        if (id.startsWith("pat")) {
            idx = id.substr(3, ).split("_");
            unhighlight(cursor[0], cursor[1]);
            cursor[0] = Number(idx[0]);
            cursor[1] = Number(idx[1]);
            highlight(cursor[0], cursor[1], true);
        }
    }
})

function gen_pattern(with_vol, with_controls) {
    out = ""
    if (with_controls) {
        out += '<p class="chan">\
		<b>Channel 1</b><br/>\
		A: <input type="range" id="attack" name="attack" min="0" max="2" step="0.01">\
		<i id="at">0.01</i><br/>\
		D: <input type="range" id="decay" name="decay" min="0" max="2" step="0.01">\
		<i id="de">0.01</i><br/>\
		S: <input type="range" id="sustain" name="sustain" min="0" max="2" step="0.01">\
		<i id="su">0.01</i><br/>\
		R: <input type="range" id="release" name="release" min="0" max="5" step="0.04">\
		<i id="re">0.01</i><br/>\
	</p>'
    }


    out += '<div class="patternfield">'
    out += '<div>Octave: <b id="octave">4</b>&nbsp;&nbsp;'
    out += 'BPM: <b id="bpm">120</b></div>'
    out += '<table class="pattern">\
  <tr>\
  	<th>x</th>'

    for (var c = 0; c < MAX_CH + 1; c++) {
        out += `<th colspan=2>Ch ${c}</th>`
    }
    out += '</tr>'
    for (var i = 0; i < MAX_LINES + 1; i++) {
        out += `<tr id="pat_l${i}">\n`
        line = i.toString().padStart(2, "0")
        out += `<td>${line}</td>`
        for (var c = 0; c < MAX_CH + 1; c++) {
            out += `<td id="pat${i}_${c}">...</td>`
            if (with_vol) {
                out += `<td id="pat${i}_${c}_vol">..</td>`
            } else {
                out += `<td id="pat${i}_${c}_vol">  </td>`
            }
        }
        out += "</tr>\n"
    }
    out += "</table>"

    return out;
}

function highlight(l, ch, mouse) {
    document.getElementById(`pat${l}_${ch}`).style.backgroundColor = "#77f";
    if (!mouse) {
        document.getElementById(`pat${l}_${ch}`).scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function unhighlight(l, ch) {
    if (l % 2) {
        c = "#ddd"
    } else {
        c = "#c2c2c2"
    };
    document.getElementById(`pat${l}_${ch}`).style.backgroundColor = c;
}

function highlight_line(l) {
    document.getElementById(`pat_l${l}`).style.backgroundColor = "#77f";
    document.getElementById(`pat_l${l}`).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function unhighlight_line(l) {
    if (l % 2) {
        c = "#ddd"
    } else {
        c = "#c2c2c2"
    };
    document.getElementById(`pat_l${l}`).style.backgroundColor = c;
}



function put_note(l, ch, pitch) {
    if (pitch == null) {
        document.getElementById(`pat${l}_${ch}`).innerHTML = "...";
    } else if (pitch == "off") {
        document.getElementById(`pat${l}_${ch}`).innerHTML = "OFF";
    } else {
        document.getElementById(`pat${l}_${ch}`).innerHTML = pitch.toUpperCase().padEnd(2, "-") + octave.toString();
        synths[ch].triggerAttackRelease(pitch.toUpperCase() + octave.toString(), "0.5");
    }
}

var octave = 4;
var bpm = 120;

var notes = {
    "q": "C",
    "y": "C",
    "z": "C",
    "s": "C#",
    "x": "D",
    "d": "D#",
    "c": "E",
    "v": "F",
    "g": "F#",
    "b": "G",
    "h": "G#",
    "n": "A",
    "j": "A#",
    "m": "B",
    " ": "off",
}

function update_octave(octave) {
    document.getElementById("octave").innerHTML = octave;
}

function update_bpm(bpm) {
    document.getElementById("bpm").innerHTML = bpm;
}

playing = false;

var playInterval = [null]; //tood

function makeSound(ch, wh, vol) {
    const now = Tone.now();
    if (wh == "...") {
        // nothing
    } else if (wh == "OFF") {
        synths[ch].triggerRelease(now);
    } else {

        synths[ch].triggerAttack(wh.replace("-", ""), now);
    }

}

function playTimer() {
    highlight_line(cursor[0]);
    const l = cursor[0];
    setTimeout(function() {
        unhighlight_line(l);
    }, 15000 / bpm);
    for (var ch = 0; ch < MAX_CH + 1; ch++) {
        makeSound(ch, document.getElementById(`pat${l}_${ch}`).innerHTML, null)
    }
    cursor[0] += 1;
    if (cursor[0] > MAX_LINES) cursor[0] = 0;
}

function play_or_stop() {
    const now = Tone.now();
    if (playing) {
        if (playInterval[0]) clearInterval(playInterval[0]);
        for (var i = 0; i < MAX_CH + 1; i++) synths[i].triggerRelease(now);
        unhighlight_line(cursor[0]);
        highlight(cursor[0], cursor[1]);
        playing = false;
    } else {
        playInterval[0] = setInterval(playTimer, 15000 / bpm);
        unhighlight(cursor[0], cursor[1]);
        playing = true;
    }
}

function activate(with_vol, with_controls) {

    document.write(gen_pattern(with_vol, with_controls))

    highlight(cursor[0], cursor[1]);

    document.addEventListener('keydown', function(event) {
        if (!playing) {
            if (event.keyCode == 37) {
                unhighlight(cursor[0], cursor[1]);
                cursor[1] -= 1;
                if (cursor[1] < 0) {
                    cursor[1] = 0
                };
                highlight(cursor[0], cursor[1]);
            } else if (event.keyCode == 40) {
                event.preventDefault();
                unhighlight(cursor[0], cursor[1]);
                cursor[0] += 1;
                if (cursor[0] > MAX_LINES) {
                    cursor[0] = MAX_LINES
                };
                highlight(cursor[0], cursor[1]);
            } else if (event.keyCode == 39) {
                unhighlight(cursor[0], cursor[1]);
                cursor[1] += 1;
                if (cursor[1] > MAX_CH) {
                    cursor[1] = MAX_CH
                };
                highlight(cursor[0], cursor[1]);
            } else if (event.keyCode == 38) {
                event.preventDefault();
                unhighlight(cursor[0], cursor[1]);
                cursor[0] -= 1;
                if (cursor[0] < 0) {
                    cursor[0] = 0
                };
                highlight(cursor[0], cursor[1]);
            } else if (event.keyCode == 8) { //backspace
                put_note(cursor[0], cursor[1], null);
                unhighlight(cursor[0], cursor[1]);
                cursor[0] -= 1;
                if (cursor[0] < 0) {
                    cursor[0] = 0
                };
                highlight(cursor[0], cursor[1]);
            } else if (event.keyCode == 46) { //delete
                put_note(cursor[0], cursor[1], null);
            } else if (event.key == "<") { //octave down
                if (octave > 1) {
                    octave -= 1;
                    update_octave(octave);
                }
            } else if (event.key == ">") { //octave up
                if (octave < 7) {
                    octave += 1;
                    update_octave(octave);
                }
            } else if (event.key == "_") { //bpm down
                if (bpm > 60) {
                    bpm -= 5;
                    update_bpm(bpm);
                }
            } else if (event.key == "+") { //bpm up
                if (bpm < 200) {
                    bpm += 5;
                    update_bpm(bpm);
                }
            } else if (event.key == "Home") { // To the beginning
                unhighlight(cursor[0], cursor[1]);
                cursor[0] = 0;
                cursor[1] = 0;
                highlight(cursor[0], cursor[1]);
            } else if (event.key == "Enter") { //gooo! or stop
                play_or_stop();
            } else {
                if (event.key.toLowerCase() in notes) {
                    put_note(cursor[0], cursor[1], notes[event.key.toLowerCase()])
                    unhighlight(cursor[0], cursor[1]);
                    if (cursor[0] < MAX_LINES) cursor[0] += 1;
                    highlight(cursor[0], cursor[1]);
                }
            }
        } else {
            if (event.key == "Enter") { //gooo! or stop
                play_or_stop();
            }
        }
    });

}

function play() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    // trigger the attack immediately
    synth.triggerAttack("C4", now);
    synth.triggerRelease(now + 1);
}