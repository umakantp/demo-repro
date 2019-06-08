import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import classNames from 'classnames'

let Link = props => (
  props.external
    ? <a href={props.to} className={classNames('Link', props.className)} {...omit(props, 'className', 'to', 'external')}>{props.children}</a>
    : <RouterLink className={classNames('Link', props.className)} {...omit(props, 'className')} />
)

Link.displayName = 'Link'

Link.defaultProps = {
  external: false
}

Link.propTypes = {

  /** Redirect to this page */
  to: PropTypes.string.isRequired,

  /** Class name to assign to anchor tag */
  className: PropTypes.string,

  /** Tab index to be assigned to link */
  tabIndex: PropTypes.string,

  /** If the link is external */
  external: PropTypes.bool,

  /** Label of the link */
  children: PropTypes.any
}

export default Link
