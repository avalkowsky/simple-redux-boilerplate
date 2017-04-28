import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import CommentDetails from './CommentDetails';

const  BASE_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts/1';

export default class Comments extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        //action displatcher!
        // move somewhere else or run periodically or something like that ;)
        const http = axios.create({
            baseURL: BASE_COMMENTS_URL,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        this.props.actions.getData(http.get("/comments"));
    }

    render() {
        let commentsList = [], pendingMessage;

        if (this.props.comments && this.props.comments.status === 200 && Array.isArray(this.props.comments.data)) {
            const commentsProps = {
                word: this.props.words,
                counter: this.props.counter
            }
            commentsList = this.props.comments.data.map( (commentDetails, index) => { return <CommentDetails key={index} {...commentDetails} {...commentsProps} /> });
        } else {
            pendingMessage = this.props.comments.pendingMessage ? this.props.comments.pendingMessage : "";
        }

        return (
            <div className="words-displayer-container">
                Comments:
                <br/>
                {pendingMessage}
                {commentsList}
            </div>
        );
    }
}

Comments.propTypes = {
    actions: PropTypes.object.isRequired,
    comments: PropTypes.object,
    words: PropTypes.string,
    counter: PropTypes.number
};

