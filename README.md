# GHASTLY JUMP

This is a platform game written in JavaScript with the help of [p5.js](https://p5js.org/) and [p5play](https://molleindustria.github.io/p5.play/).

You can play the game [here](https://ghastlyjump.netlify.app/).

### Installation

- Clone the repository, open _index.html_ in a browser and play the game!

### Preview

<img src="https://i.imgur.com/TbTFIsp.png" width=50%>
<img src="https://i.imgur.com/ALojFsN.png" width=50%>

### Collaborators

- [Thomas Sönnerstam](https://github.com/ThomasSonnerstam)
- [Michaela Lundborg](https://github.com/lundborgm)

### Testers

- [Betsy Alva Soplin](https://github.com/milliebase)
- [Andreas Lindberg](https://github.com/oaflindberg)
- [Mikaela Lundsgård](https://github.com/mikaelaalu)
- [Alexander Gustafsson Flink](https://github.com/alexandergustafssonflink)
- [Viktor Puke](https://github.com/Vpuke)
- Helena Eklund
- Carl Davidson
- Joel Andersson

### Pull Request Log

<details>
    <summary>Click to expand</summary>

    - https://github.com/ThomasSonnerstam/p5js-game/pull/3
    - https://github.com/ThomasSonnerstam/p5js-game/pull/6
    - https://github.com/ThomasSonnerstam/p5js-game/pull/12

    For a full overview of all the pull requests, follow this link:
    (https://github.com/ThomasSonnerstam/p5js-game/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed)

</details>

## Code review

[Andreas Lindberg](https://github.com/oaflindberg)s notes:

- index.js, line 307 & 309. Maybe use a template literal instead of concatenation.
- index.html, line 8 to 15. Might be a personal preference thing, but instead of linking two different google fonts like this, you could do it this way instead:

  `<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Sigmar+One&display=swap" rel="stylesheet">`

* index.js, line 185. Not 100% sure that it was a criteria for this project, but if you add WEBGL after windowHeight in createCanvas(windowWidth, windowHeight); the game breaks.
* p5play.js, line 38. Not sure what this does, but it’s kind of consfusing. On this line, the default frame rate is set to 30. But in index.js the frame rate is set to 60. (line 183) It’s obviously working, but it’s confusing me a bit.
* I’m not able to find anything else to comment on really, the code is well written and documented. One thing I would like to add to the game is being able to choose if I want to control the character using arrows or WASD.

[Viktor Sjöblom](https://github.com/ViktorSjoblom)s notes:

* Try to divide your .js files into seperate files in order to keep the files sctructured. (eg. functions.js, data.js etc.)
* Variable and function names are consistent, and easily understood.
* Good usage of .gitignore (not including the DS_Store-file.)
* Maybe use a .editorconfig aswell? To have some standard values. Could be useful.
* Don’t forget to add a LICENSE-file to your git project. 

- Your game is really fun and this is no doubt a very well organized project. Great job!
