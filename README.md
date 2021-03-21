# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Huntyr Wright**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/gaudy-profuse-horesradish)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] To further improve this app, I had tweaked the placement of the text. I centered the header and text, as well as the countdown timer. I also centered the buttons and removed the outline.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/0Y2yH3HtVv.gif)   
![](http://g.recordit.co/wI4FDGHpXh.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
"Create a Multiple Choice Quiz App Using JavaScript" by Code Explained on YouTube. Various articles from Stack Overflow.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I have encountered a few challenges when creating this submission. The timer was difficult to make because it would countdown while the computer would play the hint for the player, which is not ideal. I had to get creative and come up with ways to prevent this with the limited knowledge I had with JavaScript. Even though I set it up where the counter would not start until the clue was finished playing, it would still glitch and count one second, and then reset back to the original time. Visually, it is not the best. I wish I could have discovered a better and more efficient way to create the countdown timer. But I am proud of myself for making it function. I was, however, able to find a good tutorial on YouTube on how to make a basic timer, which I listed in the above question. This tutorial only taught how to get the timer to start and show up on the webpage. I had to create ways to make the timer do the specific things I needed it to do, such as counting down only after the clue sequence was finished playing. My algorithm for my timer is not perfect, but it does (technically) work, and I am very happy about that considering it was my first time making such a thing. I will definitely learn from this experience and work hard so I can get better at this and grow as a programmer.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
This assignment has created so many questions that I am excited to have answered. This assignment has taught me more about JavaScript, and I would like to learn more about its features. I would also like to learn more about how to make a webpage more attractive using CSS. For example, how to make a website responsive so that it would look good no matter the size of the computer screen. Ever since I started to learn the basics of front-end web development, responsiveness is the one thing I struggled with the most.
I also have questions about the available methods in JavaScript and what problems they could solve. Before this assignment, I had never used the **setTimeout()** method before. It was interesting to use it to improve my countdown timer, but I would like to know whether using it was even necessary. I wonder if there was a feature in JavaScript that would have made my code more efficient. I certainly have a lot to learn about front-end web development. I am so excited to learn more and make more projects.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to work on this project, I would spend more time in refining the features I had added. One of those features was the timer. Since this was the first time I had made a timer, and since it had to be in a specific part of the code so that it would work properly, I had struggled getting it to be exactly how I had envisioned it. For example, I wanted the timer to only start once the computer finished playing the clue sequence. But since the sequence increased in the amount of buttons to be press, as well as the speed changing as time went on, it was a challenge to get the timer to behave properly. I was able to use the **setTimout()** method to delay the calling of my **timer()** function, which was the function that controlled my countdown timer. It did work, however, for the first few turns the timer would countdown one second, and then revert back to its original time. I have a few ideas on why it behaves this way, but unfortunately, I did not have enough time to work on improving it any further.



## License

    Copyright Huntyr Wright

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
