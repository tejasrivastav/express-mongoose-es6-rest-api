import { Model } from 'mongoose';
import { ObjectId } from 'bson';
export interface SkipLimit {
    skip: Number;
    limit: Number;
}
export interface ITrip extends Model<any> {
    get(id: ObjectId): any;
    list(SkipLimit?: SkipLimit): any;
}
/**
 * @typedef trip
 */
declare const ITrip: ITrip;
export default ITrip;
