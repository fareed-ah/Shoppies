# Shoppies
Welcome to The Shoppies, a movie award show for entrepreneurs!

Visit The Shoppies webpage [here](https://shoppies-six.vercel.app/) to search for your favourite movies and nominate your Top 5 picks that you believe deserve to win a Shoppy award!

## Installation

1. Clone the Github repository
```sh
git clone git@github.com:fareed-ah/Shoppies.git
```
2. Change directories to the client folder
```sh
cd Shoppies/client
```
3. Intall yarn dependencies
```sh
yarn install
```
4. Run the dev script
```sh
yarn dev
```
5. View the web page at [localhost:3000](localhost:3000)


## Features
-	Search for your favourite movies with ease, the new and improved search bar shows results as you type. Clear the search bar with the click of a button.
-	Search results are displayed with pagination and the user is informed how many results are retrieved.
-	Search results will show the movie title and date released users along with the movie poster and genre. 
-	User can click on the movie poster to open a detailed popup of the movie which includes: movie title, poster, plot, release date, genre, age rating, and imdb rating.
-	Error messages are displayed where the result should appear when applicable. 
-	A banner notifying the user that they have reached 5 nominations will appear below the list of movie nominations.
-	The page will automatically save nominations as the nominations are modified. Thus on refresh the page will retain the users nominations.
-	The page is very responsive and works well on mobile as well!

## Built Using

The Shoppies webpage is built using the following libraries:
-	[Nextjs](https://nextjs.org/) – Front end framework 
-	[TypeScript](https://www.typescriptlang.org/docs/) - The Shoppies is built with TypeScript to take advantage of static typing
-	[Verecel](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website) – Web hosting 
-	[OMDBApi](http://omdbapi.com/) – External API used to fetch movies 
-	[Material UI](https://material-ui.com/) – React UI Components 

## Hurdles during development
- Query returned duplicate movies items
- Reached OMDB 1000 daily limit 
- Deciding how to chain axios requests
- Redesigned the entire website about three times
