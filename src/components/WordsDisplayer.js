import React, { Component, PropTypes } from 'react';

export default class WordsDisplayer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleRandomizer() {
        //action displatcher!
        this.props.actions.changeWord();
    }

    render() {
        return (
            <div className="words-displayer-container">
                <div className="words-displayer-num-label">{this.props.words}</div>

                <br />
                <div className="words-displayer-buttons">
                    <button onClick={() => {this.handleRandomizer()}}>get me some random shajt</button>
                </div>
            </div>
        );
    }
}

WordsDisplayer.propTypes = {
    words: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

