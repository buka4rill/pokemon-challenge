# An Insight into How I Approched this Challenge

For this task, I used Next.JS + [chakra-ui](https://github.com/chakra-ui/chakra-ui). This is because I didn't want to think too much about writing CSS styles, so
I went for a library that would give me styled components that are pretty, with little to no custom CSS. I also built the project with Typescript for type security and assurance.

I decided not to bother with too much achitecture. I thought of it as a simple app with a few API calls, so I decided not to build with Redux or Context for state management. They have a lot of boilerplate which I felt was unneccessary for this project. I opted for the [react-query](https://react-query.tanstack.com/) package instead. I also used Axios and fetch for some API calls. I used [next-pagination](https://github.com/etchteam/next-pagination) to paginate the data.

# Challenges

I found the API is challenging to use because of it's structure. It took me a while to get use to it. I found my self making several HTTP calls of a single task which wouldn't have been necessary if the API was structured differently.

In `PokemonCard.tsx`, I had quite a bit of a challenge trying to render short description for the Pokemon characters.

I had a bit of challenge implementing the pagination also.

# What I Would Have Done Differently

In an ideal situation, I would have opted of any of the state management libraries React has to offer, but I didn't think it was neccessary for this task.

I would have also hidden the API URLs with a .env file.

Some of my code (especially in `index.tsx` file) could have been refactored. I'd cut down my code and make proper use of components.

More code commenting

Though it was optional, I would have attempted the Search bar task.
