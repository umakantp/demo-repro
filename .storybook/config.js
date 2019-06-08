import React from 'react'
import { configure } from '@storybook/react'
import 'babel-polyfill'

import '../src/styles/_index.scss'

const req = require.context('../stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
