import React from 'react';


function Comments(props) {
    const comments = props.comments;

    return(
        comments.map((comment) => {
            return (
                <>
                <h1>{comment.title}</h1>
                <p>{comment.userName}</p>
                <p>{comment.review}</p>
                </>
                  )  
            })
    )
}

export default Comments;