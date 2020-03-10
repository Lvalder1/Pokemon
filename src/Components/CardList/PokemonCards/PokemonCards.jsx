import React, { Component } from "react";
import styles from "./PokemonCards.module.scss";

export default class PokemonCards extends Component {

    render () {
        const pokemonData = this.props.pokemonData
        return (
            <section className={styles.card}>
                <img src={pokemonData.Image} alt="#"></img>
                <p>Name: {pokemonData.Name}</p>
                <p>Category: {pokemonData.Category}</p>
                <p>Height: {pokemonData.Height}</p>
                <p>Weight: {pokemonData.Weight}</p>
            </section>

        );
    }
}