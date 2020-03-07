import React, { Component } from "react";
import styles from "./CardList.module.scss";
import PokemonCards from "./PokemonCards";
import { firestore } from "../../firebase";


export default class CardList extends Component {
    state = {
        pokemon: []
    }

    componentDidMount() {
        firestore
            .collection ("pokemon")
            .get()
            .then ((query) => {
                const pokemon = query.docs.map(doc => doc.data ());
                this.setState({ 
                    pokemon });
            })
        } 

    render() {
        return (
            <section className={styles.pokemonCards}>
            {this.state.pokemon.map((person, index) => (
                <PokemonCards cardData={person} key={index} />
            ))}
            </section>
        );            
    }
} 