import React,{useEffect,Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {getPosts} from "../../actions/post";
import Spinner from '../layout/Spinner';
import PostItem from "./PostItem";
import PostForm from "./PostForm";


const Post = ({posts:{posts,loading},getPosts}) => {

    useEffect(() => {
        getPosts()
    },[getPosts])

  return (
    <div>
       {loading ? <Spinner /> : 
       <Fragment>
    <h1 class="large text-primary">
        Posts
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>

      <PostForm />

      <div class="posts">
            {posts.length > 0 && posts.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
      </div>
        </Fragment>}
    </div>
  )
}

Post.propTypes = {
    getPosts : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
    posts:state.post
})

export default connect(mapStateToProps,{getPosts})(Post)
