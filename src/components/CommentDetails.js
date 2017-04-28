import React, { Component, PropTypes } from 'react';

export default class CommentDetails extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const blockMargin = 25, detailMargin = 5;
        let body = this.props.body;
        let email = this.props.email;
/*
        if (this.props.word && this.props.id % 2 === this.props.counter % 2) {
            let bodyArray = this.props.body.split(" ");
            for (let i=0; i<5; i++) {
                bodyArray[Math.floor(Math.random()*10)] = this.props.word;
            }
            body = bodyArray.join(" ")
        }
        */
        if (this.props.word && this.props.id % 2 === this.props.counter % 2) {
            let emailArray = this.props.email.split("@");
            emailArray[0] = this.props.word;
            email = emailArray.join("@")
        }
        return (
            <div style={{margin: blockMargin, width: 500}}>
                <div style={{margin: detailMargin}}>
                    <span>
                        Name:
                    </span>
                    <br/>
                    <span>
                        {this.props.name}
                    </span>
                </div>
                <div style={{margin: detailMargin}}>
                    <span>
                        Said:
                    </span>
                    <br/>
                    <span>
                        {body}
                    </span>
                </div>
                <div style={{margin: detailMargin}}>
                    <span>
                        From:
                    </span>
                    <br/>
                    <span>
                        {email}
                    </span>
                </div>
            </div>
        );
    }
}

CommentDetails.propTypes = {
    actions: PropTypes.object,
    body: PropTypes.string.isRequired
};


