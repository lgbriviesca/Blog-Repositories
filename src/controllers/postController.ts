import { Get, Route, Tags, Post as PostMethod, Body, Path } from "tsoa";
import { Post } from "../models";
import {
  createPost,
  getPosts,
  IPostPayload,
  getPost,
} from "../repositories/postRepository";

@Route("posts")
@Tags("Post")
export default class PostController {
  @Get("/")
  public async getPosts(): Promise<Array<Post>> {
    return getPosts();
  }

  //Para que no haya conflicto con el decorador Post y el método HTTP POST, lo nombre PostMethod
  @PostMethod("/")
  public async createPost(@Body() body: IPostPayload): Promise<Post> {
    return createPost(body);
  }

  @Get("/:id")
  public async getPost(@Path() id: string): Promise<Post | null> {
    return getPost(Number(id));
  }
}
