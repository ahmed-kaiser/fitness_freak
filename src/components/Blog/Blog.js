import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop } from '@fortawesome/free-solid-svg-icons';

const BlogPost = ({ question, answer }) => {
    return(
        <div className="blog-post">
            <h4><FontAwesomeIcon icon={ faStop }/> { question }</h4>
            <p>{ answer }</p>
        </div>
    );
}

const Blog = () => {
    return (
        <section className="blog-section" id="blog">
            <div className="container">
                <div>
                    <h2 className="blog-title">Blog Post</h2>
                    <hr />
                </div>
                <div className="blog-body">
                    <BlogPost 
                        question={"How does react works?"}
                        answer = {
                            `- While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                            Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
                            Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.`
                        }
                    />
                     <BlogPost 
                        question={"Difference between props and state?"}
                        answer = {
                            `- Props allow us to pass data from one component to other components as an argument, on tha other hand State holds information about the component. Props can be accessed by the child component but State cannot be accessed by child component. 	Stateless component can have Props but Stateless component can't have State. Props make component reusable but State can't make component reuseable. Props are immutable but State is mutable.`
                        }
                    />
                     <BlogPost 
                        question={"Usage of useEffect hook except api call."}
                        answer = {
                            `- Validating an input while it's receiving characters is an great application for useEffect. We can use useEffect to filter an array "on the fly" by typing letters into an input element. We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. `
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Blog;