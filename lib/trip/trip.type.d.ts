import { GraphQLObjectType, GraphQLInputObjectType, GraphQLList } from "graphql";
export declare const TripQuery: {
    "trip": {
        type: GraphQLObjectType;
        args: {
            id: {
                type: import("graphql").GraphQLScalarType;
            };
        };
        resolve(parent: any, args: any): any;
    };
    'trips': {
        type: GraphQLList<import("graphql").GraphQLType>;
        resolve(parent: any, args: any): any;
    };
};
export declare const TripMutation: {
    "addTrip": {
        type: GraphQLObjectType;
        args: {
            origin: {
                type: GraphQLInputObjectType;
            };
            destination: {
                type: GraphQLInputObjectType;
            };
            distance: {
                type: import("graphql").GraphQLScalarType;
            };
            estBudget: {
                type: import("graphql").GraphQLScalarType;
            };
            likes: {
                type: import("graphql").GraphQLScalarType;
            };
            rating: {
                type: import("graphql").GraphQLScalarType;
            };
        };
        resolve(parent: any, args: any): any;
    };
};
declare const _default: {
    TripQuery: {
        "trip": {
            type: GraphQLObjectType;
            args: {
                id: {
                    type: import("graphql").GraphQLScalarType;
                };
            };
            resolve(parent: any, args: any): any;
        };
        'trips': {
            type: GraphQLList<import("graphql").GraphQLType>;
            resolve(parent: any, args: any): any;
        };
    };
    TripMutation: {
        "addTrip": {
            type: GraphQLObjectType;
            args: {
                origin: {
                    type: GraphQLInputObjectType;
                };
                destination: {
                    type: GraphQLInputObjectType;
                };
                distance: {
                    type: import("graphql").GraphQLScalarType;
                };
                estBudget: {
                    type: import("graphql").GraphQLScalarType;
                };
                likes: {
                    type: import("graphql").GraphQLScalarType;
                };
                rating: {
                    type: import("graphql").GraphQLScalarType;
                };
            };
            resolve(parent: any, args: any): any;
        };
    };
};
export default _default;
