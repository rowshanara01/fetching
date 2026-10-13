import { PostListProps, PostProps } from "../../interface";
import Post from "../Post/post";
import './PostList.css'


const PostList = ({postList}:PostListProps) => {
    return(<div className="post-list">
        {postList.map((post:PostProps) => (
            <Post {...post} key={post.id} />
        ))}
    </div>)
}

export default PostList;