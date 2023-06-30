# Exploring the Dora

## Part 1

One of the most helpful things in my writing is having no ability to delete paragraphs of text I just typed. Using a typewriter is great for writing, but terrible for converting text into machine-readable format. "Well, let's make a teletype out of a typewriter", I decided. 

This Olivetti Dora 201 seem to be manufactured in 1995. Opening the servicing panel, we can see a fairly simple PCB with just one chip. This is, in fact, a SoC

The chip HD6433502 is not-so-well-known MCU called Renesas/Hitachi H8/3502, which is a part of H8 chip family. This one is 16-bit RISC heavily inspired by PDP-11, coming with on-board ROM and RAM. 
TIL: A very similar H8/300 core is used in LEGO Mindstorms!

According to a rare H8/3502 hardware manual, it is possible to switch the chip into PROM mode, but I couldn't find any information on whether the existing ROM can be erased. 
It is likely possible to dump the existing ROM and connect an external ROM to re-program the chip, but...

It would require de-soldering it from the board, and routing external ROM board, and risking the chip. All of this just to initialize an on-board serial interface. No, thanks.

But it seems that this chip supports a direct keyboard matrix connection...

By the way, disassembling the typewriter is really simple. Two screws in the bottom, one in the platan handle, and a bunch of clips.

Is the keyboard connector just an interface to the matrix? Well, no...

Along with a piece of sticky cork (probably coming from the factory), non-repairable keyboard module has two LEDs. Uh-oh. But otherwise it seems that the keyboard is connected directly to the chip!

Well, if we can't disassemble the keyboard module, let's try to short some pins... 
Aaaand it powers on and tries to type!

So, this is the keyboard matrix I managed to read from the device. As you can see, it follows the keyboard pretty closely.

The row 23 seems to be control symbols for tabs and such. I imagine that modifier keys (shift, mode, code) should be available separately, though.  It's hard to find any manuals to such devices, but Brother ML100 seems to be somewhat related, and I happened to have a manual

Here's what the Brother manual says... Let's see!

Well, the idea seems to be about the same, but no dice - the actual matrix is different. Either way, I think the next step in making this typewriter into a TTY is to buy the ribbon connector slot and design a simple woman-in-the-middle <-> RS-232 board. That's it for now! :)


## part 2

First, it turns out this typewriter is from mid-98. Fresh!
Second, it's easy to disassemble.
The circuit mostly consists of keyboard control and motor control parts.

It's a one-layer PCB, very neat one. It has a slot for LCD, but the LCD isn't connected.

The keyboard's ribbon seems to be end with a carbon connector. We plugged in a more convenient connector on top of it.

The next step is debugging board. This way I can finally find CODE MODE SHIFT and everything else. Lots of fun soldering!

It connects just fine, and even works as expected. Good job.
Note: make sure that wires don't get caught up and torn by the printing head. Been there.

Now onto connecting BitMagic by @1bitsquared
 - and making sure we're capturing all the meaningful signals
 
 As expected, buttons Mode/Code/Shift have their own independent lines. Keyboard polling sends VCC over pins 17-24 in a loop. Pins 6 and 7 seem to be used by display LEDs. Power ON/OFF button is one of the regular buttons.
 
 Two peculiarities:
When printer is booting up/shutting down, it doesn't process the keyboard (makes sense).
Line 17 is more often high than not (why?).
I think now I have enough information to prototype a device to plug in in the middle!

Line 17 mystery: it looks like the keyboard polling is written to go in a loop, with a long delay stuck in the end of the loop iteration.
The keyboard polling cycle requires <6us reaction speed, so my plan to use Arduino Uno failed.

One more peculiarity: instead of using built-in keyboard scanner hardware, the schematic is using a GPIO port. Otherwise, its behaviour is more or less the same as the diagram in the manual

Using AND to latch the output didn't work, because it seems the CPU is expecting to see only Z state or LOW on the pin. @atsukoi_to is building a buffer device on GAL16 as we don't have what we need at home

## part 3

After careful tuning of timings with BitMagic, I managed to print some characters. Input pins are INPUT_PULLUP, and output pins are either switched to Z-state or to LOW.
But as I mentioned, Arduino is too slow, so timings are off, so every now and then it prints wrong characters

Therefore, Atsuko's idea to use buffers is the way to go, especially when the MCUs are kind of slow/imprecise.
Reading the keyboard is much easier, just plug it in and parse the matrix. Debouncing and repeated typing have to be implemented in software, though.

We're thinking to build the interface board around ATMega644 as MCU, MAX232 for interfacing, and two GAL16 for keypad-simulating-buffers. Ports A and B will give the key, Shift/Code/Mode will be served by the port D, and GALs will be connected to the port C. Pin C7 for ON/OFF.

