# msgBoard
Basic message board


Key Components:
- App.js: Combines all the functionality together
- Posts.js: Displays all of the past messages
- AddPost.js: Functionality to add a post to the message board
- Backend: The messages are stored in supabase database. This allows for multiple 
devices to upload to the message board, and be able to see the past messages from 
any users.
- ThemeButton.js: Allows for the theme to be switched to and from light mode and dark mode.

Quick Start:
1. Make sure npm (in terminal: npm install) and Node.js (download from online) are installed
2. Make sure the directory is my-app (in terminal: cd my-app)
3. In terminal, launch the app (npm start)



Extra Features:
- Because the word length can't be beyond 128 characters, I implemented a feature 
that shows the word count of your current message in the text bar, and if it goes
over 128 words it is red-colored to suggest an error.
- I also implemented theme switching functionality (ex. light mode and dark mode), 
used in the top left corner, hit the moon icon to use dark mode, and the sun icon
to use light mode.
