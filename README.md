# Basic Angular 4 ES6

### No TypeScript, no build-process, ES6 browsers only

Do you find TypeScript a faff? Bored of waiting for build-processes to complete?
Do you want to develop your Angular app old-school-style, by just editing source
files and immediately hitting refresh in your browser? And do we really have to
run a weird little server on the dev machine? Surely the file:// protocol ought
to suffice?!

Your development browser runs ES6 fine (except `import` and `export`) right? So
why bother transpiling to ES5 until you’re ready to create a production build?

And do you find most Angular projects are weighed down by hundreds of mysterious
files? So many moving parts! So many things to go wrong!

If you answered “yes”, then this is the repo for you. You can fork it and get
going right away, or follow the steps detailed below:

1. Create a GitHub repo for the app
2. Clone the app to your dev machine
3. Install dependencies from NPM
4. Create directories and files
5. Move useful files to ‘lib/’
6. Create ‘index.html’
7. Create ‘main.js’
8. Create ‘src/app/wrap/WrapComponent.js’
9. Create ‘src/app/wrap/WrapModule.js’
10. Create ‘.gitignore’
11. Create ‘README.md’
12. Commit and push


## Creating your app from scratch

### Create a GitHub repo for the app

1. Sign in at https://github.com/login
2. Click the green ‘New’ button
3. Choose a repository name, eg ‘app-name-all-lowercase-and-hyphens’
4. Write a short description, eg ‘A VR art gallery in A-Frame and Angular’
5. No README
6. No .gitignore
7. Add a license — I usually go for ‘MIT License’
8. Click ‘Create repository’
9. Settings > Options > GitHub Pages > Source, change ‘None’ to ‘master branch’
10. Click ‘Save’. Copy the URL after “Your site is published at ...”
11. Click the ‘Code’ tab and the ‘Edit’ button opposite your description
12. Paste your URL into the ‘Website’ box, and click ‘Save’
13. Click ‘Add topics’, eg ‘vr gallery webvr a-frame angular’, and click ‘Done’
14. Click the green ‘Clone or download’ button on the main screen
15. Click the ‘Copy to clipboard’ icon - it should say “Copied!”


### Clone the app to your dev machine

```bash
git clone [ paste your URL here ] && cd $(basename $_ .git)
npm init
```
__name:__ Hit enter to accept the default name  
__version:__ 0.0.1  
__description:__ Same as in GitHub, eg ‘A VR art gallery in A-Frame and Angular’  
__entry point:__ main.js  
__test command:__ node ootility/ootest.js  
__git repository:__ Hit enter to accept the default URL  
__keywords:__ Same as GitHub topics, eg ‘vr gallery webvr a-frame angular’  
__license:__ Same as you chose in GitHub, eg MIT  


### Install dependencies from NPM

```bash
                                                     # version  MB  items  repos
npm install core-js --save                           # 2.4.1   2    1406   1  
npm install rxjs --save                              # 5.4.0   3.1  1435   2  
npm install zone.js --save                           # 0.8.11  1    79     1  
npm install @angular/core --save                     # 4.1.3   5.1  155    1  
npm install @angular/common --save                   # 4.1.3   1.6  73     1  
npm install @angular/compiler --save                 # 4.1.3   9.8  231    1  
npm install @angular/platform-browser --save         # 4.1.3   1.7  96     1  
npm install @angular/platform-browser-dynamic --save # 4.1.3   0.1  51     1  
npm install @angular/router --save                   # 4.1.3   2.3  81     1  
npm install @angular/forms --save                    # 4.1.3   1.9  54     1  
npm install @angular/http --save                     # 4.1.3   1    55     1  
```
...This should take about 60 seconds.


### Create directories and files

```bash
mkdir asset dist lib src src/app src/app/wrap src/demo src/test support
touch src/app/wrap/WrapComponent.js src/app/wrap/WrapModule.js
```


### Move useful files to ‘lib/’

```bash
cp node_modules/core-js/client/shim.min.js lib/shim.min.js
cp node_modules/rxjs/bundles/rx.min.js lib/rx.min.js
cp node_modules/zone.js/dist/zone.min.js lib/zone.min.js
cp node_modules/@angular/core/bundles/core.umd.min.js lib/core.umd.min.js
cp node_modules/@angular/common/bundles/common.umd.min.js lib/common.umd.min.js
cp node_modules/@angular/compiler/bundles/compiler.umd.min.js lib/compiler.umd.min.js
cp node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js \
   lib/platform-browser.umd.min.js
cp node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js \
   lib/platform-browser-dynamic.umd.min.js
cp node_modules/@angular/router/bundles/router.umd.min.js lib/router.umd.min.js
cp node_modules/@angular/forms/bundles/forms.umd.min.js lib/forms.umd.min.js
cp node_modules/@angular/http/bundles/http.umd.min.js lib/http.umd.min.js
```
...the size of ‘lib/’ is 1.4 MB for 11 items.


### Create ‘index.html’

```html
APP_NAME=$(node -p '(require("./package.json")).name')
APP_TITLE=$(node -p '(require("./package.json")).name.split("-").map(x=>x[0].toUpperCase()+x.slice(1)).join(" ")')
APP_KEYWORDS=$(node -p '(require("./package.json")).keywords.join(" ")')
APP_DESCRIPTION=$(node -p '(require("./package.json")).description')
echo '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>'$APP_TITLE'</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="'$APP_DESCRIPTION'">
  <meta name="keywords" content="'$APP_KEYWORDS'">

  <link rel="stylesheet" href="asset/'$APP_NAME'.css">

  <!-- 3rd Party libraries -->
  <script src="lib/shim.min.js"></script>
  <script src="lib/zone.min.js"></script>
  <script src="lib/rx.min.js"></script>

  <!-- Angular libraries -->
  <script src="lib/core.umd.min.js"></script>
  <script src="lib/common.umd.min.js"></script>
  <script src="lib/compiler.umd.min.js"></script>
  <script src="lib/platform-browser.umd.min.js"></script>
  <script src="lib/platform-browser-dynamic.umd.min.js"></script>
  <script src="lib/router.umd.min.js"></script>
  <script src="lib/forms.umd.min.js"></script>
  <script src="lib/http.umd.min.js"></script>

  <!-- App modules -->
  <script src='src/app/wrap/WrapComponent.js'></script>
  <script src='src/app/wrap/WrapModule.js'></script>
  <script src='main.js'></script>

</head>
<body>
  <app-wrap>Loading...</app-wrap>
</body>
</html>' > index.html
```


### Create ‘main.js’

```js
echo //main.js'
!function(APP) {

document.addEventListener("DOMContentLoaded", () =>
    ng.platformBrowserDynamic
       .platformBrowserDynamic()
       .bootstrapModule(APP.WrapModule)
)

}( this.APP || (this.APP={}) )//' > main.js
```


### Create ‘src/app/wrap/WrapComponent.js’

```js
echo //src/app/wrap/WrapComponent.js'
!function(APP) {

APP.WrapComponent = class {
    static get annotations() {
        return [
            new ng.core.Component({
                selector: "app-wrap",
                template: `
<h1>'"$APP_TITLE"'</h1>
`
            })
        ]
    }

    constructor () {}
}

}( this.APP || (this.APP={}) )//' > src/app/wrap/WrapComponent.js
```


### Create ‘src/app/wrap/WrapModule.js’
```js
echo //src/app/wrap/WrapModule.js'
!function(APP) {

APP.WrapModule = class {
    static get annotations() {
        return [
            new ng.core.NgModule({
                imports:      [ ng.platformBrowser.BrowserModule ]
              , declarations: [ APP.WrapComponent ]
              , bootstrap:    [ APP.WrapComponent ]
            })
        ]
    }

    constructor () {}
}

}( this.APP || (this.APP={}) )//' > src/app/wrap/WrapModule.js
```
...At this point, opening ‘index.html’ in your (modern, not IE11) browser should
show your app’s name. You can just double-click ‘index.html’ and use ‘file://’
protocol — no need to set up a local server.


### Create ‘.gitignore’
```bash
echo '
.DS_Store
Thumbs.db
node_modules
*.log
.~lock*' > .gitignore
```


### Create ‘README.md’
```bash
APP_AUTHOR=$(node -p '(require("./package.json")).author')
APP_YEAR=$(date +"%Y") # eg '2017'
echo "# $APP_TITLE

### $APP_DESCRIPTION

Author: $APP_AUTHOR  
Year: $APP_YEAR  

" > README.md
```


### Commit and push
```bash
git add .
git commit -am '0.0.1 With minimal working Angular'
git push
```
