import React, { Component } from 'react';
import styles from "./App.module.scss";
import Searchbar from "../../Components/Searchbar";
import CardList from "../../Components/CardList";

export default class App extends Component {
    render () {
      return (
        <main> 
          <Searchbar />
          <CardList />
        </main>
      )
    }
 
}