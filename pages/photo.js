import Layout from '../components/Layout';
import Photo from '../components/Photo';
import CommentsFunctionality from '../components/InteractiveButtons'
import getPhotos from '../data/data.js'	


const PhotoPage = (props) => (
    <Layout>
        <div className="container">
            <div className="display_image">
                <img src={`/static/art/${props.image.image}.jpg`} alt=''/>
                <CommentsFunctionality />
            </div>
            <div className="comments">
                <p className="tagline">{props.image.tagline}</p>
                {
                    props.image.comments.map((comment, key) => <p key={key}><strong>{comment.user}:</strong>{comment.body}</p>)
                }
                <form className="comment-form" >
                    <input type="text"placeholder="Author" />
                    <input type="text"  placeholder="comment..." />
                    <input type="submit" hidden />
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

PhotoPage.getInitialProps = async ({query}) => {
    // could fetch data here
    let {id} = {...query}
    let image = getPhotos().find(m => m.id == id)

    return { image } 
}

export default PhotoPage