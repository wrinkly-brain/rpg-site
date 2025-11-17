
# Turn-Based RPG Web Game

A browser-based RPG inspired by classic Final Fantasy games! This project is a work in progress!




## Live Site

Hosted on [Netlify](https://rpg-site.netlify.app)
## Run Locally

Clone the project

```bash
  git clone https://github.com/wrinkly-brain/rpg-site
```

Go to the project directory

```bash
  cd my-project
```
Start the server

```bash
  ./index.html
```

## Tech Stack

- HTML, JavaScript, CSS
## How It Works

### Important Note:
*This project is unfinished and prone to various unhandled errors. I just wanted to release and deploy it now.*

### Playing the Game
- Click on the `Add Brawler` and/or the `Add Knight` button to add them to the hero party *(Don't select the same hero twice)*
- Click `Start Game` to generate an enemy party and initialize a battle
- Characters are sorted by speed and placed into a descending turn queue
- If it's a hero's turn, the user selects an ability
- If it's an enemy's turn, an ability is selected based on weighted probability
- The game ends when all heroes are downed or all enemies are slain

### Core Systems

- **Turn Queue:** This object is used to manage the turn order of characters during a battle
- **Abilities:** Can either be an Attack (used against opposing party) or an Aid (used on characters within party of aid user)

## Known Issues

- Selecting multiple of the same hero causes heroes of the same kind to have linked AP and HP values
- Selecting an Aid ability crashes the game
- No way to unselect an ability once chosen
## Roadmap

- Implement debuffs and aid abilites

- Finish main game flow

- Improve style


## Author

Created by Jonas Mast

