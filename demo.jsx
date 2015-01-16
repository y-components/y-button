/** @jsx React.DOM */
'use strict';

var React = require('react');
var YButton = require('./index.jsx');

React.render((
    <div>
        <YButton>
            Default
        </YButton>
        <YButton size="xs">
            XS size
        </YButton>
        <YButton size="s">
            S size
        </YButton>
        <YButton size="m">
            M size
        </YButton>
        <YButton size="l">
            L size
        </YButton>
    </div>
), document.getElementById('content'));
