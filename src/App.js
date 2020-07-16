import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import AddProductPage from './pages/AddProductPage';

import PrivateRoute from './helpers/PrivateRoute';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/'>
                        <LoginPage />
                    </Route>

                    <PrivateRoute path='/products'>
                        <AddProductPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
