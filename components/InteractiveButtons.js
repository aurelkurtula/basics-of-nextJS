import { MdModeComment, MdFavoriteBorder } from 'react-icons/md'
export default ({likes, LikesEntry, commentsNum}) => (
    <div className="meta">
        <button className="heart" onClick={LikesEntry} ><MdFavoriteBorder />{likes}</button>
        <p><MdModeComment />{ commentsNum }</p>
        <style>{`
        .meta{
            padding: 5px;
            background: var(--light-gray);
            border-top: 1px solid #dce2e4;
            overflow: auto;
        }
        .meta p {
            padding-top: 9px;
        }
        .meta button, .meta p{
            border: none;
            background: transparent;
            margin-top: 5px;
            float: left;
            width: 50%;
            text-align: center;
            padding: 9px 0;
            margin-top: 10px;
            color: var(--green);
            outline: none;
        }
        .meta svg {
            font-size: 1.3rem;
            margin-right: 3px;
        }
        `}</style>
    </div>
)

