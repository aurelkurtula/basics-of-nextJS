import react, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';
import Photo from '../components/Photo';
import CommentsFunctionality from '../components/InteractiveButtons'

export default class extends Component {
    static async getInitialProps({query}) {
        const {id} = {...query}
        const res = await fetch(`http://localhost:4000/photos/${id}`)
        const image = await res.json() 
        return { image } 
    }
    componentWillMount() {
        this.setState({
            image: this.props.image
        })
    }
    submitComments(e) {
        e.preventDefault();
        const user = this.refs.author.value
        const body = this.refs.comment.value 
        const comments = this.state.image.comments 
        comments.push({user, body})
        this.setState({comments})
        fetch(`http://localhost:4000/photos/${this.state.image.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.image)
        })
    }
    render(){
        return(
            <Layout>
        <div className="container">
            <div className="display_image">
                <img src={`/static/art/${this.state.image.image}.jpg`} alt=''/>
                <CommentsFunctionality />
            </div>
            <div className="comments">
                <p className="tagline">{this.state.image.tagline}</p>
                {
                    this.state.image.comments.map((comment, key) => <p key={key}><strong>{comment.user}:</strong>{comment.body}</p>)
                }
                <form className="comment-form" onSubmit={(e)=> this.submitComments(e) }>
                    <input type="text" ref="author" placeholder="Author" />
                    <input type="text" ref="comment"  placeholder="comment..." />
                    <input type="submit" />
                </form>
            </div>
        </div>
        <style>{`
            form{
                padding: 5px;
                background: var(--light-gray);
                border-top: 1px solid #dce2e4;
                overflow: auto;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
            }
            form input {
                padding: 9px 3px;
                width: 90%;
                margin: 5px auto;
                display: block;
                background-color: var(--green);
                border: none;
                outline: none;
                color:white
            }
            form a {
                text-decoration: none;
                margin-top: 5px;
                float: left;
                width: 50%;
                text-align: center;
                padding: 9px 0;
                margin-top: 10px;
                color: white;
            }
            .tagline {
                border-bottom: 1px solid #dce2e4;
                padding-bottom: 10px;
                margin-bottom: 20px;
                display: inline-block;
                color: var(--green);
            }
            .comments{
                padding: 30px;
            }
            .comments p {
                margin: 10px 0;
            }
            .comments strong {
                display: block;
            }
            .display_image{
                width: 50%;
            }
            .display_image img {width: 100%; display: block}
            .comments{
                position: relative;
                width: 50%;
            }
            .container {
                display: flex;
                width: 100%;
                background: var(--white);
                color: #AD0044;
                box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);
            }
        `}</style>
    </Layout>
        )
    }
}

