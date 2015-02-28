/** @jsx React.DOM */
'use strict';

var React = require('react');
var YButton = require('./index.jsx!');

React.render((
    <div>
        <YButton disabled>
            Disabled
        </YButton>
        <br/><br/>
        <YButton size="xs">
            XS size
        </YButton>
        <br/><br/>
        <YButton size="s">
            S size
        </YButton>
        <br/><br/>
        <YButton size="m">
            M size
        </YButton>
        <br/><br/>
        <YButton size="l">
            L size
        </YButton>
        <br/><br/>
        <YButton size="l" view="action">
            Active
        </YButton>
    </div>
), document.getElementById('content'));
