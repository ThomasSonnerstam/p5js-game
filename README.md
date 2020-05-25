# p5js-game
A game done with p5.js

### Collaborators
- [Thomas Sönnerstam](https://github.com/ThomasSonnerstam)
- [Michaela Lundborg](https://github.com/lundborgm)

### Testers
- 

### Pull Request Log
- 

## Code review

[Andreas Lindberg](https://github.com/oaflindberg)s notes: 
* index.js, line 307 & 309. Maybe use a template literal instead of concatenation. 
* index.html, line 8 to 15. Might be a personal preference thing, but instead of linking two different google fonts like this, you could do it this way instead:

    ``<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Sigmar+One&display=swap" rel="stylesheet">`` 


* index.js, line 185. Not 100% sure that it was a criteria for this project, but if you add WEBGL after windowHeight in createCanvas(windowWidth, windowHeight); the game breaks.
* p5play.js, line 38. Not sure what this does, but it’s kind of consfusing. On this line, the default frame rate is set to 30. But in index.js the frame rate is set to 60. (line 183) It’s obviously working, but it’s confusing me a bit.
* I’m not able to find anything else to comment on really, the code is well written and documented. One thing I would like to add to the game is being able to choose if I want to control the character using arrows or WASD.   

