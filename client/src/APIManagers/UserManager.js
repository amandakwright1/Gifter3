const baseUrl = '/api/UserProfile';

export const GetUserWithPosts = (id) => {
    return fetch(`${baseUrl}/GetUserWithPosts/${id}/posts`)
        .then((res) => res.json())
}