import { createApp } from './app'

function serverEntryPoint(context) {
    const { app } = createApp(context);
    return app;
}

export default serverEntryPoint;
