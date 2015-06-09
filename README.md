##Welcome to my UrbanYoga clone challenge!

I know the instructions said to have the page looking like the image on load, but I wanted to add in some extra functionality, so first click the dashboard tab, then the business overview subtab to see what I have created.

Some info about what I did:

- I consumed both APIs in the bonus challenge for dynamic data, found here in my Sinatra web app. If you clone the files, run bundle install, and then shotgun, you can find the site at [http://localhost:9393].
- If you check out my GitHub branch gh-pages, you will find the code for the hard coded website, which can be viewed at [http://briemarie.me/homework], which is good for viewing on smartphones. *This is however an incomplete version as I wanted more time to work on the Sinatra version.
- I coded and tested the website to be cross-browser compatible across Chrome, Safari, Firefox, and IE8 (the Chrome version is by far the cleanest looking one, with IE8 having had some minor styling compromises).
- You may see JavaScript errors appear in the console when clicking links. These are not really errors, but rather a scripting choice of adding `href="javascript: return false;"` so that links would not cause page ups when clicked in IE.
- You may notice some small sections of CSS that repeat, which was a choice I made in order to keep the code compartmentalized by page sections and functionalities.
- The only external library I used for styling was Bootstrap, and all of my JavaScript functions are jQuery.

I think that just about covers it. Please let me know if you have any questions or comments. I have enabled issues on the repo as well.


