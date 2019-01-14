"use strict";
// const graphql = require('graphql');
Object.defineProperty(exports, "__esModule", { value: true });
// const {GraphQLObjectType,
// 	GraphQLString,
// 	GraphQLSchema,
// 	GraphQLInt,
// 	GraphQLList,
// 	GraphQLNonNull,
// 	GraphQLID } = graphql;
// const _ = require("lodash");
// const Book = require('../model/book');
// const Author = require('../model/author');
// const TripQuery = require('../trip/trip.type').TripQuery;
// const TripMutation = require('../trip/trip.type').TripMutation;
// // import { TripQuery, TripMutation } from "../trip/trip.type";
// const BookType = new GraphQLObjectType({
// 	name: 'Book',
// 	fields: () => ({
// 		id: { type: GraphQLID},
// 		name: { type: GraphQLString},
// 		genre: { type: GraphQLString},
// 		author: {
// 			type: AuthorType,
// 			resolve(parent,args){
// 				//return _.find(authors,{id:parent.authorId});
// 				return Author.findById(parent.authorId);
// 			}
// 		}
// 	})
// });
// const AuthorType = new GraphQLObjectType({
// 	name: 'Author',
// 	fields: () =>({
// 		id: {type: GraphQLID},
// 		name: {type: GraphQLString},
// 		age: {type: GraphQLInt},
// 		books: {
// 			type: new GraphQLList(BookType),
// 			resolve(parent,args){
// 				//return _.filter(books,{authorId: parent.id})
// 				return Book.find({authorId:parent.id});
// 			}
// 		}
// 	})
// });
// const rootQuery = {
// 	name: 'RootQueryType',
// 	fields: {
// 		book: {
// 			type: BookType,
// 			args: {
// 				id: { type: GraphQLID }
// 			},
// 			resolve(parent, args){
// 				//return _.find(books,{id: args.id});
// 				return Book.findById(args.id);
// 			}
// 		},
// 		author: {
// 			type: AuthorType,
// 			args: {
// 				id: {type: GraphQLID}
// 			},
// 			resolve(parent,args){
// 				//return _.find(authors,{id: args.id});
// 				return Author.findById(args.id);
// 			}
// 		},
// 		books: {
// 			type: new GraphQLList(BookType),
// 			resolve(parent,args){
// 				//return books;
// 				return Book.find({});
// 			}
// 		},
// 		authors: {
// 			type: new GraphQLList(AuthorType),
// 			resolve(parent,args){
// 				//return authors;
// 				return Author.find({});
// 			}
// 		}
// 	}
// };
// const addOnObj = (arr: Array<any>, obj: Object) => {
// 	arr.forEach((item: any,index)=>{
// 		for (key in item) {
// 			if (item.hasOwnProperty(key)){
// 				obj.fields[key] = item[key];
// 			}
// 		}
// 	});
// }
// console.log(rootQuery);
// const listOfQueries = [TripQuery];
// addOnObj(listOfQueries,rootQuery);
// const RootQuery = new GraphQLObjectType(rootQuery)
// const mutationObj = {
//   name: 'Mutation',
//   fields: {
// 	  addAuthor: {
// 		  type: AuthorType,
// 		  args: {
// 			  name: {type: new GraphQLNonNull(GraphQLString)},
// 			  age: {type: new GraphQLNonNull(GraphQLInt)},
// 		  },
// 		  resolve(parent,args){
// 			  console.log(args);
// 			  let author = new Author({
// 				  name: args.name,
// 				  age: args.age
// 			  });
// 			  return author.save();
// 		  }
// 	  },
// 	  addBook: {
// 		  type: BookType,
// 		  args: {
// 			  name: { type: new GraphQLNonNull(GraphQLString)},
// 			  genre: { type: new GraphQLNonNull(GraphQLString)},
// 			  authorId: {type: new GraphQLNonNull(GraphQLID)}
// 		  },
// 		  resolve(parent,args){
// 			  let book = new Book({
// 				  name: args.name,
// 				  genre: args.genre,
// 				  authorId: args.authorId
// 			  });
// 			  return book.save();
// 		  }
// 	  }
//   }
// }
// const listOfMutation = [TripMutation];
// addOnObj(listOfMutation,mutationObj);
// const Mutation = new GraphQLObjectType(mutationObj);
// module.exports = new GraphQLSchema({
// 	query: RootQuery,
// 	mutation: Mutation
// })
const graphql_1 = require("graphql");
// import Book from '../model/book';
// import Author from '../model/author';
const trip_type_1 = require("../trip/trip.type");
const trip_type_2 = require("../trip/trip.type");
// import { TripQuery, TripMutation } from "../trip/trip.type";
// const BookType = new GraphQLObjectType({
// 	name: 'Book',
// 	fields: () => ({
// 		id: { type: GraphQLID},
// 		name: { type: GraphQLString},
// 		genre: { type: GraphQLString},
// 		author: {
// 			type: AuthorType,
// 			resolve(parent,args){
// 				//return _.find(authors,{id:parent.authorId});
// 				return Author.findById(parent.authorId);
// 			}
// 		}
// 	})
// });
// const AuthorType = new GraphQLObjectType({
// 	name: 'Author',
// 	fields: () =>({
// 		id: {type: GraphQLID},
// 		name: {type: GraphQLString},
// 		age: {type: GraphQLInt},
// 		books: {
// 			type: new GraphQLList(BookType),
// 			resolve(parent, args){
// 				//return _.filter(books,{authorId: parent.id})
// 				return Book.find({authorId:parent.id});
// 			}
// 		}
// 	})
// });
// const rootQuery = {
// 	name: 'RootQueryType',
// 	fields: {
// 		book: {
// 			type: BookType,
// 			args: {
// 				id: { type: GraphQLID }
// 			},
// 			resolve(parent, args){
// 				//return _.find(books,{id: args.id});
// 				return Book.findById(args.id);
// 			}
// 		},
// 		author: {
// 			type: AuthorType,
// 			args: {
// 				id: {type: GraphQLID}
// 			},
// 			resolve(parent,args){
// 				//return _.find(authors,{id: args.id});
// 				return Author.findById(args.id);
// 			}
// 		},
// 		books: {
// 			type: new GraphQLList(BookType),
// 			resolve(parent,args){
// 				//return books;
// 				return Book.find({});
// 			}
// 		},
// 		authors: {
// 			type: new GraphQLList(AuthorType),
// 			resolve(parent,args){
// 				//return authors;
// 				return Author.find({});
// 			}
// 		}
// 	}
// };
const rootQuery = {
    name: 'RootQueryType',
    fields: {}
};
const addOnObj = (arr, obj) => {
    arr.forEach((item) => {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                obj.fields[key] = item[key];
            }
        }
    });
};
console.log(rootQuery);
const listOfQueries = [trip_type_1.TripQuery];
addOnObj(listOfQueries, rootQuery);
const RootQuery = new graphql_1.GraphQLObjectType(rootQuery);
// const mutationObj = {
//   name: 'Mutation',
//   fields: {
// 	  addAuthor: {
// 		  type: AuthorType,
// 		  args: {
// 			  name: {type: new GraphQLNonNull(GraphQLString)},
// 			  age: {type: new GraphQLNonNull(GraphQLInt)},
// 		  },
// 		  resolve(parent,args){
// 			  console.log(args);
// 			  let author = new Author({
// 				  name: args.name,
// 				  age: args.age
// 			  });
// 			  return author.save();
// 		  }
// 	  },
// 	  addBook: {
// 		  type: BookType,
// 		  args: {
// 			  name: { type: new GraphQLNonNull(GraphQLString)},
// 			  genre: { type: new GraphQLNonNull(GraphQLString)},
// 			  authorId: {type: new GraphQLNonNull(GraphQLID)}
// 		  },
// 		  resolve(parent,args){
// 			  let book = new Book({
// 				  name: args.name,
// 				  genre: args.genre,
// 				  authorId: args.authorId
// 			  });
// 			  return book.save();
// 		  }
// 	  }
//   }
// }
const mutationObj = {
    name: 'Mutation',
    fields: {}
};
const listOfMutation = [trip_type_2.TripMutation];
addOnObj(listOfMutation, mutationObj);
const Mutation = new graphql_1.GraphQLObjectType(mutationObj);
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
