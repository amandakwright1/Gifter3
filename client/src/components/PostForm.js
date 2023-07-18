import { useState } from "react"
import { addPost } from "../APIManagers/PostManager";
import { useNavigate } from "react-router-dom";

export const PostForm = () => {

    const [newPost, update] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 1,
        dateCreated: Date.now()
    })

    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const postToSendToAPI = {
            Title: newPost.title,
            Caption: newPost.caption,
            ImageUrl: newPost.imageUrl,
            DateCreated: new Date().toISOString(),
            UserProfileId: 1,
        };

        return addPost(postToSendToAPI)
                .then(navigate("/")); //takes user back to home route
    };

    return (
        <form className="post-form">
            <h2 className="post-form-title">Create a New Post</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={newPost.title}
                            onChange={
                                (event) => {
                                    const copy = { ...newPost }
                                    copy.title = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="caption">Caption:</label>
                        <input
                            type="text"
                            id="caption"
                            value={newPost.caption}
                            onChange={
                                (event) => {
                                    const copy = { ...newPost }
                                    copy.caption = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image Url:</label>
                        <input
                            type="text"
                            id="title"
                            value={newPost.imageUrl}
                            onChange={
                                (event) => {
                                    const copy = { ...newPost }
                                    copy.imageUrl = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Submit Post</button>
        </form>
    );
};