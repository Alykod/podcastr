import Layout from '../components/layout';
import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Posts} from '../services/query';
import BlogPostLayout from '../components/blogPostLayout'

const Blog = () =>  {
  const {data, loading, error} = useQuery(Posts);
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    if(data && data.posts !== blogPosts) {
      console.log(data)
      setBlogPosts(data.posts[0])
    }
  }, [data])


  return (
    <Layout>
      <div>
        {/* <p>This is the about page</p>
        <a className="button is-primary">test</a> */}
        {blogPosts && <BlogPostLayout {...blogPosts}/>}
      </div>
    </Layout>
  );
}


export default Blog