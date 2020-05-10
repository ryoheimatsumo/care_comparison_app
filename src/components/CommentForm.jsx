import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    color : red;
`

const Evaluation = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
`

const Input = styled.input.attrs({
    type: "radio"
})`
    display: none;
    :checked ~ Label{
        color: #ffcc00;
    }
`;

const Label = styled.label`
    position: relative;
    padding: 10px 10px 0;
    color: gray;
    cursor: pointer;
    font-size: 50px;
    :hover,
    :hover ~ Label
`;

const Span = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    color: gray;
`;

function CommentForm (props) {
    return (
    <>
         <StyledForm action="submit" onSubmit={props.handleSubmit}>
                <Evaluation class="evaluation">
                    <Input id="star1" type="radio" name="star" value="5" />
                    <Label for="star1"><Span class="text">最高</Span>★</Label>
                    <Input id="star2" type="radio" name="star" value="4" />
                    <Label for="star2"><Span class="text">良い</Span>★</Label>
                    <Input id="star3" type="radio" name="star" value="3" />
                    <Label for="star3"><Span class="text">普通</Span>★</Label>
                    <Input id="star4" type="radio" name="star" value="2" />
                    <Label for="star4"><Span class="text">悪い</Span>★</Label>
                    <Input id="star5" type="radio" name="star" value="1" />
                    <Label for="star5"><Span class="text">最悪</Span>★</Label>
                </Evaluation>
               <p class="title">
               <label>
                    Title:
                    <input type="text" value={props.title} onChange={props.handleTitleChange}/>
               </label>
               </p>
               <p class="userName">
                    <label>
                       Name:
                       <input type="text" value={props.name} onChange={props.handleNameChange}/>
                    </label>
               </p>
               <p class="review">
                    <label>
                       Review
                       <textarea value={props.review} onChange={props.handleReviewChange} />
                    </label>
               </p>
               <button type="submit">Add your review</button>   
        </StyledForm>
     </>
    )
}

export default CommentForm;