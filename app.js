import Vue from 'vue'
import App from './App.vue'

function renderRoot(createElement) {
    return createElement(App);
}

// export a factory function for creating fresh app, router and store
// instances
export function createApp (context) {
    console.log("inside app creation function");
    console.log("context here is " + JSON.stringify(context, null, 4));

    const app = new Vue({
        render: renderRoot,
        ssrContext: context
    });

    return {
        app: app
    };
}
