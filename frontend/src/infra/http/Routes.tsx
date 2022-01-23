import React from "react";
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom'
import {Home} from "../../presentation/pages/Home";

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}
