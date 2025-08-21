# inkwell-blog

ESC X Scrimba Frontend Career Path Graduation Project

This web app includes all required features of the document.

These features includes:

- CRUD operation (Create Read, Update and Delete)
- The components are created as per the suggestion on the document (which are: Header (which is a shared UI for the rest of the components, PostForm (for creating and updating a post), PostList (for displaying list of all posts), PostListItem (for a single post with an id), PostView (for displaying a single post detail of PostListItem component), and finally App.jsx (for initializing a context and implement the routing)))
- The packages (dependencies) I used: - uuid (for generating random id), - react-router and react-router-dom (for handling dynamic route between pages, to handle shared UI, to get information from URL using useParams, to navigate from page to page.) - react-markdown (to render posts to HTML).
- I used plain CSS for styling
- I also used context api for managing state. I created a helper function in data.js to create and read posts and made the retrived data from localStorage to be a source of data to be displayed.
- I used localStorage to post to and retrive data from.
- I used dynamic routing for the post detail, for updating or editing the existed post and deleting a post using their id.
- I used media query for making the web app responsive across all screen sizes and also I used relative units as much as possible to make the reponsiveness easier.
- I also added a confirmation message with window.alert to let the used know they added or updated a post successfully. And also a confirmation message sith window.confirm to make sure and take action for the delete operation weather to delete the post or not.
- Here is my netlify url where I deployed the project: https://nuhamin-inkwell-esc.netlify.app/
