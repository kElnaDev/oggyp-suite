import React from 'react';

import '../scss/site.scss';

import * as f from '../functions.js';

class Site extends React.Component {
  render() {
    return (
      <div className='site'>
        <div className='site-preview'>
          <img src='https://cdn.ifnulltrue.com/favicons/if-null-true.png' />
          <div>
            <span>If Null True</span>
          </div>
        </div>
      </div>
    )
  }
}


export default class SiteWrapper extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <section id={f.phraseToId(this.props.id, false)}>
        <h2>{this.props.id}</h2>
        <div className='site-wrapper'>
          <Site />
        </div>
      </section>
    )
  }
}