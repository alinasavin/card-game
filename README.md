# Card Api Project 

[![Netlify Status](https://api.netlify.com/api/v1/badges/33d5597e-16f1-47d9-9e59-fe6bac2c328f/deploy-status)](https://app.netlify.com/sites/card-game-frontend-task/deploys)

[Checkout live site](https://card-game-frontend-task.netlify.app/)

Built an app that displays a deck of cards, one card at a time. When the page loads, send a request to https://deckofcardsapi.com/api/deck/new/shuffle to create a new deck. The Deck ID is then stored to make further requests to retreive each card image. The "Draw Card" button  allows the user to draw a new card.

When a user clicks the button,  another request is sent to the API, this time to https://deckofcardsapi.com/api/deck/${deck_id}/draw/. (make sure to use your actual deck ID). Using the data included in the response a new card image is displayed.

Every time the user clicks, the app displays a new card until the deck is empty.  The user gets notified each time there is a suit or value math of the cards. Every match is recorder on the screen and added. 

### Built with

- React
- Jest

## Getting Started

### Prerequisites

- npm
  npm install | npm@latest -g
- Ensure correct folder is selected, i.e. cd card-game-frontend-task

### Installation

1. Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w20_final-project-team-f.git
```

2. Go to the project directory

```bash
  cd nutri-glow/client
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm run start
```

### Dependencies

**App:** react, react-scripts , react-bootstrap 
**Testing:** react-testing-library, Jest

## Running Tests

To run the unit tests (utilising Jest and react-testing-library), enter the following command:

```bash
    npm test
```