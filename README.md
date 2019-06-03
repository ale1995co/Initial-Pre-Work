# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser goes through the DNS from my computer. The DNS will ask for IP address. Then the browser will receive the IP address to get connected with the server.
The browser sends an HTTP request the server. Server handles the request and response back to the browser. Then the browser receive the HTML page and close the connection of
server.
Sources- https://pressidium.com/blog/2016/how-the-web-works-what-happens-when-you-visit-a-url/
https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a
## From start to finish, how does data reach you to be rendered in the browser?
Data is send through as packets through the internet's bandwidth. When the browser initiates a TCP connection with the server. The server and client exchange data packets with each other.
After this step, I don't have the knowledge to explain how the data reach me.
source:
https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a

## What code is rendered in the browser?

HTML, CSS, and JavaScript are rendered in the browser.
source: https://www.pcmag.com/encyclopedia/term/61819/browser-rendering-engine
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/
## What is the server-side code’s main function?

The main function to design websites that process or user request that is run on the originating server. The action takes place on a web server. This is referred as back-end.
Source- https://skillcrush.com/2012/07/30/client-side-vs-server-side/
source- https://www.computerhope.com/jargon/s/server-side-scripting.htm
https://skillcrush.com/2012/07/30/client-side-vs-server-side/
https://www.codeconquest.com/website/client-side-vs-server-side/

## What is the client-side code’s main function?

The main function is that it run scripts on your computer after loaded a web page.   The action takes place on the user's computer. This is referred as front-end.
Source- https://skillcrush.com/2012/07/30/client-side-vs-server-side/
https://www.codeconquest.com/website/client-side-vs-server-side/


## What is runtime?

Runtime is when a program is running. When a program is running in a computer, this is considered runtime.
source- https://searchsoftwarequality.techtarget.com/definition/runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I don't see a clear answer but I think it depends on how much the client-side want to do and based on internet traffic.  Client-side coding requires user interaction.
source: https://www.codeconquest.com/website/client-side-vs-server-side/
## How many instances of the server-side code are available at any given time?
I don't see a clear answer but I think it depends on how much the server-side want to do and based on internet traffic. Server-side coding is good for that required dynamic data to be loaded.
source- https://www.codeconquest.com/website/client-side-vs-server-side/


## How many instances of the databases connected to the server application are created?
Based on SQL Server Database Engine, there's appear to be no limit of databases connected to a server. I'm not familiar with databases to get a clear answer.
sources:https://en.wikipedia.org/wiki/Database_connection
https://docs.microsoft.com/en-us/sql/relational-databases/lesson-1-connecting-to-the-database-engine?view=sql-server-2017
