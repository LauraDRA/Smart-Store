# Smart Store

This project has two main parts: Client and Server (API Rest)

## CLIENT
This project was implemented by using Angular (v7.2) and the library Redux, in particular, store and effects functionalities.
In orde to fetch data from the API, it was used angular/http.
And it was included several components from Material library, as spinner, expansion panel or card element.

The main components in this Client proyect are *phoneListContainer* and *phoneDetail*, both are called by the routing.

About the store's design, it was design for store all the application's status, from the phones that are loaded in the list, until the errors or exceptions that could be happen, as follows:

* state -> smartphones
   * phones: array of phones to shown in main list.
   * loaded: knows load state.
   * loading: knows if data is now loading.
   * pageNumber: current page number.--
   * pageSize: current page size of elements.
   * error: storages http error.

* state -> smartphone
   * phone: specific phone to shown its details.
   * loaded: knows load state.
   * loading: knows if data is now loading.
   * error: storages http error.
   
About how effects work, they listen when a component ask for dates to the store, which needs make a request to the API of server.
When a effect has these dates, it will send to the store in other atomic action.
      

   ### Strcuture:
         
   This Client proyect is located in *client* folder and it has the follow hierarchy :
   
   * src/: source code of this proyect
        * app/: main code folder
            * phone/: app structure to implements all about phones
                * phone-detail/
                * phone-list/
                    * phone-card/
                    * phone-list-container/
                * store/ 
                    * actions/
                    * effects/
                    * reducers/
                * phone.interface: phone data structure 
                * phone.module
                * phone.service: service to get phone data from API
            * shared: module and components to shared on all project
                * error-element/: error card component
                * header/: header component
                * shared.module
            * app.component
            * app.effects
            * app.module
            * app.reducers
            * app-routing
            * material.module
        * enviroments: environment configuration files
        * index.html: main html file
        * others: configuration files
   
   * tslint.json: TypeScript Linters used in the project.
   * others: configuration files.
   
 ### Stability 
  The current stable branch is **master**.
      
  ### Installing
 
 First install npm and node. Then:
 
 ```bash
 $ npm install
 ```

### Run

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Also, to analyse the coverage of unit tests, run `ng test --code-coverage` and generate a report in *coverage/index.html*.

## API REST
   This is a basic API that generates one hundred random items with information about phones.
   
### Structure
   This project is located in *api* folder and it has the follow hierarchy :
   Structure:
   * src/: source code of this project
      * app.js: setting and start server.
      * routes.js: definition of endpoints API
      * api/: will content several modules, each module has an *index.js*, that defines the endpoints of the resource, and a *controller.js*, that implements the functions of each endpoint.
      * db/db.js: dummy data base, where it was generated random data about phones.
   
### Stability 
  The current stable branch is **master**.
      
### Installing
   
   First install npm and node. Then:
   
   ```bash
   $ npm install
   ```

### Run

   Run the API with the next command:

```bash
$ npm start
```
or
```bash
$ npm run start
```

Note: while using npm start the application refresh itself, so you don't need to stop the server in order to see the changes you've made to the code.