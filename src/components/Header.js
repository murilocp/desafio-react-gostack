import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <header id="main-header">
        <div className="nav-content">
          <img className="logo" src="https://i.imgur.com/KDIDiSE.png" alt="Logo Facebook" />
          <div className="profile-items">
            <p className="profile">Meu perfil</p>
            <i className="material-icons">account_circle</i>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;