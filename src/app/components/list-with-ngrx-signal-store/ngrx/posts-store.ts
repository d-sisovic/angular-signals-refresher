import { signalStore } from "@ngrx/signals";
import { withEntities } from "@ngrx/signals/entities";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostsStore = signalStore(
  withEntities<IPost>()
);
