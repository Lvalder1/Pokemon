import React, { Component } from "react";
import styles from "./CardList.module.scss";
import PokemonCards from "./PokemonCards";


export default class CardList extends Component {


    render() {
       
        return (
            <section className={styles.pokemonCards}>
             {this.props.filteredpokemon.map((pokemon, index) => (
                <PokemonCards pokemonData={pokemon} key={index} />
            ))}
            </section>
        );            
    }
} 