"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const trip_model_1 = __importDefault(require("./trip.model"));
const PointType = new graphql_1.GraphQLObjectType({
    name: 'Point',
    fields: () => ({
        coordinates: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLInt)
        }
    })
});
const PointMutType = new graphql_1.GraphQLInputObjectType({
    name: 'PointMutation',
    fields: () => ({
        coordinates: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLInt)
        }
    })
});
const gqInt = {
    type: graphql_1.GraphQLInt
};
const TripType = new graphql_1.GraphQLObjectType({
    name: 'Trip',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID
        },
        origin: {
            type: PointType
        },
        destination: {
            type: PointType
        },
        distance: gqInt,
        estBudget: gqInt,
        likes: gqInt,
        rating: gqInt
    })
});
exports.TripQuery = {
    "trip": {
        type: TripType,
        args: {
            id: { type: graphql_1.GraphQLID }
        },
        resolve(parent, args) {
            //return _.find(books,{id: args.id});
            return trip_model_1.default.get(args.id);
        }
    },
    'trips': {
        type: new graphql_1.GraphQLList(TripType),
        resolve(parent, args) {
            //return books;
            return trip_model_1.default.list();
        }
    }
};
exports.TripMutation = {
    "addTrip": {
        type: TripType,
        args: {
            origin: {
                type: PointMutType
            },
            destination: {
                type: PointMutType
            },
            distance: gqInt,
            estBudget: gqInt,
            likes: gqInt,
            rating: gqInt
        },
        resolve(parent, args) {
            console.log(args);
            let trip = new trip_model_1.default({
                origin: args.origin
            });
            return trip.save();
        }
    }
};
exports.default = { TripQuery: exports.TripQuery, TripMutation: exports.TripMutation };
