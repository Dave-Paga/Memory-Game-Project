const deck = document.querySelector('.deck');
const redo = document.querySelectorAll('.fa-repeat');
const stars = document.querySelector('.stars');
const moves = document.querySelector('.moves');
const time = document.querySelector('.time');
const winscreen = document.querySelector('.winscreen');
const openStar = `<li><i class="fa fa-star-o"></i></li>`;
let clicks = 0;
let minute = 0;
let second = 0;
let starCount = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/* move counter, star rating, and win detector */
function clickCounter() {
    let matchedCards = document.querySelectorAll('.match');

    /* checks moves to remove stars and checks if all cards are matched */
    if (matchedCards.length === 2) {
        countStars();
        wingame()
    } else if (clicks === 19) {
        stars.innerHTML += openStar;
        stars.removeChild(stars.firstElementChild);
        clicks += 1;
        moves.innerHTML = clicks
    } else if (clicks === 29) {
        stars.innerHTML += openStar;
        stars.removeChild(stars.firstElementChild);
        clicks += 1;
        moves.innerHTML = clicks
    } else if (clicks === 39) {
        stars.innerHTML += openStar;
        stars.removeChild(stars.firstElementChild);
        clicks += 1;
        moves.innerHTML = clicks
    } else {
        clicks += 1;
        moves.innerHTML = clicks
    }
}

/* timer */
let timer = setInterval(function() {
    if (second <= 8) {
        second += 1;
        time.innerHTML = `${minute}:0${second}`
    } else if (second === 59) {
        second = 0;
        minute += 1;
        time.innerHTML = `${minute}:0${second}`
        stars.innerHTML += openStar;
        stars.removeChild(stars.firstElementChild);
    } else {
        second += 1;
        time.innerHTML = `${minute}:${second}`
    }
}, 1000);

/* identifies kind of stars */
function countStars() {
    const closedStar = `<i class="fa fa-star"></i>`;
    const hollowStar = `<i class="fa fa-star-o"></i>`;
    starCount = [];

    /* puts stars in an array and removes their li tag */
    for (let i = 0; i <= 2; i++) {
        starCount.push(hollowStar)
    };

    /* checks if a closed star is present */
    if (stars.querySelectorAll('.fa-star').length !== 0) {
        for (let i = 0; i <= stars.querySelectorAll('.fa-star').length - 1; i++) {
            starCount.splice(i, 1, closedStar)
        }
    }
}

/* displays win screen */
function wingame() {
    winscreen.style.top = 0;
    winscreen.style.left = 0;
    winscreen.style.opacity = 1;

    /* assigns stars to individual variables */
    let [one, two, three] = starCount;

    if (minute === 0) {
        document.querySelector('.winText').innerHTML += `You won the game in ${second} seconds, ${clicks + 1} moves, and you have ${one}${two}${three} Stars!`
    } else {
        document.querySelector('.winText').innerHTML += `You won the game in ${minute} minutes and ${second} seconds, ${clicks + 1} moves, and you have ${one}${two}${three} Stars!`
    }
}

/* resets stars and score and time */
function restart() {
    const star = `<li><i class="fa fa-star"></i></li>`;
    clicks = 0;
    moves.innerHTML = clicks;
    minute = 0;
    second = 0;
    time.innerHTML = `${minute}:0${second}`;
    document.querySelector('.winText').innerHTML = "";

    for (let i = 0; i <= 2; i++) {
        stars.removeChild(stars.firstElementChild);
        stars.innerHTML += star
    }
}

/* card logic */
function matchCards() {
    let shownCards = document.querySelectorAll('.show');
    let card1 = shownCards[0];
    let card2 = shownCards[1];

    /* removes classes and eventlisteners */
    let removeclasses = function end() {
        deck.classList.toggle('preventClicks');
        for (let i = 0; i <= shownCards.length - 1; i++) {
            shownCards[i].classList.remove('show', 'wrong');
            shownCards[i].removeEventListener('webkitAnimationEnd', removeclasses);
            shownCards[i].removeEventListener('animationend', removeclasses)
        }
    };

    /* waits for animation to end before removing classes  */
    function detectAnimation() {
        for (let i = 0; i <= shownCards.length - 1; i++) {
            card1.addEventListener('webkitAnimationEnd', removeclasses);
            card1.addEventListener('animationend', removeclasses)
        }
    };

    /* checks if cards are the same */
    if (shownCards.length == 2) {
        /* if match */
        if (card1.isEqualNode(card2) == true) {
            for (let i = 0; i <= shownCards.length - 1; i++) {
                shownCards[i].classList.remove('open', 'show');
                shownCards[i].classList.add('match');
            };
        /* if no match */
        } else if (card1.isEqualNode(card2) == false) {
            deck.classList.toggle('preventClicks');
            for (let i = 0; i <= shownCards.length - 1; i++) {
                shownCards[i].classList.remove('open');
                shownCards[i].classList.add('wrong');
            };
            detectAnimation();
        } else {
            /* continues code  */
            stopPropagation()
        }
    }
}

/* reset cards */
function reset() {
    let cardArray = [];
    let card = document.querySelectorAll('.card');

    /* faces down all cards */
    for (let i = 0; i <= card.length - 1; i++) {
        card[i].classList.remove('open', 'show', 'match', 'wrong');
    };

    /* inserts li elements into an array */
    for (let i = 0; i <= card.length - 1; i++) {
        cardArray.push(card[i]);
    };

    shuffle(cardArray);

    /* removes existing cards */
    while(deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    };

    /* put cards back in the deck */
    for (let i = 0; i <= cardArray.length - 1; i++) {
        deck.appendChild(cardArray[i]);
    }

    /* removes winscreen */
    winscreen.style.removeProperty('top');
    winscreen.style.removeProperty('left');
    winscreen.style.opacity = 0;

    /* resets moves and stars */
    restart()
}

/* shuffle button */
redo[0].addEventListener('click', reset);
redo[1].addEventListener('click', reset);

/* card click event listener */
deck.addEventListener('click', function (e) {
    let card = document.querySelector('.card');

    /* checks if target is a li, an 'i', if its not a match, then shows cards */
    if (e.target.nodeName === 'LI' && e.target.classList.contains('match') === false) {
        e.target.classList.toggle('open');
        e.target.classList.toggle('show');
        matchCards();
        clickCounter()
    /* enables user to close shown cards */
    } else if (e.target.nodeName === "I"
                && e.target.parentElement.classList.contains('match') === false) {
        e.target.parentElement.classList.remove('open', 'show')
    } else if (e.target.classList.contains('show') && e.target.classList.contains('open')) {
        e.target.classList.remove('open', 'show')
    }
})
