import { useState } from "react"
import { SearchPosts } from "../APIManagers/PostManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const PostSearch = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value)
    };

    const handleSearchButtonClick = (event) => {
        event.preventDefault();

        SearchPosts(searchQuery)
        .then((res) => {
            setSearchResults(res);
        })
    }

    return (
        <div>

            <Form className="post-form">
                <FormGroup>
                    <Label for="searchQuery">Search:</Label>
                    <Input
                        type="text"
                        id="searchQuery"
                        value={searchQuery}
                        onChange={handleSearchInput}
                    />
                </FormGroup>

                <Button onClick={handleSearchButtonClick} color="primary">
                    Search
                </Button>
            </Form>
            {searchResults.length > 0 && (
                <div>
                    <h3>Search Results:</h3>
                    <div>
                        {searchResults.map((post) => (
                            <div key={post.id}>
                                <h4>{post.title}</h4>
                                <p>Caption: {post.caption}</p>
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}