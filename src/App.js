import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
          //     <div className="Wrapper">
          //          <SayAboutMe name = "Pavel" surname = "Yarmolyuk" link="vk.com" />
          //          <SayAboutMe name = "Ann" surname = "IDK" link="vk.com" />
          //          <SayAboutMe name = "Stas" surname = "Yaroshyk" link="vk.com" />
          //     </div>
          <h1>Hello World!</h1>     
      );
  }
}

//function SayAboutMe(props){
//  return(
//    <div>
//      <h1> Моё имя - {props.name}. Фамилия - {props.surname}</h1>
//      <a href={props.link}> Ссылка на мой профиль </a>
//    </div>
//    )
//}
export default App;
