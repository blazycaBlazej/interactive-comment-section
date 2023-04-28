# Live 💻

# Technologies 🔧

- React
- TypeScript
- SCSS
- Redux
- BEM
- ATOMIC DESIGN

# Overview 🎉

## Interactive comment section

The project was part of the **invo.academy** mentoring program. My task was to:

The goal of the task is to code an interactive comments section - a component that displays a list of user opinions with additional options such as adding a new message, replying to a comment, or liking it. The comment section is a very modular element, so you need to create and use reusable components in the project.

In the final result, the project should meet the following assumptions:

- The project should have a mocked comment database placed directly in the code

- The comment section simulates the view of a logged-in user who can perform all actions (adding a new comment, replying to a comment, and liking it). We do not introduce an additional authentication mechanism

- All performed actions should work and be remembered within a single application session. After refreshing the view, it should return to its initial state

- The comments counter should show the actual number of added comments. After adding a new comment, this number should be updated

- The likes counter should have a value greater than 0 defined in the comment database. After clicking the heart, the comment is liked, and the counter increases by 1. After clicking again, the comment is "unliked," and the counter is updated again

- The user has the ability to change the way comments are sorted. The default sorting method is from the newest. The second possible option to choose is sorting from the most liked. It is worth noting that the sorting applies only to top-level comments, so we do not take into account comments that are replies.

- Use Redux Toolkit to manage the state in the project. All state changes made by the user while using the application should be reset after refreshing the page

- The page should be properly displayed on any type of device (remember to test responsiveness for all resolutions and on a physical mobile device)

- The page should have properly handled interactive elements such as links or buttons (the user should feel that something is happening when hovering over an interactive element)

Remember that when evaluating the task, the visual effect, logical correctness, and code cleanliness will be important. Good luck!

# Code Example/Issues 🔍

If you have any issues, please let me know in the issues section or directly to blazycablazej@gmail.com

<!-- # Planned Features -->

# Installation 💾

```bash

git clone ...

npm install

npm start

```
