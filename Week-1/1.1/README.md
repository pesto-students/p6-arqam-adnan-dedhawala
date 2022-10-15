# When a user enters an URL in the browser, how does the browser fetch the desiredresult ?

When a user enters an URL in the browser

- The browser checks the cache for a DNS record to find the corresponding IP address of the url.
  - DNS(Domain Name System) is a database that maintains the name of the website (URL) and the particular IP address it links to.
- If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts url.
  - ISP is Internet Service Provider.
  - The purpose of a DNS query is to search multiple DNS servers on the internet until it finds the correct IP address for the website.
- The browser initiates a TCP connection with the server.
  - Once the browser receives the correct IP address, it will build a connection with the server that matches the IP address to transfer information.
  - To transfer data packets between your computer(client) and the server, it is important to have a TCP connection established. This connection is established using a process called the TCP/IP three-way handshake. This is a three-step process where the client and the server exchange SYN(synchronize) and ACK(acknowledge) messages to establish a connection.
- The browser sends an HTTP request to the webserver.
  - Once the TCP connection is established, it is time to start transferring data!
  - The browser will send a GET request asking for the web page. Requests can be POST,PUT,PATCH,DELETE as well!
  - This request will also contain additional information such as browser identification (User-Agent header), types of requests that it will accept (Accept header), and connection headers asking it to keep the TCP connection alive for additional requests. It will also pass information taken from cookies the browser has in store for this domain.
- The server handles the request and sends back a response.
  - The server contains a webserver (i.e., Apache, IIS) that receives the request from the browser and passes it to a request handler to read and generate a response.
  - The request handler is a program (written in ASP.NET, PHP, Ruby, etc.) that reads the request, its’ headers, and cookies to check what is being requested and also update the information on the server if needed.
  - Then it will assemble a response in a particular format (JSON, XML, HTML).
- The server sends out an HTTP response.
  - The server response contains the web page you requested as well as the status code, compression type (Content-Encoding), how to cache the page (Cache-Control), any cookies to set, privacy information, etc.
- The browser displays the HTML content. - The browser displays the HTML content in phases. First, it will render the bare bone HTML skeleton. - Then it will check the HTML tags and send out GET requests for additional elements on the web page, such as images, CSS stylesheets, JavaScript files, etc. - These static files are cached by the browser, so it doesn’t have to fetch them again the next time you visit the page.
  ![browser server communication diagram](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works/simple-client-server.png)

## What is the main functionality of the browser?

- A web browser, also known as a “browser,” is an application software that allows users to find, access, display, and view websites. Microsoft Internet Explorer, Google Chrome, Mozilla Firefox, and Apple Safari are all popular web browsers.
- A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them.

## What are High Level Components of a browser?

1. The user interface
   - this includes the address bar, back/forward button, bookmarking menu, etc.
   - Every part of the browser display except the window where you see the requested page.
2. The browser engine
   - marshals actions between the UI and the rendering engine.
3. The rendering engine
   - responsible for displaying requested content.
4. Networking
   - for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. UI backend
   - used for drawing basic widgets like combo boxes and windows.
   - This backend exposes a generic interface that is not platform specific.
   - Underneath it uses operating system user interface methods.
6. JavaScript interpreter
   - Used to parse and execute JavaScript code.
7. Data storage - The browser may need to save all sorts of data locally, such as cookies. - Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
   ![browser components](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=1000)

## What is rendering Engine and what is its use?

- A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS).

## Parsers and Processors (HTML, CSS, etc)

- The input to the HTML parsing process consists of a stream of code points, which are then passed through a tokenization stage followed by a tree construction stage to produce a Document object as an output.
- Mostly, the data handled by the tokenization stage comes from the network, but it can also come from a script running in the user agent, e.g. using the document.write() API.
- The tokenizer and the tree construction stage have only one set of states, but while the tree construction stage is working with one token, the tokenizer can be resumed.
- Because of this tree construction stage is often considered reentrant. To handle such cases, parsers have a script nesting level, which must initially be set to 0 and a parser pause flag, which must be initialized to false.
  ![HTML Parser](https://media.geeksforgeeks.org/wp-content/uploads/20200516001841/Untitled-Diagram107.png)

## Render-tree Construction, Layout, and Paint

- The DOM and CSSOM trees are combined to form the render tree.
- Render tree contains only the nodes required to render the page.
- Layout computes the exact position and size of each object.
- The last step is paint, which takes in the final render tree and renders the pixels to the screen.
  ![tree structure](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/b6Z2Gu6UD1x1imOu1tJV.png?auto=format&w=1600)

- Construction of render tree
  1. Starting at the root of the DOM tree, traverse each visible node.
  2. For each visible node, find the appropriate matching CSSOM rules and apply them.
  3. Emit visible nodes with content and their computed styles.
- The final output is a render tree that contains both the content and style information of all the visible content on the screen. With the render tree in place, we can proceed to the "layout" stage.
- The output of the layout process is a "box model," which precisely captures the exact position and size of each element within the viewport: all of the relative measurements are converted to absolute pixels on the screen.
- Finally, now that we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as "painting" or "rasterizing."
- The time required to perform render tree construction, layout and paint varies based on the size of the document, the applied styles, and the device it is running on: the larger the document, the more work the browser has; the more complicated the styles, the more time taken for painting also (for example, a solid color is "cheap" to paint, while a drop shadow is "expensive" to compute and render).

##### References

- https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
- https://www.hubspire.com/web-browser-concept-and-functions/
- https://web.dev/howbrowserswork/
- https://developer.mozilla.org/en-US/docs/Glossary/Rendering_engine
- https://www.geeksforgeeks.org/html-parsing-and-processing/
- https://web.dev/critical-rendering-path-render-tree-construction/
