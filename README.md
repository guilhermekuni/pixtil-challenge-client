<h1 align="center">Pixtil Frontend Challenge</h1>

<div align="center">
  <p align="center">
    <img alt="Repository languages count" src="https://img.shields.io/github/languages/top/guilhermekuni/pixtil-challenge-client?color=%#7BE0D9">
    <img alt="Repository top language" src="https://img.shields.io/github/languages/count/guilhermekuni/pixtil-challenge-client?color=%#7BE0D9">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/guilhermekuni/pixtil-challenge-client?color=%#7BE0D9">
    <img alt="Repository last commit" src="https://img.shields.io/github/last-commit/guilhermekuni/pixtil-challenge-client?color=%#7BE0D9" />
  </p>
</div>

## About :information_source:

This project is a Frontend Web Application, built with React in less than one day (that was the challenge). It basically fetch and filter some data from a Fake API, and show them on the interface.

Please, check it out the following links:

- This application is running on Netlify: [Pixtil Web App](https://elated-easley-7587b0.netlify.app/);
- This application also has a Storybook components documentation, which is also running on Netlify: [Storybook Documentation](https://adoring-edison-4ee2c5.netlify.app/?path=/story/productcard--basic);
- The Fake API is running on Heroku:  [https://pixtil-challenge-server.herokuapp.com/](https://pixtil-challenge-server.herokuapp.com/).

If you want, you can check the Fake API repository here: [https://github.com/guilhermekuni/pixtil-challenge-server](https://github.com/guilhermekuni/pixtil-challenge-server) 

## Running :rocket:

To see the application you can check the first link above, but you want, you can also run it locally by following the steps:
1. Run `yarn` to install the dependecies;
2. Run `yarn start` to run projecto (it will be running on port 3000).

To see the Storybook documentation, you can follow the steps:
1. Run `yarn` to install the dependecies;
2. Run `yarn storybook` to run the documentation (it will be running on port 6006).

To run the tests:
1. Run `yarn` to install the dependecies;
2. Run `yarn test` to run the implemented tests.

## Tech Decisions
This application was built mostly with React, TypeScript, Styled Components and Storybook. The goal was to build something scalable and easy to mantain.
- **React** is the core tech of the application, everything was choosen with the React ecosystem in mind.
- **TypeScript** was used to bring more padronization to the code. It's make easier to debbug and read code because of its type intellisense, and it also have a really nice synergy with Storybook. 
- **Styled Components** is awesome because of the CSS-in-JS, which give us a lot of flexibility writting and validating our styles. Furthermore, it forces us to maintain the CSS scoped, which makes easier to maintain and scale the project. With Styled Components I was able to implement a theme for our styles too, which brings more quality and readability to our code.
- **Storybook** was used to built our components documentation. It have a really nice synergy with typescript because of its controls/props, which make it really easy to test and understand our UI components.

## Tech Debits / Improvements
As I said, I only had one day to built this project, so it has a lot of things to improve, such as:
- Implement more unit tests. I only implemented 2 simple tests with Jest at the application, but I built the structure to keep implementing tests (we can test our components using our custom theme, for example);
- I wasn't able to add/finish a lot of features, such as URL query filter and paginating. I implemented only 3 filters and mocked the `page` param.
- The App is responsive, but I didn't test every layout possibility. But the media queries logic is all there, I just didn't have much time to test.
- I didn't use all of the properties available for me. My idea was to built another page to navigate and see these other properties.
- As I said, the app could have another page, which would make it reasonable to use Redux or ContextAPI to the global state control. But at the end, the App just have one page, so didn't make sense to add this complexity right now.

As you can see, there are a lot of things to improve, there are so much things that I wanted to implement, but dind't have the time, so I had to choose what was more important, and I choose a good code structure, that is the foundation to any project. For example:
- We don't have much unit tests, but we have the structure to implement more, already testing our UI with our custom theme;
- We don't have the beter UX/UI, but we have the custom theme and the structure to integrate with a Design System;
- We don't have a lot of components, but we have some well implemented/abstracted components, which have documentation too;
- We have a code linting implemented with `editorconfig`, `eslint` and `prettier`, to force us to maintain a good and standardized code.
