//src/app/wrap/WrapModule.js
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

}( this.APP || (this.APP={}) )//
