# Mushroom Picker
## Technology
- JavaScript
- React.js
- ES6 Modules
- Google Fonts
- Bootstrap

## Features
- Pressing the 'Pick Mushroom' button adds mushroom to basket.
- When a mushroom that is picked is the same as a mushroom in the basket, it is added to that mushroom's quantity.
- When a poisonous mushroom is picked, it is not added to the basket and removes the two most recent mushrooms from the basket.
- When the deadly mushroom is picked, it is not added to the basket and the basket becomes empty.
- When the magic mushroom is picked, it is added to the basket as well as one of each of the edible mushrooms from the forest.
- When all edible mushrooms are in the basket, the user wins and the 'Pick Mushroom' button becomes a 'Play Again' button
- The special mushrroms all change the background and style of the mushroom cards when they are picked.

## Screenshots
##### Mushroom Basket
![Mushroom Basket](public/images/mushroom-basket.png)
##### Magic Mushroom Event
![Magic Mushroom Event](public/images/magic-mushroom.png)
##### Death Cap Event
![Death Cap Event](public/images/deathcap-event.png)
##### Red Cap Event
![Red Cap Event](public/images/redcap-event.png)
##### Webcap Event
![Webcap Event](public/images/webcap-event.png)
##### Jack-O-Lantern Event
![Jack-O-Lantern Event](public/images/jackolantern-event.png)

## How To Run
1. Clone down this repo
1. Make sure you have  http-serve installed via npm. If not, get it [HERE](https://npmjs.com/package/http-server).
1. On your command line run `hs -p 9999`
1. In your browser go to `http://localhost:9999`

## Contributors
* Joey Petrone - [joeydev.net](https://joeydev.net)
