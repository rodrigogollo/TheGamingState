# The Gaming State

## Website for reviewing games
Inspired by Album of The Year website where a lot of people review new albums and songs, and since IGDB has a free API for getting games, but has almost no reviews, and multiple platforms have a prise for the GOTY (Game Awards, Steam, etc...) every year, I think it would be nice to have a website like that for the gaming community to have fun choosing and reviewing their favorite games.

## Tech:
### Backend
- [x] Node.js (TypeScript)
- [x] Express
- [ ] Jest
- [x] PlanetScape Database (MySQL)
- [x] Prisma ORM
- [ ] JWT

### Frontend
- [x] React (TypeScript)
- [x] Wouter (Routing)
- [ ] TailwindCSS
- [ ] Storybook

# MVP First Draft

Functional Requirements

1. Get Data from IGDB API
    1. Call game data on page open
    2. Render game details on a game page

2. Enable users to Rate a game
    1. Render a rate button on the page game (1-5 star)
    2. Save the rating in the database

3. Create a login flow
    1. Create a login/sign up page
    2. Enable user creation and login into the website
