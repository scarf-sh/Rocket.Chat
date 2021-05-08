import { IRoom } from '../../definition/IRoom';
import { ISubscription } from '../../definition/ISubscription';

/**
 * Under rocket.chat client application we usually deal with rooms and subscriptions together, so at some moment we decided to merge both.
 * This helps us even in performance, we dont need to keep 2 queries for each room, and save some time from front-end developers,
 * they dont need to know where the data lives.
 */
export type Room = IRoom & ISubscription & { subscription: ISubscription['_id'] };
