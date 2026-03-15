
# Turn-Based RPG Web Game

A browser-based RPG inspired by classic Final Fantasy games! I love video games and creating one has been a goal of mine since I began learning how to code. So, when I felt that I was prepared to create a web game, I jumped at the opportunity. 

During the development of this game, I've learned two lessons:
- **It's incredibly important to plan ahead**

I went into this project without a solid plan or a clear understanding of how much work it would take. By the time I realized the complexity of this project, I had already built a shaky foundation.

- **Don't bite off more than you can chew**

Considering my level of knowledge when I started this project, I was in over my head. I hadn't learned TypeScript or any frameworks, both of which could have made this project much simpler.

After setting aside this project and not picking it back up due to how convoluted the spaghetti code is, I've made the decision to not continue working on this repo. I still want to create a web game, and making a turn-based rpg sounds fun. But, building off of this is not ideal.

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
## Usage

### Important Note:
*This project is unfinished and prone to various unhandled errors.*

### Playing the Game
- Click on the `Add Brawler` and/or the `Add Knight` button to add them to the hero party *(Don't select the same hero twice)*
- Click `Start Game` to generate an enemy party and initialize a battle
- Characters are sorted by speed and placed into a turn queue in descending order
- If it's a hero's turn, the user selects an ability
- If it's an enemy's turn, an ability is selected based on weighted probability
- The game ends when all heroes are downed or all enemies are slain

## How It Works

- **Battle Manager:** A battle manager object is used to handle battle state and turn cycle
- **Turn Queue:** This object is used to manage the turn order of characters during a battle
- **Characters:** Heroes (controlled by the user) and enemies both have sets of abilites that can be used in battle
- **Abilities:** Can either be an Attack (used against opposing party) or an Aid (used on characters within party of the character using the Aid ability)

## Known Issues

- Selecting multiple of the same hero causes heroes of the same kind to have linked AP and HP values
- Selecting an Aid ability crashes the game
- No way to unselect an ability once chosen

## Roadmap

- Never update this repo again
- Make a more orderly and functional version of this game

## Author

Created by Jonas Mast

