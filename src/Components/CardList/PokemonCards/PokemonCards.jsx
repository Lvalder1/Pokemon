import React, { Component } from "react";
import styles from "./PokemonCards.module.scss";

export default class PokemonCards extends Component {

    render () {
        return (
            <section className={styles.card}>
                <p>Name: {this.props.cardData.Name}</p>
                <p>Category: {this.props.cardData.Category}</p>
                <p>Height: {this.props.cardData.Height}</p>
                <p>Weight: {this.props.cardData.Weight}</p>
            </section>

        );
    }
}