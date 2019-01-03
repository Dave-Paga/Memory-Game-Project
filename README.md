# Memory Game Project

## Table of Contents

* [Description](#Description)
* [Features](#Features)
* [Contributing](#contributing)

## Description

This is a simple game memory game made using javascript where you need to match the given cards in order to complete the game.

## Features

#### Flipping Cards

Cards can be faced up or down if a player clicks on them.

#### Shuffle

Shuffles and flips down all cards and resets, moves, stars and time.

#### Stars

This serves as the score or the rating for the player depending on their performance.

#### Time

Displays time for the player.

- Time starts only if the player **flips a card**
- Each minute costs the player **one star**

#### Moves

Displays moves that the player done.

- Below **8 moves** gives the player **3 stars**
- Above **8 moves** gives the player **2 stars**
- **11 moves** and above gives the player **1 star**
- **16 moves** and above gives the player **no stars**

#### Card Logic

Checks if cards match or not and if the player matched all cards a Winscreen will show up.

- Matched cards count as **one move**
- Wrongly matched cards count as **one move**

#### Winscreen

Displays the time completed, moves, and star rating after matching all cards.

## Contributing

Project started from a given [Starter Code](https://github.com/udacity/fend-project-memory-game)

Icons came from [Font Awesome](https://fontawesome.com/)

Shuffle function came from http://stackoverflow.com/a/2450976
