# Tonic Todo App Challenge

## Instructions:

1. After cloning the repo, run `pnpm install` to install dependencies.
2. Run `pnpm start` to start.
    - Note: if it doesn't open automatically, navigate to `https://localhost:3000` in your browser.
3. You should see a list of user names. Click on one to see their todos (they all start without any)
4. To add a new todo item: Click the `+` button, type something in, then hit enter.
5. To update an existing todo:
    - Mark as complete: click the checkbox.
    - Edit Text: click the text, type something in, then hit enter.
    - Delete: click the circled x button to the right of the text.
6. To switch users, click the logout button in the top right

### Time Spent:

- Just over 2 hours (~2:15) total over the course of 3 hours (multiple breaks)
- I am not including choosing tools & setting up the workspace in that time. I did that before starting the timer, and
  that included:
    - Repo setup and workspaces configuration
    - Running `create-react-app` & `nest new`
    - Installing dependencies (tailwind, flowbite, react-query, etc)
    - Configuring tailwind / flowbite
    - Copying prettier & eslint config from backend to frontend for consistency in formatting
    - Setting the port and enabling cors in the backend
    - Resolving some type errors in the test files of the React app
- I also did not include the time spent writing this readme in that time.
- The `main` branch was cut off around the time mentioned above. I still wanted to do some clean up for my own sanity
  though. That is on a separate branch called `overtime`. That branch is ~20 minutes of UI cleanup.

### What I do differently in real-world scenarios:

1. Tests
    - I like to follow TDD practices when time and budget allow.
2. Code cleanliness
    - Given the time constraint, there was a lot of jumping around, and a lot of 'quick and dirty' code. I would
      normally
      go back over each piece as I write it to consider edge cases, remove unnecessary styles/code, and generally just
      make things more readable and maintainable.
3. Error handling
    - I usually work with a mindset of planning for failure, making sure that any potential error that matters is
      accounted for. Obviously, I didn't have time to do that here.
4. Docs
    - I love good TSDocs/JSDocs for important pieces of logic that others (or my future self) will use a lot, and I
      usually add inline comments here and there, where things might be misinterpreted or are just not obvious.
5. Real Auth
    - I would never use a mock auth solution like this in a real app. I would use a JWT at the very least, and almost
      certainly use an auth provider.
6. Real Database
    - I would never hold data in memory like this in a real app. A server like this should be stateless, and the data
      should be persisted in a database. I could see using either a relational or a document database for this,
      depending on the needs of the app, but since the data is simple and relational, I would probably go with a
      relational solution.
7. Style & Design
    - I would spend more time on styling. Much of the time, I work with professional designers and set up the theme to
      match their designs. When I don't, I usually spend a lot more time on the design and styling.

## Decisions:

### What to focus on?

- I decided to focus on logic and functionality over UI. I have examples of my styling/css skills on my portfolio, and
  this whole process is about gaining more insight into my process. Focusing on logic provides much more insight into my
  problem-solving then styling. Besides, since I used tailwind, I could always easily get stying in later if I had time.
- Since routing was required, I had to decide whether I wanted to route for auth purposes or for narrowing in on the
  todo functionality (i.e. adding more details to items, or creating todo categories / sub-lists). I decided to go with
  auth routing since 99.9% of apps have some sort of auth, so I thought it would help to show how I might handle it
  in a simplified, mock scenario. It also just felt wrong not to include it

### Frontend Tools:

- Framework: It was indicated by the instructions, so no decision there.
- State Management:
    - With the time constraints, I knew I wouldn't have time to implement the sort of fully robust solution that I would
      in a real-world scenario. I had to go with either relying on local state for interactivity and syncing with the
      backend periodically, or relying on a connection to the backend for full interactivity.
    - I decided to go with the latter, because in this particular scenario, I knew I wouldn't have time to implement
      error
      notifications, I thought it would be better for it to be obvious that the app was not fully functional, rather
      than
      have it appear to be functional, but not actually be syncing changes to the server.
    - I decided to go with react-query since it has great support for caching and refetching based on updates. It also
      has a great api for handling loading and error states. I didn't have time to utilize those as much as I would have
      liked, but they were still useful.
    - Why go with a provider for the User and a hook for the Todos? For one, I wanted to show that I could use both
      effectively, but I also because in a real app, the user would likely need to be available in many places, whereas
      the todos would only be needed in the todo list.
- Routing: I used react-router-dom, as it is by far the most popular router for react, and I have used it before. It is
  simple and easy to use.
- Styling: I knew I wanted to try something tailwind-based. I decided to give Flowbite a try. I didn't have time to do
  much interesting with it, and it had a few quirks that slowed me down a bit, but it worked. I will probably go with
  something else next time.

### Backend Tools:

- Framework: I chose NestJS because it's just an incredible tool. The cli tools make creating new endpoints and
  resources remarkably easy, and the validation, pipe, and guard features just make it so easy to write clean, robust,
  and secure code. It's really easy to 'think in Nest', and it's much more scalable and feature rich than raw express in
  my opinion.
- Validation: I went with class-validator because it's effective and very quick and easy. I always use it with NestJS.
  




