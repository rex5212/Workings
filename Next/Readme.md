#### Next.js
https://nextjs.org/docs

### create project
    npx create-next-app@latest nextjs-blog --use-npm --example https://github.com/vercel/next-learn/tree/master/basics/learn-starter

"nextjs-blog" is your project name, you can change it to whatever you like
"npx" install the libraly what you specific
"--example" make the build with the referc basic by that one url you specific

### props (props is a usualy form to write)
    for get/insert a value in the element you need say what value and a call for this value in that object you can recive
    for exemple you say titulo="pagina 1", this word must be in the begining while you open the index page, so in index you say what the value what that container can be in one elements inside her
    Exemple in ./learn-next-js/pages/index.js for ./learn-next-js/components/Pagina.js
## children 
    is a element inside the component with the component may or may not have a props value
    Exemple in ./learn-next-js/pages/index.js in <Pagina></Pagina>

### npm run dev
   Start the server
    Starts the development server.

### npm run build
    Builds the app for production.

### npm start
   Run the script in package.json
    Runs the built app in production mode.

### Components
    All file in the folder components have the first letter in Uppercase
## Import Libaly
   # ReactBootstrap
    npm i react-bootstrap bootstrap - Import the bootstrap style, the documetation for this is in https://react-bootstrap.github.io/getting-started/introduction/
    variant="" is equal a class to change the bootstrap but is only used to change the color
    import 'bootstrap/dist/css/bootstrap.min.css'; All time use this import for build and load the css style

    npm i axios - to make html request

### Extension
    White the extension ES7+, you only need write word "rafce"
    Aut
    

### Other and small tring
    Fragment = <></> - This empty element make the elements inside he be count how one elements
    You make one JSX file, in this file the class is write className, class is a word used in JS for create one class
    style.components is the css used in nest.js which you can open many css rules/scripts and select between her with a point
    npm i axios - make request
    Crtl + D 

### Pay Respect
                <ListGroup>
                Gênero:
                {getGenresNames(item.genre_ids).map(genreName => (
                    <ListGroup.Item key={genreName}>{genreName}</ListGroup.Item>
                ))}
                </ListGroup>
