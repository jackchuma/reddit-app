export const fetchPosts = async () => {
    const posts = await fetch('https://www.reddit.com/r/funny.json');
    return posts.json();
};