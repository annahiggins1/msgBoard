# msgBoard
Basic message board


Key Components:
App.js: Combines all the functionality together
Posts.js: Displays all of the past messages
AddPost.js: Functionality to add a post to the message board
Backend: The messages are stored in supabase database. This allows for multiple devices
to upload to the message board, and be able to see the past messages from any users.

Quick Start:
1. make sure the directory is my-app (in terminal: cd my-app)
2. in terminal, launch the app (npm start)

Extra Features:
- Because the word length can't be beyond 128 characters, I implemented a feature that shows
the word count of your current message in the text bar, and if it goes over 128 words it is red-colored to suggest an error.
