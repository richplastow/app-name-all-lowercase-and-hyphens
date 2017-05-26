//src/app/wrap/WrapComponent.js
!function(APP) {

APP.WrapComponent = class {
    static get annotations() {
        return [
            new ng.core.Component({
                selector: "app-wrap",
                template: `
<h1>App Name All Lowercase And Hyphens</h1>
`
            })
        ]
    }

    constructor () {}
}

}( this.APP || (this.APP={}) )//
