import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../../component/header';
import Footer from '../../component/footer';

import '../../common/common.scss';
import './guide.scss';

class Guide extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="guide">
        <Header />
        <div className="inner">
          <p><a href="https://npmjs.org/package/yumu"><img alt="NPM version" src="https://img.shields.io/npm/v/yumu.svg?style=flat"/></a>
          <a href="https://npmjs.org/package/yumu"><img alt="npm" src="https://img.shields.io/npm/dt/yumu.svg"/></a>
          <a href="https://github.com/yumu-webpack/yumu"><img alt="GitHub stars" src="https://img.shields.io/github/stars/yumu-webpack/yumu.svg?style=social&amp;label=Star"/></a>
          <a href="https://github.com/yumu-webpack/yumu"><img alt="GitHub forks" src="https://img.shields.io/github/forks/yumu-webpack/yumu.svg?style=social&amp;label=Fork"/></a></p>

          <p>yumu webpack and react solution</p>

          <hr/>

          <h2>Feature</h2>

          <ul><li>Generate a <a href="https://github.com/webpack/webpack">webpack</a> based boilerplate.</li><li>Run a local server for web developer, support proxy and HMR.</li><li>Easy to use and customize third-party UI components.</li><li>Support customized webpack.config.js.</li><li>Support <code>buildvars</code> to automatically output bundles with different varible combinations.</li></ul>

          <h2>Install</h2>

          <ul><li>Install yumu</li></ul>

          <p className="pdl"><code>
          $ npm i yumu -g
          </code></p>

          <h2>Usage</h2>

          <ul><li>Generate a boilerplate.</li></ul>

          <p className="pdl"><code>
          $ yumu init
          </code></p>

          <ul><li>Install the dependencies.</li></ul>

          <p className="pdl"><code>
          $ cd xx(the project path)
          $ yumu install
          </code></p>

          <ul><li>Start a local dev server.</li></ul>

          <p className="pdl"><code>
            $ yumu server
            </code>
          </p>

          <blockquote><p>It will listen to the port 8080</p></blockquote>

          <ul><li>Build project.</li></ul>

          <p className="pdl"><code>
            $ yumu build
            </code>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Guide;
