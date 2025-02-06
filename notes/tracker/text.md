# Let's chip these tunes: an interactive introduction to tracker music

Do you like the sound of NES, Sega, GameBoy, Commodore, ZX Spectrum and so on? Do you want to make music in the style and spirit of vintage video games? This guide will teach you the basics of music making, sound synthesis, beatmaking, and song composition. 

We will start from zero, and in the next three hours or so, you will create a cover of a pop song and even compose a simple song. The guide is software-agnostic; you can transfer things you learn to any platform or tracker software.

If you have questions or problems, or want to share your little creations, please leave a comment. 

## Rock Bottom
The true story of a failed tracker musician.

She was on the brink of discovering something truly special. It turns out that the Music Editor used for many famous video games was actually free! Moreover, it was not something tailored for professional musicians; most people making music with it probably had never gone to a music school.

The download took only a few long moments. Soon, she discovered that this Awesome Music-Making Program comes with lots of examples and a hefty 368-page manual. The interface looked overwhelming, sure, but she managed to play a demo song with it, and it blew her mind. 

(insert example)

The song was made by a regular person, just like her, using a regular PC and this very program. The advertisement did not lie. It was not a program for musicians but for regular computer people. She, too, could make a song. She was eager to make one and immediately created a new file. A couple of hours later, her first "masterpiece" was complete.

(insert example)

She listened to the track she made one more time. The thrill was gone, and all she felt was a shame. She even flipped through the manual's pages only to find words she didn't know. "Portamento"? "Grooves"? "ADPCM"? There was no chapter explaining any of it. There was no chapter on how to make it sound good, either. Resignedly, she decided to exit the program. The computer asked her if she wanted to save the changes before exiting the program. "No, I don't have the talent", she chose.

But it wasn't the talent that she missed. It was the fundamental knowledge.

----

Don't get me wrong. It is possible to make incredible tracker compositions without learning about the basics of the music, just like it is possible to paint a masterpiece without any formal art education. It is even possible that by avoiding formal learning, you could break free from the existing limitations and create music that would sound like nothing before it. But a much more likely outcome is that you will quit music.

The alternative is to try and learn just enough to make a simple but satisfying song and only *then* decide whether you want to discover new sounds by yourself, as a "musical hermit", or to learn more about the world of sound. And it is only one click away.

## Original Sine
Sine and frequencies. Notes.

Have you ever thought what a "sound" is? Ultimately, hearing is one of the human senses, and "sound" is what hearing perceives, but what *is* it?

In human biology (and music, too), "sound" is the perception and the reception of vibration of the air (or water, if you're underwater). A guitar string vibrates, and the air around it vibrates and reaches us, and we hear the sound. A computer's speaker vibrates, and so does the air around it, and, again, that's how we hear the sound.

Vibration is a periodic movement of *something* over time. The simplest kind of vibration in physics can be represented by a sine wave, because a "simple harmonic motion", a periodic motion of an object up and down, mapped over time, will produce a sine. 

[Illustration - an object moves up and down, and its trajectory mapped over time results in a sine.]

The sound of a vibration following a sine wave is simple, and happens to be so fundamental in how humans hear sounds it is called a "pure tone".

[Illustration - a pure tone]

The way things vibrate changes the sound a lot. Imagine (or try!) a rubber band between two of your fingers. What will happen if you try plucking it? It will vibrate, and thus produce a sound. The harder you pluck, the further the band will move from its neutral position. The loudness of the sound will be proportional to the strength of your pluck. This is the "amplitude" of a sound wave, or, simply put, "volume".

[Interactive demo - either a video or a thingy where one can pull the band to make sounds of different amplitudes]

But consider this. If the position of your fingers stays the same, the length and the tension of the rubber band will remain constant, and a certain quality of the sound wave, known as its "pitch", will remain constant as well. This is because the pitch of a sound is mostly determined by the "frequency" of the vibration, and the frequency of the vibration is primarily determined by the length of the rubber band and its internal properties (material, tension, density). If you change the length of the band, it will change the frequency of the vibrations, and the "pitch" quality of the sound will change. The frequency of a note is measured in the number of vibrations per second, or Hertz (1 Hertz = 1 event per second).

[Interactive demo - either a video or a thingy where different frequencies can be tried.]

The pitch of a sound has strong cultural and probably biological roots. Most cultures call sounds caused by fast vibrations "high", and sounds caused by slow vibrations "low". With two sounds, in normal circumstances, most listeners would agree which sound is "higher" and which one is "lower". Of course, there are known exceptions to the pitch perception, but they are irrelevant for the purpose of this guide.

[Interactive demo - two buttons, one plays low pitch sound, one plays high pitch sound]

Thanks to the human ability of pitch perception, it is possible to sort sound sources by pitch. If you have multiple pans and bottles, all different sizes and materials, these can be arranged by the sound they make, from low to high. If you have strings of different lengths and thicknesses, these can be sorted by the pitch they produce, too - that's how you can create a lyra.

[Interactive demo - a virtual lyra]

If you make a musical instrument like that and toy around with it, trying different strings, eventually you are bound to discover an interesting property of sound pitches. A natural phenomenon called the "basic miracle of music", or, simply, an "octave". Let's give it a listen.

[Interactive demo - three buttons, one plays A3, one plays A4 and one plays A5 note]

Some of the sounds played together have a very satisfying ring. It is clear that some of these sounds are lower and some are higher, but simultaneously they sound "same" in some visceral way. The reason for that is the way mammalian brains perceive sounds with frequencies that are multiples of each other. The example above is sounds with frequencies of 220 Hz, 440 Hz and 880 Hz.

Most human cultures accept that pitches of doubling frequencies sound "samey", and most human cultures tend to find multiple pitches between two "samey" frequencies and assign them names. However, the number of subdivisions and the frequency distance between the subdivisions differ from culture to culture. Such pre-defined pitches are called "notes". Folk music commonly defines 4, 5 or 6 notes per subdivision ("per octave"); modern Western pop music uses 7 notes, jazz tends to use 8, and blues 9. 

[Illustration - piano roll with keys labelled]

A famous Western musical instrument called "piano" divides the octave into 12 notes, but this doesn't mean all 12 notes are used for any given song. Instead, in Western pop music, any given song chooses 7 notes out of those 12. Non-Western music these days usually has to adjust the pitches of its notes to fit into piano note subdivision. Piano keys (and notes) are labelled C to B, with some keys labelled "#" (sharp). C# is "higher than C but lower than D". The names of the notes are largely irrelevant, and only make sense for describing different types of music using a Western instrument (i.e. piano or a guitar). Sometimes it makes perfect sense to just re-label some of the keys with numbers.

[Interactive demo - a "piano" that plays Iwato scale, with notes C-D-E♭-G-A♭ numbered as 4-5-6-7-8. It also shows where the notes are on a "regular" piano]

[Interactive demo - a "piano" that plays C major scale, with letters "do-re-mi" etc, and notes shown on a "regular" piano]

[Interactive demo - a "piano" that plays notes 1 to 8 of a D octatonic scale, and notes shown on a regular piano]

There are countless theories about picking the best 7 (or 5, or 8) notes from the 12 notes available in a Western octave. We are going to talk about these later. For now, let's just pick 7 notes that are most easy to play on a piano; these will allow us to form two ways of ordering the pitches: the "C major" scale and the "A minor" scale. The notes are the same, but different keys are numbered differently. Playing the same "1-2-3-2-1,5,1" keys will produce melodies of different qualities. In "C major", that will produce a melody that sounds "optimistic" or "positive" to a Westerner's ear, and in "A minor" the same order of the keys will produce a "melancholic" or "sad" melody. 

[Interactive demo - 1-2-3-2-1,5,1 melody in C major and A minor, as it is seen on a piano roll]


## The Sound Of Music
Music notation. Note duration. Tracker patterns.

## We're Playing In A Rock 'n' Roll Band
Ensemble. Leads, pads, drums and bass.

## All About That Bass
The timbre of a musical instrument. Comparison of different musical instruments.

## We Can Rebuild It, We Have The Technology
Introduction to synthesis. Waveforms. ADSR envelopes.

## March To Your Own Drum
Beatmaking. Programming drum patterns.

## From Discord, Find Harmony
Musical intervals. Chords.

## Running Into The Night
Combining everything together to make a song cover.

## Progress, Not Perfection
Chord progressions. Simple bass accompaniment.

## Words Have Power
Composing melodies using lyrics. A relationship between the melody and the chords in pop music.

## Do It Yourself
Optional: compose your own little song!

## Free Bird
Conclusion and further research recommendations.

