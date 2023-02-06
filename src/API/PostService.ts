import axios from "axios";
import { PostParams } from "../types/type";

export default class PostService {
    static async getAll(): Promise<PostParams[]> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
}