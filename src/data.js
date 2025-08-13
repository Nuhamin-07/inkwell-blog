// Key used in localStorage
const postKey = "post";

export function savePosts(posts) {
  try {
    localStorage.setItem(postKey, JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving posts to localStorage:", error);
  }
}

export function loadPosts() {
  try {
    const stored = localStorage.getItem(postKey);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error loading posts from localStorage:", error);
    return [];
  }
}
