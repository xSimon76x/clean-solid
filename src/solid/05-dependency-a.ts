import { PostService } from './05-dependency-b';
import { JsonDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    const provider = new JsonDataBaseService();
    const providerAPI = new WebApiPostService();

    const postService = new PostService( providerAPI );

    const posts = await postService.getPosts();

    console.log({ posts })




})();