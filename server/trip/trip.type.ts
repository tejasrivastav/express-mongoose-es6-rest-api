import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLList
} from 'graphql';
import Trip from './trip.model';

const PointType = new GraphQLObjectType({
  name: 'Point',
  fields: () => ({
    coordinates: {
      type: new GraphQLList(GraphQLInt)
    }
  })
});

const PointMutType = new GraphQLInputObjectType({
  name: 'PointMutation',
  fields: () => ({
    coordinates: {
      type: new GraphQLList(GraphQLInt)
    }
  })
});

const gqInt = {
  type: GraphQLInt
};

const TripType = new GraphQLObjectType({
  name: 'Trip',
  fields: () => ({
    id: {
      type: GraphQLID
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

export const TripQuery = {
  trip: {
    type: TripType,
    args: {
      id: { type: GraphQLID }
    },
    resolve(parent: any, args: any) {
      //return _.find(books,{id: args.id});
      return Trip.get(args.id);
    }
  },
  trips: {
    type: new GraphQLList(TripType),
    resolve(parent: any, args: any) {
      //return books;
      return Trip.list();
    }
  }
};

export const TripMutation = {
  addTrip: {
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
    resolve(parent: any, args: any) {
      console.log(args);
      let trip = new Trip({
        origin: args.origin
      });
      return trip.save();
    }
  }
};

export default { TripQuery, TripMutation };
