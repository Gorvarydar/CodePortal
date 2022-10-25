import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErorrBoundary';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/UI/ThemeProvider';

import App from './app/App';
import 'shared/config/i18n/i18n';

render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root'),
);
