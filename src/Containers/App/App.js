import React, { Component } from 'react';
import styles from "./App.module.scss";
import SearchBar from "../../Components/Searchbar";
import CardList from "../../Components/CardList";
import { firestore } from "../../firebase";

export default class App extends Component {
  state = {
    pokemon: [],
    searchText: "",
    filteredpokemon: []
}

setSearchText = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filterpokemon);
    
}

filterpokemon = () => {
    let filteredpokemon = this.state.pokemon.filter(poke => {
        return poke.Name.includes(this.state.searchText);  
    })
    this.setState({ filteredpokemon });
}

componentDidMount() {
    firestore
        .collection("Pokemon")
        .get()
        .then((query) => {
            const pokemon = query.docs.map(doc => doc.data());
            this.setState({ 
                pokemon: pokemon,
                filteredpokemon: pokemon 
            });
        })
       
}
    render () {
      return (
        <>
          <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
          <CardList filteredpokemon={this.state.filteredpokemon} />
        </>
      )
    }
 
}