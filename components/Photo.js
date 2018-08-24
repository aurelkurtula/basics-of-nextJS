import CommentsFunctionality from './InteractiveButtons'
import Link from 'next/link'

export default (props) => {
    return (
        <div className="photoComponent">
            <div style={{flex: '1 0 auto'}}>
                <Link href={{ pathname: '/photo', query: { id: props.id } }}>
                    <img src={`/static/art/${props.data.image}.jpg`} alt=""/>
                </Link>
                <div className="meta">
                    <p className="tagline">{props.data.tagline}</p>
                    <CommentsFunctionality 
                        LikesEntry={() => props.LikesEntry(props.data.id)}
                        commentsNum={props.data.comments.length}
                        likes={props.data.likes} />
                </div>
            </div>
            <style>{`
                .photoComponent {
                    display: flex;
                    flex-direction: column;
                    width: 29.3333333333%;
                    float: left;
                    margin: 2% 2% 20px 2%;
                    font-size: 1.6rem;
                    //height: 400px;
                    background: var(--white);
                    color: #AD0044;
                    box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);
                    margin-bottom: -50px;
                    margin-top: 100px;
                    overflow: auto;
                }
                img{
                    width: 80%;
                    margin: 10%;
                }
                .tagline{
                    margin-bottom: 10px; // kind of hack
                }
            `}</style>
        </div>
    )
}