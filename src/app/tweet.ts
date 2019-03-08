import { User } from './user';

export interface Tweet {

    id: number,
    created_at: string,
    text: string,
    user: User,
    likes: User[],
    liked: boolean

}
