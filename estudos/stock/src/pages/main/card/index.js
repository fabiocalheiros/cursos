import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class card extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    const { avatar, nome } = this.props.usuario;

    return (
        <div className="card">

            <Link to={`/photo/${this.props.id}`}>
              <div className="img_bg" style={{
                backgroundImage: `url(${this.props.img})`
              }}>
              </div>
            </Link>

            <footer className="footer-card">
              <div className="descricao">
                  <h2>{this.props.title}</h2>
                  <div className="categoria">{this.props.categoria}</div>
              </div>
            </footer>

            <div className="info-users" style={{display: this.props.visibleInfo ? 'flex' : 'none' }}>
              <img src={ avatar } />
              <div className="name-user">{ nome }</div>
            </div>
        </div>
    )
  }
}
