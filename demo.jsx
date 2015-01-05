/** @jsx React.DOM */
'use strict'

var React = require('react');
var YButton = require('./index.jsx');

React.render((
    <YButton>
        Hello Button!
    </YButton>
), document.getElementById('content'));
