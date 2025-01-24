// This code is NOT great. It is pieced from different components and different styles,
// as it is meant to be disposable, quickly prototypable, so it is OK it uses lots of
// questionable decisions. It is never meant to be a proper tracker.

var MAX_LINES = 63;
var MAX_CH = 7;

var cursor = [0, 0];

var curchan = 0;

var toneWaveform = new Tone.Waveform();

// TODO
// 3. Volume support

var synths = [];
for (i = 0; i <= MAX_CH; i++) {
    synths.push(new Tone.Synth().toDestination())
    synths[i].sustaindur = 0.5;
    synths[i].type = "sine";
    synths[i].oscillator.type = "sine";
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

function save_pattern() {
    state = []

    for (var ch = 0; ch <= MAX_CH; ch++) {
        state.push([]);
        for (var l = 0; l <= MAX_LINES; l++) {
            pitch = document.getElementById(`pat${l}_${ch}`).innerHTML;
            volume = document.getElementById(`pat${l}_${ch}_vol`).innerHTML;
            state[state.length - 1].push([pitch, volume]);
        }
    }

    return btoa(JSON.stringify(state));
}

function load_pattern(state) {
    state = JSON.parse(atob(state));

    for (var ch = 0; ch <= MAX_CH; ch++) {
        for (var l = 0; l <= MAX_LINES; l++) {
            pitch = state[ch][l][0];
            volume = state[ch][l][1];
            document.getElementById(`pat${l}_${ch}`).innerHTML = pitch;
            document.getElementById(`pat${l}_${ch}_vol`).innerHTML = volume;
        }
    }
}



function connect_waveform(chan) {
    synths[chan].connect(toneWaveform);
}

function disconnect_waveform(chan) {
    synths[chan].disconnect(toneWaveform);
}

function map_properties(ch) {
    if (ch == null) {
        ch = curchan;
    }

    document.getElementById("channum").innerHTML = curchan;

    document.getElementById("waveshape").value = synths[curchan].type;

    document.getElementById("attack").value = synths[ch].envelope.attack;
    document.getElementById("at").innerHTML = synths[ch].envelope.attack;

    document.getElementById("decay").value = synths[ch].envelope.decay;
    document.getElementById("de").innerHTML = synths[ch].envelope.decay;

    document.getElementById("sustain").value = synths[ch].envelope.sustain;
    document.getElementById("su").innerHTML = synths[ch].envelope.sustain;

    document.getElementById("release").value = synths[ch].envelope.release;
    document.getElementById("re").innerHTML = synths[ch].envelope.release;

    console.log(synths[ch].sustaindur);

    document.getElementById("duration").value = synths[ch].sustaindur;
    document.getElementById("du").innerHTML = synths[ch].sustaindur;

}

function chanchange(dir) {
    if (dir == 1) { // left
        if (curchan > 0) {
            disconnect_waveform(curchan);
            curchan -= 1;
            map_properties();
            connect_waveform(curchan);
        }
    } else { //right
        if (curchan < MAX_CH) {
            disconnect_waveform(curchan);
            curchan += 1;
            map_properties();
            connect_waveform(curchan);
        }
    }
}

function adj(opt) {
    switch (opt) {
        case 1:
            synths[curchan].envelope.attack = document.getElementById("attack").value;
            break;
        case 2:
            synths[curchan].envelope.decay = document.getElementById("decay").value;
            break;
        case 3:
            synths[curchan].envelope.sustain = document.getElementById("sustain").value;
            break;
        case 4:
            synths[curchan].envelope.release = document.getElementById("release").value;
            break;
        case 5:
            synths[curchan].sustaindur = document.getElementById("duration").value;
            break;
    }
    map_properties(); // update the numeric representation of the value
}

function setshape() {
    newtype = document.getElementById("waveshape").value
    if (synths[curchan].type == "noise") {
        disconnect_waveform(curchan);
        en = synths[curchan].envelope;
        len = synths[curchan].sustaindur;
        synths[curchan] = new Tone.Synth().toDestination();
        synths[curchan].envelope.attack = en.attack;
        synths[curchan].envelope.decay = en.decay;
        synths[curchan].envelope.sustain = en.sustain;
        synths[curchan].envelope.release = en.release;
        synths[curchan].sustaindur = len;
        connect_waveform(curchan);
        synths[curchan].oscillator.type = newtype;
        synths[curchan].type = newtype;
    } else {
        if (newtype != "noise") {
            synths[curchan].oscillator.type = newtype;
            synths[curchan].type = newtype;
        } else {
            disconnect_waveform(curchan);
            en = synths[curchan].envelope;
            len = synths[curchan].sustaindur;
            synths[curchan] = new Tone.MetalSynth().toDestination();
            synths[curchan].envelope.attack = en.attack;
            synths[curchan].envelope.decay = en.decay;
            synths[curchan].envelope.sustain = en.sustain;
            synths[curchan].envelope.release = en.release;
            synths[curchan].sustaindur = len;
            connect_waveform(curchan);
            synths[curchan].type = newtype;
        }
    }
}

function load_patches(state) {
    inst = JSON.parse(atob(state));
    disconnect_waveform(curchan);
    for (var ch = 0; ch <= MAX_CH; ch++) {
        type = inst[ch][0];
        if (type == "noise") {
            synths[ch] = new Tone.MetalSynth().toDestination();
        } else {
            synths[ch] = new Tone.Synth().toDestination();
        }
        synths[ch].type = type;
        synths[ch].envelope.attack = Number(inst[ch][1]);
        synths[ch].envelope.decay = Number(inst[ch][2]);
        synths[ch].envelope.sustain = Number(inst[ch][3]);
        synths[ch].envelope.release = Number(inst[ch][4]);
        synths[ch].sustaindur = Number(inst[ch][5]);
    }
    connect_waveform(curchan);
    map_properties();
}

function save_patches() {
    inst = []
    for (var ch = 0; ch <= MAX_CH; ch++) {
        inst.push([
            synths[ch].type,
            synths[ch].envelope.attack,
            synths[ch].envelope.decay,
            synths[ch].envelope.sustain,
            synths[ch].envelope.release,
            synths[ch].sustaindur
        ])
    }
    return btoa(JSON.stringify(inst))
}

function gen_pattern(with_vol, with_controls) {
    out = ""
    if (with_controls) {
        out += '<div class="chan">\
		<button onclick="chanchange(1)">&lt;</button>\
        <b>Channel <i id="channum">1</i> settings</b>\
        <button onclick="chanchange(2)">&gt;</button><br/>\
        <div id="waveform"></div>\
        <div id="knobs">\
        Shape: <select onchange="setshape()" name="waveshape" id="waveshape">\
          <option value="triangle">Triangle</option>\
          <option value="sine">Sine</option>\
          <option value="square">Square</option>\
          <option value="noise">Complex Noise</option>\
        </select><br/>\
		A: <input type="range" onchange="adj(1)" id="attack" name="attack" min="0" max="2" step="0.01">\
		<i id="at">0.01</i><br/>\
		D: <input type="range" onchange="adj(2)" id="decay" name="decay" min="0" max="2" step="0.01">\
		<i id="de">0.01</i><br/>\
		S: <input type="range" onchange="adj(3)" id="sustain" name="sustain" min="0" max="1" step="0.01">\
		<i id="su">0.01</i><br/>\
		R: <input type="range" onchange="adj(4)" id="release" name="release" min="0" max="5" step="0.04">\
		<i id="re">0.01</i><br/>\
        L: <input type="range" onchange="adj(5)" id="duration" name="duration" min="0" max="2" step="0.01">\
        <i id="du">0.01</i><br/>\
        </div>\
	</div>'
    }


    out += '<div class="patternfield">'
    out += '<div>Octave: <b id="octave">4</b>&nbsp;&nbsp;'
    out += 'BPM: <b id="bpm">120</b></div>'
    out += '<table class="pattern">\
  <tr>\
  	<th>x</th>'

    for (var c = 0; c <= MAX_CH; c++) {
        out += `<th colspan=2>Ch ${c}</th>`
    }
    out += '</tr>'
    for (var i = 0; i < MAX_LINES + 1; i++) {
        out += `<tr id="pat_l${i}">\n`
        line = i.toString().padStart(2, "0")
        out += `<td>${line}</td>`
        for (var c = 0; c <= MAX_CH; c++) {
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
        dur = Number(synths[ch].sustaindur)
        synths[ch].triggerAttackRelease(pitch.toUpperCase() + octave.toString(), dur);
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

var playInterval = [null]; // blerg

function makeSound(ch, wh, vol) {
    if (wh == "...") {
        // nothing
    } else if (wh == "OFF") {
        synths[ch].triggerRelease(now);
    } else {
        dur = Number(synths[ch].sustaindur)
        synths[ch].triggerAttackRelease(wh.replace("-", ""), dur);
    }

}

function playTimer() {
    highlight_line(cursor[0]);
    const l = cursor[0];
    setTimeout(function() {
        unhighlight_line(l);
    }, 15000 / bpm);
    for (var ch = 0; ch <= MAX_CH; ch++) {
        makeSound(ch, document.getElementById(`pat${l}_${ch}`).innerHTML, null)
    }
    cursor[0] += 1;
    if (cursor[0] > MAX_LINES) cursor[0] = 0;
}

function play_or_stop() {
    const now = Tone.now();
    if (playing) {
        if (playInterval[0]) clearInterval(playInterval[0]);
        for (var i = 0; i <= MAX_CH; i++) synths[i].triggerRelease(now);
        unhighlight_line(cursor[0]);
        highlight(cursor[0], cursor[1]);
        playing = false;
    } else {
        playInterval[0] = setInterval(playTimer, 15000 / bpm);
        unhighlight(cursor[0], cursor[1]);
        playing = true;
    }
}

function main(with_vol, with_controls) {

    document.write(gen_pattern(with_vol, with_controls))
    waveform({
        tone: toneWaveform,
        parent: document.querySelector("#waveform"),
    });

    map_properties();
    connect_waveform(curchan);

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
                    event.preventDefault(); // stop space to scroll!
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