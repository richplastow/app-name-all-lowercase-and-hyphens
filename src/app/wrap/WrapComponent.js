//src/app/wrap/WrapComponent.js
!function(APP) {

APP.WrapComponent = class {
    static get annotations() {
        return [
            new ng.core.Component({
                selector: "app-wrap",
                template: `
<div class="card card-block">
  <h1 class="card-title">App Name All Lowercase And Hyphens</h1>
</div>
`
            })
        ]
    }

    constructor () {}
}

}( this.APP || (this.APP={}) )//
