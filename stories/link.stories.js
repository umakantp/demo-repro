import React from 'react'
import {storiesOf} from '@storybook/react'
import Link from 'components/base/link'
import {BrowserRouter as Router} from 'react-router-dom'

import Page from './common/page'

storiesOf('Link', module)
  .add('normal', () => (
    <Router>
      <Page>
        <p><Link to="/">Normal link</Link></p>
      </Page>
    </Router>
  ))
