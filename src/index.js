import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Homepage, Bookingpage } from './App';

ReactDOM.render(
    <Router>
       <Routes>
		    <Route exact path="/" element={<Homepage/>}></Route>
			<Route exact path="/bookatable" element={<Bookingpage/>}></Route>
	    </Routes>
    </Router>,
    document.getElementById('root')
);
