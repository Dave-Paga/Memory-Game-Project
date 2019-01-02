# Memory Game Project

## Table of Contents

* [Description](#Description)
* [Features](#Features)
* [Contributing](#contributing)

## Descripion

This is a simple game memory game made using javascript where you need to match the given cards in order to complete the game.

## Features

### Flipping Cards

Cards can be faced up or down if a player clicks on them

- Flipping down **shown cards** count as **one move**

### Shuffle

Shuffles and flips down all cards and resets, [moves](#moves), [stars](#stars) and [time](#Time).

### Stars

This serves as the score or the rating for the player depending on performance.

### Time

Displays time for the player.

-Each minute costs the player **one star**

### Moves

  Displays moves that the player done.

- Below **18** moves gives the player **3 stars**
- Above **18** moves gives the player **2 stars**
- **25** moves and above gives the player **1 star**
- **30** moves and above gives the player **no stars**

### Card Logic

Checks if cards match or not and if the player matched all cards a **[Winscreen](##Winscreen)** will show up.

- Matched cards count as **one move**
- Wrongly matched cards count as **one move**
- Flipping down **shown cards** count as **one move**

## Contributing

Project started from a given starter [code](https://github.com/udacity/fend-project-memory-game)
Fonts and icons came from [Font Awesome](https://fontawesome.com/)
