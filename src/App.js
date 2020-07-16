import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/'>
                        <LoginPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
