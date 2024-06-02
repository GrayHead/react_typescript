import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type UserWithPostsType = IUserModel & { posts: IPostModel[] }
