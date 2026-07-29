# HoverRead
#### Video Demo:  <https://youtu.be/HdeCwl6Q5zU>
#### Description:
Hi! This is my cs50 final project that I named HoverRead. It is a great tool for people with weak eyesight and people with other eye problems who cannot see very clearly.
HoverRead is a chrome extension that can be used in chrome by anyone!

# How To Use:
Here are the steps on how to use HoverRead:
1: Install the extension using developer mode in 'chrome://extensions'.
2: Go to the webpage where you wish to use this extension.
3: Click on extensions button and click on HoverRead.
4: Click on the Activate Button that has appeared.
5: Now hover over your desired text that you want to view in bigger size and better contrast.
6: Click on Deactivate zoom after you have done using the Extension.


# Features:
- Zooms in and Enlarges the Text on which the user hovers over.
- The background of the zoomed text always turns black for better readability and contrast.
- The Text is also highlighted for better readability.

# Files Explained:

- popup.html:
This file is the default page which the user is directed to when the extension is clicked. It contains the "Activate Button".
- popup.js:
This is a javascript file which contains the logic of the "Activate" Button used in popup.html.
- manifest.json:
The manifest.json is the configuration file required by every Chrome extension. It tells the browser what the extension is, what it can access and how it behaves.
- content.js:
This is the main logic file of the whole extension. It contains the code which makes up the zoom-on-hover behavior. It is the main javascript file on  almost all the extensions.
- bg.js:
There is nothing in the bg.js file. It is only there because chrome requires a background service worker file to exist.
- styles.css:
This file was left empty as I wanted to keep things simple. If I plan on having a better design for the extension ui, I can always use this css file.
- fav.png:
It contains the icon of the extension.


# Technologies Used:
- HTML, CSS, JavaScript.
- Chrome Extension APIs (manifest v3, content scripts).

# Problems Faced:

1:Use the Chrome Extension Manifest v3 format
2:Inject and control content scripts on web pages
3:Communicate between the popup and content scripts using messaging
4:Dynamically change styles and restore them using JavaScript DOM manipulation
5:Handle edge cases like elements without text, or restricted pages where extensions can’t inject scripts


## AI Acknowledgment:
Some parts of this project were developed with guidance from ChatGPT (OpenAI), including help with content script logic, style tuning, and error handling. All code was tested and fully understood by me.

## Author:
Ahmed Saleem
