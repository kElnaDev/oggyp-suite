import React from 'react';

import '../scss/site.scss';

import * as f from '../functions.js';

class Site extends React.Component {
  render() {
    return (
      <button className='site'>
        <div className='site-summary'>
          <img
            src={`https://cdn.ifnulltrue.com/favicons/${f.phraseToId(this.props.name, false)}.png`}
            style={{backgroundColor: this.props.colour}}
          />
          <div><span>{this.props.name}</span></div>
        </div>
        <div className='site-info'>
          <span className='site-info-devs'>Developed by {f.listToString(this.props.developers)}</span>
          <span className='site-info-heading'>Versions:</span>
          <table>
            <tbody>
              <tr>
                <td rowSpan='2'>1:</td>
                <td><a href='https://ifnulltrue.com'>https://ifnulltrue.com</a></td>
              </tr>
              <tr>
                <td><a href='https://int.oggyp.com'>https:/int.oggyp.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </button>
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
          <Site
            name='If Null True'
            developers={['kElnaDev']}
            versions={2}
            urls={[
              ['https://ifnulltrue.com', 'https://int.oggyp.com']
            ]}
            colour='#7409d9'
          />
        </div>
      </section>
    )
  }
}