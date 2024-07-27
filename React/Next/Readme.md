# Next.js - https://nextjs.org/docs

# Start the project 
## First you need create the project so you do
    npx create-next-app@latest
this code start the project and question about the project and you config

# Route
### In Next.js the route is map using a simple way exist two type of route "App Router" and "Pages Router"
# Pages Router
### let's talk about the "Pages Router", for use this router we need create a folder with the name "pages" and for use this method only need put the page what you want in the folder pages, the tree is stay like that
- .next
- public
- pages
    - SomeFolder
        - index.js
        - home.js
    - index.js
## Some things to note
- In this case the .js/.tsx index is the page origin if you seach empty (127.0.0.1:8000/) and if have a folder that folder enter in html so in this case stay 127.0.0.1:8000/SomeFolder/ or 127.0.0.1:8000/SomeFolder/home
- this is the basic stucture for a page in pages router
    ```typescript
    export default function Page() {
        return <h1>Hello, Next.js!</h1>
    }
    ```
- is possible define global layout only need put _app.tsx inside the folder pages, stay tree like that and the basic code
    - .next
    - public
    - pages
        - _app.tsx
        - index.js

    ```typescript 
    import type { AppProps } from 'next/app'
    
    export default function App({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />
    }
    ```
- _document.tsx
- To create Dynamic Segment you put the name of file betwen [], example [home].js

# App Router
### now about the "App Router", for this you need create the folder "app" ...., the tree is stay like that
- .next
- public
- app
    - layout.tsx
    - page.tsx
    - SomeRoute
        - page.tsx
        - layout.tsx
## Some things to note
- You need create the layout.tsx what is the root layout of you aplication (if you not create he is create automatic for the next he start the server) and put in the basic layout with the tag html and body, stay
    ```typescript
    export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
      )
    }
    ```
- and this is the basic stucture for a page in app router
    ```typescript
    export default function Page() {
        return <h1>Hello, Next.js!</h1>
    }
    ```
- In this case the app need the page and layout same i talk above and if have some folder inside this folder need have this two file
- ### Important about the route in app
    - the url only is presence to go if you have page.tsx ou route.tsx
    - the url only go if you not name the folder with the beggin "_" example "_someFolder"
    - if you name betwen (), example (someFolder), the url not work, i do a example:
        - app
        - layout.tsx
        - page.tsx
        - (SomeFolderI) - this path not go to url
            - layout.tsx
            - page.tsx
            - SomeFolderII
                - layout.tsx - /SomeFolderII/ and not /SomeFolderI/SomeFolderII/
                - page.tsx
    - To create Dynamic Segment you put the name of folder betwen [], example [SomeFolder]

# public
the public folder to store static assets such images, fonts, etc., stay 
- .next
- public
- app
- public
## Some things to note
- files inside public directory can then be referenced by your code starting from the base URL ...

# Next.js Project Structure
This page in the url https://nextjs.org/docs/getting-started/project-structure show most file/folder in project and what is (quick resume) and what form you can make this .js, .tsx

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
