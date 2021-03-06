/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import {
    createMuiTheme,
    createGenerateClassName
} from '@material-ui/core/styles';

// Create a theme with Gatsby brand colors. You can choose your own
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3949ab',
            light: '#6f74dd',
            dark: '#00227b',
        },
        secondary: {
            main: '#b39ddb',
            light: '#e6ceff',
            dark: '#836fa9',
        }
    }
});

function createPageContext() {
    return {
        theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName()
    };
}

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext();
    }

    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext();
    }

    return global.__INIT_MATERIAL_UI__;
}
