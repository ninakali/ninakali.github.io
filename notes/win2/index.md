<div class="post">

# Windows 2: Final Fantasy of operating systems

It is common knowledge that Final Fantasy could have been the last game in the series. It is far less known that Windows 2, released around the same time, could too have been the last. If anything, things were more certain: even Microsoft believed that Windows 2 would be the last.

![](win2live/00_iroke.png)
<p class="imgdesc">PC Paintbrush and MS Excel were some of the most successful programs for Windows 2.</p>

The miracle of overwhelming commercial success brought incredible attention to Windows. The retro community and computer historians generally seem to be interested in the legendary origins of the system (how it all began) or in its turnabout Windows 3.0 release (what did they do right?). 

This story instead will be about the underdog of Windows, version 2. To understand where it all went wrong, we must start looking at events that happened even before Microsoft was founded. By necessity, I will talk a lot about Windows 1, too. Instead of following interpersonal/corporate drama, I will try to focus on the technical aspects of Windows and its competitors, as well as the technological limitations of the computers around the time. It is going to be quite a journey, and it might seem a bit random, but I promise that eventually, it all will start making sense.

Let's start with some hands-on Windows 2 experience to tempt you to read the full story!

</div>

<hr/><hr/><hr/>

<div class="post">

## Living with Windows 2
Let's get a time machine, and teleport to the 27th of December 1989 or so.

![win2live/01_xls.png](win2live/01_xls.png)
<p class="imgdesc">Most people would experience Windows 2 through a version shipped with Microsoft Excel. It can calculate stonks and plot charts. What else do you need?</p>

### Standard applications
Due to a number of reasons, standard Windows 2 applications are almost exactly the same as Windows 1 applications.

![win2live/02_executive.png](win2live/02_executive.png)
<p class="imgdesc">MS-DOS Executive is sort of a file manager for Windows that is used to start programs.</p>

![win2live/03_notepad.png](win2live/03_notepad.png)
<p class="imgdesc">Notepad is as unassuming as ever. No Copilot yet. Note how minimized applications are represented by an icon on a desktop. This used to be a common idea across many contemporary systems.</p>

![win2live/04_wricalc.png](win2live/04_wricalc.png)
<p class="imgdesc">Calculator is very minimalistic. Write is clearly Microsoft's response to Apple's MacWrite.</p>

![win2live/05_paint.png](win2live/05_paint.png)
<p class="imgdesc">Paint is similar to MacPaint, too. It is monochrome, and it looks exactly like Paint in Windows 1, but uses a different file format (?!).</p>

![win2live/06a_open.png](win2live/06a_open.png)
<p class="imgdesc">There is no proper Open file dialog. It was implemented as a part of CommDlg in Windows 3.1.</p>

![win2live/06b_save.png](win2live/06b_save.png)
<p class="imgdesc">It's Wild West of modal windows, folks! Also, I wonder what "Microsoft Word format" they mean; there were at least Word For Dos and Word For Mac at this point.</p>

![win2live/07_calcard.png](win2live/07_calcard.png)
<p class="imgdesc">Calendar and Cardfile are more useful than they might seem.</p>

![win2live/08_control.png](win2live/08_control.png)
<p class="imgdesc">Control panel allows to create your own Hot Dog Stand interface, if you want.</p>

![win2live/09_terminal.png](win2live/09_terminal.png)
<p class="imgdesc">The networking tools in Windows 2.0 are basically non-existent. The terminal tool is beyond basic.</p>

![win2live/10_reversi.png](win2live/10_reversi.png)
<p class="imgdesc">Built-in entertainment is represented by an intellectual game of reversi. You need 3.0 for Solitaire, 3.1 for Minesweeper, and WfW for Hearts.</p>


### Additional software
The list is non-exhaustive, and even misses some major pieces of software (Corel DRAW!, for example). This is more to illustrate that Windows 2 had *some* useful apps.

![win2live/11_word.png](win2live/11_word.png)
<p class="imgdesc">Back in the 80s, Microsoft's office apps were much more popular on Mac than on PC. Maybe that's because Word for DOS was really ugly. It took Microsoft years to bring graphical Word on the PC, and you're witnessing it.</p>

![win2live/12_msproj2.png](win2live/12_msproj2.png)
<p class="imgdesc">Perhaps this is why Microsoft made Project? To release their software in time.</p>

![win2live/13_devtools.png](win2live/13_devtools.png)
<p class="imgdesc">Windows 2 SDK is shipped with a few neat tools for software developers. It is not quite Visual C yet, but it is not not visual.</p>

![win2live/14_aldus.png](win2live/14_aldus.png)
<p class="imgdesc">Aldus Pagemaker was one of the first programs to release for Windows. Some video cards supported screens as large as 1024x768 in 256 colours, which is pretty darn good for typesetting. Pagemaker 3 could use much more RAM than Pagemaker 1, and is actually quite usable.</p>

![win2live/15_ai.png](win2live/15_ai.png)
<p class="imgdesc">Adobe Illustrator does not require an account just yet; there is no generative AI in it either.</p>

![win2live/16_ai2.png](win2live/16_ai2.png)
<p class="imgdesc">It is quite basic as far as vector editors go, but it has CMYK and PostScript support.</p>

![win2live/17_xeroxp.png](win2live/17_xeroxp.png)
<p class="imgdesc">Xerox Presents is a PowerPoint-style app. There was no PowerPoint for Windows just yet, as Microsoft has just bought the company that made it.</p>

![win2live/18_xeroxp2.png](win2live/18_xeroxp2.png)
<p class="imgdesc">Xerox Presents comes with some nifty vector clipart, and even supports vector scalable fonts.</p>

![win2live/19_clearview.png](win2live/19_clearview.png)
<p class="imgdesc">It is quite obvious that MS-DOS Executive is not a great way to start programs. There were many alternatives, and Clearview was one of the more advanced ones.</p>

![win2live/20_wam.png](win2live/20_wam.png)
<p class="imgdesc">Windows Application Manager aims to solve the same problem, but cheaper.</p>

![win2live/21_paint_dan.png](win2live/21_paint_dan.png)
<p class="imgdesc">ZSoft Paintbrush is a bit of a pain to use on Windows, because Windows only supports 8 colours in VGA mode. But it looks just like Microsoft Paintbrush from Windows 3.0.</p>

![win2live/22_paint_yaga.png](win2live/22_paint_yaga.png)
<p class="imgdesc">That's right! Because Microsoft has licensed ZSoft Paintbrush for its MS Mouse and MS Windows. Also. you can tell that I just needed an excuse to add two screenshots of the program...</p>

![win2live/23_xvtdraw.png](win2live/23_xvtdraw.png)
<p class="imgdesc">XVT Draw is a shareware vector editor. It feels much faster than Illustrator or DRAW!</p>

![win2live/24_opusmidi.png](win2live/24_opusmidi.png)
<p class="imgdesc">Opus Composer, also known as WinSong, was made for Windows 1, but it is slightly more useable on Windows 2. It supposed to support MIDI.</p>

![win2live/25_opustape.png](win2live/25_opustape.png)
<p class="imgdesc">Opus Tapedeck is a counterpart for Opus Composer that works just as a player utility.</p>

![win2live/26_packrat.png](win2live/26_packrat.png)
<p class="imgdesc">The genre of desktop organisers seemed to be popular. This is Packrat. Another popular PIM for Windows 2 was IBM Current.</p>

![win2live/27_casette.png](win2live/27_casette.png)
<p class="imgdesc">CaseLiner is a tool for generating liners for your mixtapes.</p>

![win2live/28_comm.png](win2live/28_comm.png)
<p class="imgdesc">Comprog brings networking on Windows 2.0 to the next level: now you can connect to BBSes and download files.</p>

### Entertainment
There weren't many games for Windows 2, but there were some.

![win2live/29_chessnet.png](win2live/29_chessnet.png)
<p class="imgdesc">ChessNet allows you to play chess over modem. It's much faster than chess over email!</p>

![win2live/30_solitaire.png](win2live/30_solitaire.png)
<p class="imgdesc">Remember I told you there is no Solitaire for Windows 2? Turns out, I lied! There is a shareware version that looks nothing like MS Solitaire but still as fun to play.</p>

![win2live/31_backg.png](win2live/31_backg.png)
<p class="imgdesc">Backgammon has a case of a quirky interface. It's likely going to work just fine in Windows 1, too.</p>

![win2live/32_xword.png](win2live/32_xword.png)
<p class="imgdesc">Crosswords are fun. Don't you like crosswords? Crosswords!</p>

![win2live/33_starba.png](win2live/33_starba.png)
<p class="imgdesc">Starbase is probably the only example of an <em>action</em> game for Windows 2. Someone tries to bomb your star base! It is hectic and very violent.</p>

![win2live/34_taipei.png](win2live/34_taipei.png)
<p class="imgdesc">Taipei is very pretty, and this is why I put it at the end.</p>

</div>

<hr/><hr/><hr/>

<div class="post">

Now, I hope, you are ready for the history tour? I had to start *somewhere*, and The mother of all demos seemed as good place as any. Many of you might already know about some background things I am going to mention, so I hid all the things that were not directly related to Windows under the dropdowns.

</div>

<div class="post">


## 1968-12 "The mother of all demos"

![](history/01_mother.png)

<details> 
  <summary>"The mother of all demos" combines graphic displays, computer mouses, windows, and much more</summary><div class="cut">

It has been a few decades since the invention of electronic computers, but they are still so costly only some businesses can afford one. Most people cannot even begin to imagine what they would do with one. A group of scientists tries to imagine what could be done with the computers of the future and prepares a presentation of multiple technologies that will be known as "The mother of all demos".

Incredibly, there is a recording, but it is pretty unimpressive by modern standards: [https://www.youtube.com/watch?v=yJDv-zdhzMY](https://www.youtube.com/watch?v=yJDv-zdhzMY)

Image source: "The mother of all demos" itself.
</div></details>
</div>


<div class="post">

## 1973-03 Xerox Alto

![](history/02_alto.png)

<details> 
  <summary>The cradle of GUI innovation, Xerox PARC</summary><div class="cut">
A research division of Xerox, Xerox PARC, releases an experimental computer "workstation" called Alto. An attempt to streamline "The mother of all demos", Alto is the first mass-produced system with a graphical user interface. The computer is made from hundreds of tiny computer chips, and the price starts at $32,000. There is very little demand for such a computer.

Image source: Xerox's Alto commercial.
</div></details>
</div>


<div class="post">

## 1977-06 Apple II

![](history/03_apple2.jpg)

<details> 
  <summary>The boom of microcomputers begins</summary><div class="cut">
Since 1970, the semiconductor and computer chip industry has kept doubling chip features while keeping the costs relatively constant. By 1977, a whole computer processor, comparable in performance to Apollo Guidance Computer's processor, would fit on a silicon crystal smaller than a fingernail and might cost about $10.

This created an opportunity to produce small, inexpensive computers for individual usage. A remarkable example of such a computer is the Apple II, released in June 1977, with a retail price of $1,298.

Two other significant computers, Commodore PET and TRS-80, were released the same year, and a competitive microcomputer market started to form. There was little software available for these computers at first, and owners often had to write their own programs using built-in BASIC programming language.
</div></details>
</div>


<div class="post">

## 1979-06 Intel 8088

![](history/04_intel88.jpg)


<details> 
  <summary>A word about memory models and address bus sizes.</summary><div class="cut">

### Integer number sizes

The overwhelming majority of processors in early home computers were "8-bit"; that is, they could operate only with integer numbers between 0 and 255. Computing bigger numbers would require the processor to perform multiple steps. 

If you're struggling to grasp the idea, imagine calculating a sum of 789 and 123 using only sums of single digits: start from the right-most number with 9+3, that's 2 and carry one, then 8+2+carry, that's 1 and carry one, and then 7+1+carry is 9, so the total is 912. Calculating a sum of 1234 and 5678 would require a similar procedure on an 8-bit computer.

A more sophisticated and thus more expensive 16-bit processor could solve this math problem in a single operation because the biggest integer number it can handle is 65,535. A big chunk of computing deals with numbers around this range, so a 16-bit processor with the same "number of operations per second" as an 8-bit processor will likely be much more performant.

### Address bus size

The central processor usually doesn't have much memory to store the data. Instead, it stores data in memory chips connected to the CPU through "address bus" and "data bus". The data bus transfers the actual information back and forth, while the address bus determines where to store the data in memory.

Thus, the address bus size ("width") determines how much RAM the computer can use without relying on engineering tricks. The logic is the same as with the integer sizes: 

8-bit bus = 256 addresses,
16-bit bus = 64K (65,536) addresses, 
20-bit bus = 1M (1,048,576) addresses,
24-bit bus = 16M addresses,
32-bit bus = 4G addresses

When processors calculate the addresses for the address bus, they usually have to deal with the same limitations as during integer calculations. Thus, calculating a 16-bit bus address would require multiple operations on an 8-bit processor.

Unfortunately, any serious computing requires at least a few kilobytes of memory. Hence, computers based on 8-bit processors usually had to have a 16-bit address bus and no choice but to regularly spend multiple operations calculating addresses in the memory.

### Memory management model

The simplest way to use computer memory is sometimes called a "flat model". A computer with a 16-bit address bus using flat memory can have not more than 64K of addressable memory elements. This is a problem because things like text documents, spreadsheets and photos simply do not fit in 64K.

A way to bypass this limitation is to implement "bank switching" (or simply "banking"). Let's say you want 128K of memory on a system with a 16-bit data bus. A common way to implement this is to divide 128K into 8 "banks" of 16K each and add clever circuitry to allow you to choose how these banks are connected to the address bus "on the fly". 

For example, you can have banks 0, 1 and 2 available to the processor at addresses 0, 1x16K and 2x16K, but the 3x16K addresses could be connected to any of the banks. Voila, your 16-bit system can access more memory! The downside is that you cannot directly copy things between, say, bank 4 and bank 6, as they cannot be mapped to the "address space" simultaneously.

Many 16-bit processors use an advanced variant of bank switching known as "segmentation". With segment memory, a processor can access multiple 64K "segments" simultaneously. For example, x86 processors have a Code Segment, which has the program you execute now, a Data Segment to access your data, an Extra Segment to compare or copy memory between two segments and a Stack Segment to store intermediate calculation results. It is much faster than banking but still requires the programmer to use a lot of magic to avoid the limitations imposed by the 64K segment size.

### Intel 8086 and Intel 8088

Both i86 and i88 are 16-bit processors with 20-bit address bus. This means that they support up to 1 megabyte of RAM. These processors use segment memory to avoid long, expensive memory address computations. Initially, the listed price was $124, but quickly dropped to just $14.

### A glimpse into the future - Motorola 68000
Introduced just a few months after the Intel 8088, Motorola 68000 is a 32-bit processor with a 24-bit address bus and a convenient flat memory model. It was seen as a more expensive chip, with the price tag starting at $125. Curiously, the price decreased to about $15 in just a few years.

</div></details>
</div>



<div class="post">

## 1979-10 VisiCalc

![](history/05_visicalc.png)

VisiCorp publishes the first spreadsheet program for home computers, VisiCalc for Apple II. Dubbed "the first killer app for the personal computer", it was massively popular. "I need VisiCalc, so I am going to buy a very expensive computer to run it" level of popular.

</div>

<div class="post">

## 1979-?? Steve Jobs decides to make a computer with a graphical interface

Steve Jobs sees Xerox Alto in Xerox PARC, and becomes obsessed with graphical interfaces. Shortly after, he strucks a deal with Xerox, where Xerox could buy a chunk of Apple stock in exchange for Xerox'es patents.

> I was so blinded by the first thing they showed me, which was the graphical user interface. I thought it was the best thing I’d ever seen in my life. Now remember it was very flawed. What we saw was incomplete, they’d done a bunch of things wrong. But we didn’t know that at the time but still thought they had the germ of the idea was there and they’d done it very well. And within – you know – ten minutes it was obvious to me that all computers would work like this some day. It was obvious. You could argue about how many years it would take. You could argue about who the winners and losers might be. You could’t argue about the inevitability, it was so obvious.

*-- Steve Jobs, interview for "Triumph of the Nerds"*

This pivots a computer in development, Apple Lisa, from being a revamp of Apple II into being something completely new.

</div>


<div class="post">

## 1980-08 IBM starts working on PC

![](history/06_pc_mobo.jpg)

The Blue Giant becomes mildly interested in a home computers market, and decides to build a cheap home computer, uncharacteristically for the company outsourcing many parts of the project. A small group of engineers starts working on IBM PC, using Intel 8088 processor because it is the cheapest 16-bit CPU they can find. IBM needs an operating system for their new computer, and starts shopping around.


</div>


<div class="post">

## 1981-04 Xerox Star 

![](history/07_xerox_star.jpg)


Xerox polishes ideas from Alto and releases the very first computer using "desktop" paradigm and "folders", Xerox Star 8010. It is a wonderful machine, with a high-resolution screen, mouse, what-you-see-is-what-you-get, and so on. Alas, the basic model costs $75,000.

</div>


<div class="post">

## 1981-08 IBM PC 

![](history/08_ibmpc.jpg)

IBM releases its home computer IBM PC, with a price tag starting at an almost reasonable $1,565. IT comes either with BASIC, or a disk operating system called PC-DOS. Either way, all you're getting is black screen with white letters on it. The operating system was developed by Microsoft, a compiler company that supplied BASIC to maybe half of all the home computers.

</div>


<div class="post">

## 1981-09 Rumours about Apple Lisa

![](history/09_lisa.png)

Three years in the works, Apple Lisa starts to get a shape. Rumours about it start spreading around the industry, naming it an upcoming Xerox Star competitor. Journalists are thrilled to learn that it probably will support a mouse (which was invented a long ago, but was not a common accesory just yet).

</div>

<div class="post">

## 1981-09 Microsoft Interface Manager (?)

![](history/10_interfacemana.png)

Even in the early 80s there was a big demand for user-friendliness. Microsoft starts investing into its own user-friendly interface, as seen in the above note from Paul Allen (c. 1982). It is likely that the work on something known internally as Interface Manager has begun not later than in September 1981.

> In 1981, the Apps division of Microsoft (Microsoft had two primary divisions during this time - "Systems" and "Apps", for systems software and application development respectively) began to develop a common interface library for all of the productivity applications being developed within the division at the time (mostly Word and the Multiplan spreadsheet). This went by several names, notably MUSH (Microsoft User SHell) and Interface Manager, and is an entirely text-mode UI framework signified by the "session control" strip with context-specific commands at the bottom of the screen. There were also brief plans for a "visual shell" using this UI to be shipped using DOS 2.0, but these were scrapped before the final release. Variants of the MUSH/Interface Manager interface would ship in DOS Word 1.0 and Multiplan in 1982...

*-- Betawiki*

It all started with Charles Simonyi. He created the first WYSIWYG word processor for Xerox PARC, got tired of it, and around 1980, was looking for new opportunities. His ex-coworker and founder of 3Com, Robert Metcalfe, has introduced Charles to Bill Gates, where Simonyi started working on a spreadsheet program. Shortly after, Simonyi hired his co-worker from Xerox PARC, Richard Brodie, to help with Multiplan. This was the beginning of the Apps division. It is said [citation needed] that when Brodie joined Microsoft, Multiplan did not have a menu system just yet, and Brodie was insistent on adding one. Brodie himself mentions that he primarily was working on Microsoft p-Code C compiler, though. So, this might or might not be the beginning of the Windows code.

</div>


<div class="post">

## 1981-11 VisiCalc's developers are actively working on a graphical interface

![](history/11_rosetta_visicorp.png)

Impressive interface of Xerox Star and rumours about not-yet-released Lisa make the creators of VisiCalc consider their future investment. The company's president learns about a small team from Texas (Scott Warren and Dennis Abbe) who created a variant of Xerox PARC's Smalltalk with a windowing interface for seriously underpowered home computers, and hires them to create the company's next big thing.

</div>


<div class="post">

## 1982-08 Microsoft Multiplan

![](history/12_multiplan.png)

As mentioned earlier, Microsoft has been working on their own VisiCalc competitor. Despite the rock star project's staff, Multiplan doesn't sell all too well. Journalists are curious whether Microsoft might release a word processor, and the company's representative hints that they might be working on a mouse-controlled interface:

> The way that the word processor becomes really nice is when you get away from keyboard input. Which means, use keyboard input for words only and use something like a mouse, or a joy stick, or a track ball for the editing commands.

-- Vern Raburn, President of Microsoft Consumer Products, in interview for PC Magazine April 1982

The command strip bar at the bottom of the screen was considered quite user-friendly at the time. Note that even the very first release of Multiplan supports multiple "windows" to display multiple spreadsheets at the same time.

</div>


<div class="post">

## 1982-11 VisiCorp presents VisiOn on COMDEX

![](history/13_vision.png)

A demo of VisiOn, the graphical multi-tasking shell by VisiCorp, is a smash hit on the biggest PC conference COMDEX. Multiple sources quote that it influenced Bill Gates to prioritise work on what later will become "Windows", but it is unclear whether he was inspired or outraged. Perhaps, he was not comfortable with VisiCorp entering his home turf, operating systems (despite Microsoft just entering the VisiCorp's one).

</div>


<div class="post">

## 1982-12 Sun Window System is being developed

![](history/14_sun1.jpg)

Star, Lisa, and now VisiOn created sort of a "user interface fever", it seems. Even Sun Microsystems begins working on a Sun Window System for its pricey UNIX workstation Sun-1.

</div>


<div class="post">

## 1983-01 Apple Lisa

![](history/15_lisa.jpg)

Xerox Star was pretty close to the idea of modern computers, but it was still very rough around the corners. For example, if one window would overlap with the other, the bottom window would stop updating. Not a big deal unless your bottom window is a clock or a mail app. Apple Lisa, though, polished the interface. Just check out this [video](https://youtu.be/m1rROTVVHls?t=311). It was more affordable than Star, but $9,995 was still quite a price tag.

> "The most important development in computers in the last five years, easily outpacing [the IBM PC]" 
*-- BYTE, 1983-02*

Despite the praise, the series was a commercial failure, likely due to its high cost.

</div>

<div class="post">

## 1983-02 PC Magazine declares 1983 the year of mouse

![](history/16_pcmag83.png)

If you skim over PC Magazine from 1982, you are more likely to find a mention of Mickey Mouse than a "mouse" as a pointer device. The next year, though, they proclaim "The Year of Mouse on PC". The actual year of mouse in the Lunar calendar was actually 1984, what a shame. A big feature of the February issue is not-yet released VisiOn which is going to be all about the mouse.

>  This issue marks the unofficial IBM debut of California’s second-most famous rodent: the computer mouse. (Mickey and Minnie’s first-born, "Micro”?)
*-- PC Mag, February 1983*

> ...menu-driven systems as Apple’s new Lisa or the Xerox 8010 (better known as the “Star”) have, in fact, elevated the mouse's status from a laboratory curiosity to rodent stardom.
*-- "The Tale Of The Mouse", PC Mag, 02/83*

> You simply point to what you want to do by using a mouse... VisiOn handles windows on the screen in a way that makes it look as if one piece of paper is on top of another... 

*-- "VisiOn, a mouse on the digital desktop", PC Mag, 02/83*

</div>


<div class="post">

## 1983-04 Microsoft Interface Manager is under very active development.

</div>


<div class="post">

## 1983-05 Microsoft presents MS Mouse. It supports a Doodle graphics editor, which is one of the first graphics editors for a home computer. It can work with Notepad, and will support upcoming Word text processor.
</div>


<div class="post">

## 1983-09 Microsoft releases Word for DOS and XENIX.
</div>


<div class="post">

## 1983-09 Microsoft presents Interface Manager, freshly renamed to Windows, to BYTE magazine, but it is "smoke and mirrors".

</div>


<div class="post">

## 1983-11 Microsoft presents Windows at COMDEX. The system is going to have "tiled" windows. The demo is still "vaporware", lacking actual function just yet.

</div>


<div class="post">

## 1983-11 Sun Window System (Sunwindows) is released. Works on Sun-2 (Motorola 68010-based, $29,300). Has overlapping windows.
</div>


<div class="post">

## 1983-12 VisiOn for IBM PC is released. It is slow, and requires a hard disk, bringing the total system cost close to 3/4 of Apple Lisa. The company has lost many key developers during the work on VisiOn due to poor management. The system was doomed.

</div>


<div class="post">

## 1984-01 Apple releases Macintosh.
</div>


<div class="post">

## 1984-05 Microsoft releases DR preview builds with a limited set of vendors.
</div>


<div class="post">

## 1984-08 IBM announces a text-based windowing system called TopView.
</div>


<div class="post">

## 1984-11 Digital Research GEM is presented at COMDEX.

</div>


<div class="post">

## 1985-04 Commodore Amiga 1000 is released, with Intuition interface for its AmigaOS. The reviews of the interface are far from rosy. The platform got no killer app, and in the next years failed to win the market.
</div>


<div class="post">

## 1985-07 Release of Windows Premiere Edition, a technology preview of Windows shared with a limited number of vendors.
</div>


<div class="post">

## 1985-08 TopView doesn't work out for IBM. Microsoft and IBM agree to work together on the interface for the next big operating system, IBM OS/2.
</div>


<div class="post">

## 1985-09 Microsoft releases a new spreadsheet software, called Excel, for Macintosh.
</div>


<div class="post">

## 1985-11 Apple allows Microsoft to use its technology in Windows 1.0.
</div>


<div class="post">

## 1985-11 Microsoft releases Windows 1.0 with tiling windows. Supposedly, this was done for the sake of user convenience and efficiency (though the press didn't like it).
</div>


<div class="post">

## 1985-10 Digital Research decides to seriously strip down GEM because of a lawsuit from Apple.

</div>


<div class="post">

## 1986-09 Most developers left Windows project to focus on OS/2 Presentation manager. "Barbarians led by Bill Gates" claims that only a team of three was tasked to to make a new Windows version that could run Excel. Many ex-staffers say that the actual team was much bigger. Regardless, Windows' days seemed to be numbered. "This is it, after this we're not going to have any more Windows. It's all OS/2.", Ballmer said."
</div>


<div class="post">

## 1986-09 Compaq ships DeskPro 386, the very first DOS-compatible machine based on i386.

</div>


<div class="post">

## 1987-09 Windows/386, a first variant of Windows 2.0 released for Compaq i386. It finally features overlapping windows.
</div>


<div class="post">

## 1987-10 A "runtime" version of Windows 2 is used for IBM PC Excel release.
1987-12 Windows 2.03 released, hitting the stores in early 1988.

Barbarians Led by Bill Gates saying, “A couple people were left to maintain the Windows 2.0 code and fix any bugs reported, but the “glory days” of Windows, such as they were, appeared to be dead and gone. Last one out, turn off the lights.”

</div>


<div class="post">

## 1988-03 Apple files a lawsuit againt Microsoft for patent violation in Windows 2.
</div>


<div class="post">

## 1988-08 Dave Weise's pet project to port Windows kernel to 386 gains traction inside Microsoft. It is decided to release Windows 3.0 and develop it further.

</div>


<div class="post">

## 1988-11 OS/2 1.1 includes Presentation Manager, developed jointly by Microsoft and IBM. A graphical interface of Presentation Manager is very similar to Windows 2.0. IBM insists Microsoft should kill Windows.

</div>


<div class="post">

## 1989-07 Apple vs Microsoft lawsuit starts to look like a losing case for Apple.

</div>


<div class="post">

## 1990-05 Microsoft releases Windows 3.0, and it sells. This eventually results in Microsoft Word and Excel gaining significant market share due to competitors (Lotus and WordPerfect) not supporting Windows and expecting OS/2 to become a standard instead. IBM is upset and nopes out of the joint OS/2 development.

</div>



## Sources
* Many photographs are sourced from Wikipedia; see links below.
* Dates and trivia are taken from various sources and cross-referenced, but might not be absolutely correct or even debatable sometimes.
* "Barbarians led by Bill Gates": https://archive.org/details/barbariansledbyb00edst/page/23/mode/1up?view=theater
* "Connections: Patterns of Discovery" https://books.google.co.uk/books?id=DxGyOaAyd6gC&pg=PA92&redir_esc=y#v=onepage&q&f=false
* "Doing Windows": https://www.filfre.net/2018/06/doing-windows-part-1-ms-dos-and-its-discontents/
* "The rise of Windows": https://anotherboringtopic.substack.com/p/the-rise-of-windows-part-2-windows
* PC Magazine, various issues
* BYTE Magazine, various issues
* Infoworld Sep 1981 and May 1982 
  * https://books.google.co.uk/books?id=Mj0EAAAAMBAJ&pg=PA1&redir_esc=y#v=onepage&q&f=false
  * https://books.google.co.uk/books?id=bDAEAAAAMBAJ&pg=PA10&redir_esc=y#v=onepage&q&f=false 

## Links to original images
* https://en.wikipedia.org/wiki/Apple_II_(original)#/media/File:Apple_II_advertisement_Dec_1977_page_2.jpg
* https://en.wikipedia.org/wiki/IBM_Personal_Computer#/media/File:IBM_PC_Motherboard_(1981).jpg
* https://en.wikipedia.org/wiki/VisiCalc#/media/File:Visicalc.png
* https://en.wikipedia.org/wiki/Xerox_Star#/media/File:Rank_Xerox_8010+40_brochure_front.jpg
* https://en.wikipedia.org/wiki/IBM_Personal_Computer#/media/File:Bundesarchiv_B_145_Bild-F077948-0006,_Jugend-Computerschule_mit_IBM-PC.jpg
* https://youtu.be/FDsbOMR_kU4
* https://archive.org/details/MSDOS2FuturePlansForMSDOSByPaulAllen/page/n2/mode/1up?view=theater
* https://dl.acm.org/doi/pdf/10.1145/1113572.1113555
* https://en.wikipedia.org/wiki/Sun_Microsystems#/media/File:Sun-1_Badge.jpg
* https://en.wikipedia.org/wiki/Apple_Lisa#/media/File:Apple-lisa-1.jpg