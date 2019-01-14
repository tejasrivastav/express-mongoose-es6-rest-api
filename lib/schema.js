"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _trip = require("../trip/trip.type");

// const graphql = require('graphql');
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
// import Book from '../model/book';
// import Author from '../model/author';
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
var rootQuery = {
  name: 'RootQueryType',
  fields: {}
};

var addOnObj = function addOnObj(arr, obj) {
  arr.forEach(function (item) {
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        obj.fields[key] = item[key];
      }
    }
  });
};

console.log(rootQuery);
var listOfQueries = [_trip.TripQuery];
addOnObj(listOfQueries, rootQuery);
var RootQuery = new _graphql.GraphQLObjectType(rootQuery); // const mutationObj = {
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

var mutationObj = {
  name: 'Mutation',
  fields: {}
};
var listOfMutation = [_trip.TripMutation];
addOnObj(listOfMutation, mutationObj);
var Mutation = new _graphql.GraphQLObjectType(mutationObj);

var _default = new _graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9zY2hlbWEvc2NoZW1hLnRzIl0sIm5hbWVzIjpbInJvb3RRdWVyeSIsIm5hbWUiLCJmaWVsZHMiLCJhZGRPbk9iaiIsImFyciIsIm9iaiIsImZvckVhY2giLCJpdGVtIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwibG9nIiwibGlzdE9mUXVlcmllcyIsIlRyaXBRdWVyeSIsIlJvb3RRdWVyeSIsIkdyYXBoUUxPYmplY3RUeXBlIiwibXV0YXRpb25PYmoiLCJsaXN0T2ZNdXRhdGlvbiIsIlRyaXBNdXRhdGlvbiIsIk11dGF0aW9uIiwiR3JhcGhRTFNjaGVtYSIsInF1ZXJ5IiwibXV0YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF5SkE7O0FBS0E7O0FBOUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUUsZUFEVTtBQUVoQkMsRUFBQUEsTUFBTSxFQUFFO0FBRlEsQ0FBbEI7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFrQkMsR0FBbEIsRUFBK0I7QUFDL0NELEVBQUFBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFVBQUNDLElBQUQsRUFBYTtBQUN4QixTQUFLLElBQU1DLEdBQVgsSUFBa0JELElBQWxCLEVBQXdCO0FBQ3ZCLFVBQUlBLElBQUksQ0FBQ0UsY0FBTCxDQUFvQkQsR0FBcEIsQ0FBSixFQUE2QjtBQUM1QkgsUUFBQUEsR0FBRyxDQUFDSCxNQUFKLENBQVdNLEdBQVgsSUFBa0JELElBQUksQ0FBQ0MsR0FBRCxDQUF0QjtBQUNBO0FBQ0Q7QUFDRCxHQU5EO0FBT0EsQ0FSRDs7QUFTQUUsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFNBQVo7QUFDQSxJQUFNWSxhQUFhLEdBQUcsQ0FBQ0MsZUFBRCxDQUF0QjtBQUNBVixRQUFRLENBQUNTLGFBQUQsRUFBZVosU0FBZixDQUFSO0FBRUEsSUFBTWMsU0FBUyxHQUFHLElBQUlDLDBCQUFKLENBQXNCZixTQUF0QixDQUFsQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1nQixXQUFXLEdBQUc7QUFDbEJmLEVBQUFBLElBQUksRUFBRSxVQURZO0FBRWxCQyxFQUFBQSxNQUFNLEVBQUU7QUFGVSxDQUFwQjtBQUlBLElBQU1lLGNBQWMsR0FBRyxDQUFDQyxrQkFBRCxDQUF2QjtBQUNBZixRQUFRLENBQUNjLGNBQUQsRUFBZ0JELFdBQWhCLENBQVI7QUFDQSxJQUFNRyxRQUFRLEdBQUcsSUFBSUosMEJBQUosQ0FBc0JDLFdBQXRCLENBQWpCOztlQUVlLElBQUlJLHNCQUFKLENBQWtCO0FBQ2hDQyxFQUFBQSxLQUFLLEVBQUVQLFNBRHlCO0FBRWhDUSxFQUFBQSxRQUFRLEVBQUVIO0FBRnNCLENBQWxCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xuXG4vLyBjb25zdCB7R3JhcGhRTE9iamVjdFR5cGUsXG4vLyBcdEdyYXBoUUxTdHJpbmcsXG4vLyBcdEdyYXBoUUxTY2hlbWEsXG4vLyBcdEdyYXBoUUxJbnQsXG4vLyBcdEdyYXBoUUxMaXN0LFxuLy8gXHRHcmFwaFFMTm9uTnVsbCxcbi8vIFx0R3JhcGhRTElEIH0gPSBncmFwaHFsO1xuLy8gY29uc3QgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cbi8vIGNvbnN0IEJvb2sgPSByZXF1aXJlKCcuLi9tb2RlbC9ib29rJyk7XG4vLyBjb25zdCBBdXRob3IgPSByZXF1aXJlKCcuLi9tb2RlbC9hdXRob3InKTtcbi8vIGNvbnN0IFRyaXBRdWVyeSA9IHJlcXVpcmUoJy4uL3RyaXAvdHJpcC50eXBlJykuVHJpcFF1ZXJ5O1xuLy8gY29uc3QgVHJpcE11dGF0aW9uID0gcmVxdWlyZSgnLi4vdHJpcC90cmlwLnR5cGUnKS5UcmlwTXV0YXRpb247XG4vLyAvLyBpbXBvcnQgeyBUcmlwUXVlcnksIFRyaXBNdXRhdGlvbiB9IGZyb20gXCIuLi90cmlwL3RyaXAudHlwZVwiO1xuXG4vLyBjb25zdCBCb29rVHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4vLyBcdG5hbWU6ICdCb29rJyxcbi8vIFx0ZmllbGRzOiAoKSA9PiAoe1xuLy8gXHRcdGlkOiB7IHR5cGU6IEdyYXBoUUxJRH0sXG4vLyBcdFx0bmFtZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nfSxcbi8vIFx0XHRnZW5yZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nfSxcbi8vIFx0XHRhdXRob3I6IHtcbi8vIFx0XHRcdHR5cGU6IEF1dGhvclR5cGUsXG4vLyBcdFx0XHRyZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdFx0Ly9yZXR1cm4gXy5maW5kKGF1dGhvcnMse2lkOnBhcmVudC5hdXRob3JJZH0pO1xuLy8gXHRcdFx0XHRyZXR1cm4gQXV0aG9yLmZpbmRCeUlkKHBhcmVudC5hdXRob3JJZCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KVxuLy8gfSk7XG5cbi8vIGNvbnN0IEF1dGhvclR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuLy8gXHRuYW1lOiAnQXV0aG9yJyxcbi8vIFx0ZmllbGRzOiAoKSA9Pih7XG4vLyBcdFx0aWQ6IHt0eXBlOiBHcmFwaFFMSUR9LFxuLy8gXHRcdG5hbWU6IHt0eXBlOiBHcmFwaFFMU3RyaW5nfSxcbi8vIFx0XHRhZ2U6IHt0eXBlOiBHcmFwaFFMSW50fSxcbi8vIFx0XHRib29rczoge1xuLy8gXHRcdFx0dHlwZTogbmV3IEdyYXBoUUxMaXN0KEJvb2tUeXBlKSxcbi8vIFx0XHRcdHJlc29sdmUocGFyZW50LGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBfLmZpbHRlcihib29rcyx7YXV0aG9ySWQ6IHBhcmVudC5pZH0pXG4vLyBcdFx0XHRcdHJldHVybiBCb29rLmZpbmQoe2F1dGhvcklkOnBhcmVudC5pZH0pO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSlcbi8vIH0pO1xuXG4vLyBjb25zdCByb290UXVlcnkgPSB7XG4vLyBcdG5hbWU6ICdSb290UXVlcnlUeXBlJyxcbi8vIFx0ZmllbGRzOiB7XG4vLyBcdFx0Ym9vazoge1xuLy8gXHRcdFx0dHlwZTogQm9va1R5cGUsXG4vLyBcdFx0XHRhcmdzOiB7XG4vLyBcdFx0XHRcdGlkOiB7IHR5cGU6IEdyYXBoUUxJRCB9XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0cmVzb2x2ZShwYXJlbnQsIGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBfLmZpbmQoYm9va3Mse2lkOiBhcmdzLmlkfSk7XG4vLyBcdFx0XHRcdHJldHVybiBCb29rLmZpbmRCeUlkKGFyZ3MuaWQpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH0sXG4vLyBcdFx0YXV0aG9yOiB7XG4vLyBcdFx0XHR0eXBlOiBBdXRob3JUeXBlLFxuLy8gXHRcdFx0YXJnczoge1xuLy8gXHRcdFx0XHRpZDoge3R5cGU6IEdyYXBoUUxJRH1cbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRyZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdFx0Ly9yZXR1cm4gXy5maW5kKGF1dGhvcnMse2lkOiBhcmdzLmlkfSk7XG4vLyBcdFx0XHRcdHJldHVybiBBdXRob3IuZmluZEJ5SWQoYXJncy5pZCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRib29rczoge1xuLy8gXHRcdFx0dHlwZTogbmV3IEdyYXBoUUxMaXN0KEJvb2tUeXBlKSxcbi8vIFx0XHRcdHJlc29sdmUocGFyZW50LGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBib29rcztcbi8vIFx0XHRcdFx0cmV0dXJuIEJvb2suZmluZCh7fSk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRhdXRob3JzOiB7XG4vLyBcdFx0XHR0eXBlOiBuZXcgR3JhcGhRTExpc3QoQXV0aG9yVHlwZSksXG4vLyBcdFx0XHRyZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdFx0Ly9yZXR1cm4gYXV0aG9ycztcbi8vIFx0XHRcdFx0cmV0dXJuIEF1dGhvci5maW5kKHt9KTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH07XG5cbi8vIGNvbnN0IGFkZE9uT2JqID0gKGFycjogQXJyYXk8YW55Piwgb2JqOiBPYmplY3QpID0+IHtcbi8vIFx0YXJyLmZvckVhY2goKGl0ZW06IGFueSxpbmRleCk9Pntcbi8vIFx0XHRmb3IgKGtleSBpbiBpdGVtKSB7XG4vLyBcdFx0XHRpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbi8vIFx0XHRcdFx0b2JqLmZpZWxkc1trZXldID0gaXRlbVtrZXldO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhyb290UXVlcnkpO1xuLy8gY29uc3QgbGlzdE9mUXVlcmllcyA9IFtUcmlwUXVlcnldO1xuLy8gYWRkT25PYmoobGlzdE9mUXVlcmllcyxyb290UXVlcnkpO1xuXG4vLyBjb25zdCBSb290UXVlcnkgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUocm9vdFF1ZXJ5KVxuXG4vLyBjb25zdCBtdXRhdGlvbk9iaiA9IHtcbi8vICAgbmFtZTogJ011dGF0aW9uJyxcbi8vICAgZmllbGRzOiB7XG4vLyBcdCAgYWRkQXV0aG9yOiB7XG4vLyBcdFx0ICB0eXBlOiBBdXRob3JUeXBlLFxuLy8gXHRcdCAgYXJnczoge1xuLy8gXHRcdFx0ICBuYW1lOiB7dHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpfSxcbi8vIFx0XHRcdCAgYWdlOiB7dHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxJbnQpfSxcbi8vIFx0XHQgIH0sXG4vLyBcdFx0ICByZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdCAgY29uc29sZS5sb2coYXJncyk7XG4vLyBcdFx0XHQgIGxldCBhdXRob3IgPSBuZXcgQXV0aG9yKHtcbi8vIFx0XHRcdFx0ICBuYW1lOiBhcmdzLm5hbWUsXG4vLyBcdFx0XHRcdCAgYWdlOiBhcmdzLmFnZVxuLy8gXHRcdFx0ICB9KTtcblxuLy8gXHRcdFx0ICByZXR1cm4gYXV0aG9yLnNhdmUoKTtcbi8vIFx0XHQgIH1cbi8vIFx0ICB9LFxuLy8gXHQgIGFkZEJvb2s6IHtcbi8vIFx0XHQgIHR5cGU6IEJvb2tUeXBlLFxuLy8gXHRcdCAgYXJnczoge1xuLy8gXHRcdFx0ICBuYW1lOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKX0sXG4vLyBcdFx0XHQgIGdlbnJlOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKX0sXG4vLyBcdFx0XHQgIGF1dGhvcklkOiB7dHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxJRCl9XG4vLyBcdFx0ICB9LFxuLy8gXHRcdCAgcmVzb2x2ZShwYXJlbnQsYXJncyl7XG4vLyBcdFx0XHQgIGxldCBib29rID0gbmV3IEJvb2soe1xuLy8gXHRcdFx0XHQgIG5hbWU6IGFyZ3MubmFtZSxcbi8vIFx0XHRcdFx0ICBnZW5yZTogYXJncy5nZW5yZSxcbi8vIFx0XHRcdFx0ICBhdXRob3JJZDogYXJncy5hdXRob3JJZFxuLy8gXHRcdFx0ICB9KTtcblxuLy8gXHRcdFx0ICByZXR1cm4gYm9vay5zYXZlKCk7XG4vLyBcdFx0ICB9XG4vLyBcdCAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGxpc3RPZk11dGF0aW9uID0gW1RyaXBNdXRhdGlvbl07XG4vLyBhZGRPbk9iaihsaXN0T2ZNdXRhdGlvbixtdXRhdGlvbk9iaik7XG4vLyBjb25zdCBNdXRhdGlvbiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShtdXRhdGlvbk9iaik7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gbmV3IEdyYXBoUUxTY2hlbWEoe1xuLy8gXHRxdWVyeTogUm9vdFF1ZXJ5LFxuLy8gXHRtdXRhdGlvbjogTXV0YXRpb25cbi8vIH0pXG5cblxuaW1wb3J0IHtHcmFwaFFMT2JqZWN0VHlwZSxcblx0R3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuXG4vLyBpbXBvcnQgQm9vayBmcm9tICcuLi9tb2RlbC9ib29rJztcbi8vIGltcG9ydCBBdXRob3IgZnJvbSAnLi4vbW9kZWwvYXV0aG9yJztcbmltcG9ydCB7IFRyaXBRdWVyeSB9IGZyb20gJy4uL3RyaXAvdHJpcC50eXBlJztcbmltcG9ydCB7IFRyaXBNdXRhdGlvbiB9IGZyb20gJy4uL3RyaXAvdHJpcC50eXBlJztcbi8vIGltcG9ydCB7IFRyaXBRdWVyeSwgVHJpcE11dGF0aW9uIH0gZnJvbSBcIi4uL3RyaXAvdHJpcC50eXBlXCI7XG5cbi8vIGNvbnN0IEJvb2tUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbi8vIFx0bmFtZTogJ0Jvb2snLFxuLy8gXHRmaWVsZHM6ICgpID0+ICh7XG4vLyBcdFx0aWQ6IHsgdHlwZTogR3JhcGhRTElEfSxcbi8vIFx0XHRuYW1lOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmd9LFxuLy8gXHRcdGdlbnJlOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmd9LFxuLy8gXHRcdGF1dGhvcjoge1xuLy8gXHRcdFx0dHlwZTogQXV0aG9yVHlwZSxcbi8vIFx0XHRcdHJlc29sdmUocGFyZW50LGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBfLmZpbmQoYXV0aG9ycyx7aWQ6cGFyZW50LmF1dGhvcklkfSk7XG4vLyBcdFx0XHRcdHJldHVybiBBdXRob3IuZmluZEJ5SWQocGFyZW50LmF1dGhvcklkKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH0pXG4vLyB9KTtcblxuLy8gY29uc3QgQXV0aG9yVHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4vLyBcdG5hbWU6ICdBdXRob3InLFxuLy8gXHRmaWVsZHM6ICgpID0+KHtcbi8vIFx0XHRpZDoge3R5cGU6IEdyYXBoUUxJRH0sXG4vLyBcdFx0bmFtZToge3R5cGU6IEdyYXBoUUxTdHJpbmd9LFxuLy8gXHRcdGFnZToge3R5cGU6IEdyYXBoUUxJbnR9LFxuLy8gXHRcdGJvb2tzOiB7XG4vLyBcdFx0XHR0eXBlOiBuZXcgR3JhcGhRTExpc3QoQm9va1R5cGUpLFxuLy8gXHRcdFx0cmVzb2x2ZShwYXJlbnQsIGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBfLmZpbHRlcihib29rcyx7YXV0aG9ySWQ6IHBhcmVudC5pZH0pXG4vLyBcdFx0XHRcdHJldHVybiBCb29rLmZpbmQoe2F1dGhvcklkOnBhcmVudC5pZH0pO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSlcbi8vIH0pO1xuXG4vLyBjb25zdCByb290UXVlcnkgPSB7XG4vLyBcdG5hbWU6ICdSb290UXVlcnlUeXBlJyxcbi8vIFx0ZmllbGRzOiB7XG4vLyBcdFx0Ym9vazoge1xuLy8gXHRcdFx0dHlwZTogQm9va1R5cGUsXG4vLyBcdFx0XHRhcmdzOiB7XG4vLyBcdFx0XHRcdGlkOiB7IHR5cGU6IEdyYXBoUUxJRCB9XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0cmVzb2x2ZShwYXJlbnQsIGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBfLmZpbmQoYm9va3Mse2lkOiBhcmdzLmlkfSk7XG4vLyBcdFx0XHRcdHJldHVybiBCb29rLmZpbmRCeUlkKGFyZ3MuaWQpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH0sXG4vLyBcdFx0YXV0aG9yOiB7XG4vLyBcdFx0XHR0eXBlOiBBdXRob3JUeXBlLFxuLy8gXHRcdFx0YXJnczoge1xuLy8gXHRcdFx0XHRpZDoge3R5cGU6IEdyYXBoUUxJRH1cbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRyZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdFx0Ly9yZXR1cm4gXy5maW5kKGF1dGhvcnMse2lkOiBhcmdzLmlkfSk7XG4vLyBcdFx0XHRcdHJldHVybiBBdXRob3IuZmluZEJ5SWQoYXJncy5pZCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRib29rczoge1xuLy8gXHRcdFx0dHlwZTogbmV3IEdyYXBoUUxMaXN0KEJvb2tUeXBlKSxcbi8vIFx0XHRcdHJlc29sdmUocGFyZW50LGFyZ3Mpe1xuLy8gXHRcdFx0XHQvL3JldHVybiBib29rcztcbi8vIFx0XHRcdFx0cmV0dXJuIEJvb2suZmluZCh7fSk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRhdXRob3JzOiB7XG4vLyBcdFx0XHR0eXBlOiBuZXcgR3JhcGhRTExpc3QoQXV0aG9yVHlwZSksXG4vLyBcdFx0XHRyZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdFx0Ly9yZXR1cm4gYXV0aG9ycztcbi8vIFx0XHRcdFx0cmV0dXJuIEF1dGhvci5maW5kKHt9KTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH07XG5cbmNvbnN0IHJvb3RRdWVyeSA9IHtcbiAgbmFtZTogJ1Jvb3RRdWVyeVR5cGUnLFxuIFx0ZmllbGRzOiB7fVxufVxuY29uc3QgYWRkT25PYmogPSAoYXJyOiBBcnJheTxhbnk+LCBvYmo6IGFueSkgPT4ge1xuXHRhcnIuZm9yRWFjaCgoaXRlbTogYW55KT0+e1xuXHRcdGZvciAoY29uc3Qga2V5IGluIGl0ZW0pIHtcblx0XHRcdGlmIChpdGVtLmhhc093blByb3BlcnR5KGtleSkpe1xuXHRcdFx0XHRvYmouZmllbGRzW2tleV0gPSBpdGVtW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cbmNvbnNvbGUubG9nKHJvb3RRdWVyeSk7XG5jb25zdCBsaXN0T2ZRdWVyaWVzID0gW1RyaXBRdWVyeV07XG5hZGRPbk9iaihsaXN0T2ZRdWVyaWVzLHJvb3RRdWVyeSk7XG5cbmNvbnN0IFJvb3RRdWVyeSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShyb290UXVlcnkpXG5cbi8vIGNvbnN0IG11dGF0aW9uT2JqID0ge1xuLy8gICBuYW1lOiAnTXV0YXRpb24nLFxuLy8gICBmaWVsZHM6IHtcbi8vIFx0ICBhZGRBdXRob3I6IHtcbi8vIFx0XHQgIHR5cGU6IEF1dGhvclR5cGUsXG4vLyBcdFx0ICBhcmdzOiB7XG4vLyBcdFx0XHQgIG5hbWU6IHt0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyl9LFxuLy8gXHRcdFx0ICBhZ2U6IHt0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEludCl9LFxuLy8gXHRcdCAgfSxcbi8vIFx0XHQgIHJlc29sdmUocGFyZW50LGFyZ3Mpe1xuLy8gXHRcdFx0ICBjb25zb2xlLmxvZyhhcmdzKTtcbi8vIFx0XHRcdCAgbGV0IGF1dGhvciA9IG5ldyBBdXRob3Ioe1xuLy8gXHRcdFx0XHQgIG5hbWU6IGFyZ3MubmFtZSxcbi8vIFx0XHRcdFx0ICBhZ2U6IGFyZ3MuYWdlXG4vLyBcdFx0XHQgIH0pO1xuXG4vLyBcdFx0XHQgIHJldHVybiBhdXRob3Iuc2F2ZSgpO1xuLy8gXHRcdCAgfVxuLy8gXHQgIH0sXG4vLyBcdCAgYWRkQm9vazoge1xuLy8gXHRcdCAgdHlwZTogQm9va1R5cGUsXG4vLyBcdFx0ICBhcmdzOiB7XG4vLyBcdFx0XHQgIG5hbWU6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpfSxcbi8vIFx0XHRcdCAgZ2VucmU6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpfSxcbi8vIFx0XHRcdCAgYXV0aG9ySWQ6IHt0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTElEKX1cbi8vIFx0XHQgIH0sXG4vLyBcdFx0ICByZXNvbHZlKHBhcmVudCxhcmdzKXtcbi8vIFx0XHRcdCAgbGV0IGJvb2sgPSBuZXcgQm9vayh7XG4vLyBcdFx0XHRcdCAgbmFtZTogYXJncy5uYW1lLFxuLy8gXHRcdFx0XHQgIGdlbnJlOiBhcmdzLmdlbnJlLFxuLy8gXHRcdFx0XHQgIGF1dGhvcklkOiBhcmdzLmF1dGhvcklkXG4vLyBcdFx0XHQgIH0pO1xuXG4vLyBcdFx0XHQgIHJldHVybiBib29rLnNhdmUoKTtcbi8vIFx0XHQgIH1cbi8vIFx0ICB9XG4vLyAgIH1cbi8vIH1cblxuY29uc3QgbXV0YXRpb25PYmogPSB7XG4gIG5hbWU6ICdNdXRhdGlvbicsXG4gIGZpZWxkczoge31cbn1cbmNvbnN0IGxpc3RPZk11dGF0aW9uID0gW1RyaXBNdXRhdGlvbl07XG5hZGRPbk9iaihsaXN0T2ZNdXRhdGlvbixtdXRhdGlvbk9iaik7XG5jb25zdCBNdXRhdGlvbiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShtdXRhdGlvbk9iaik7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMU2NoZW1hKHtcblx0cXVlcnk6IFJvb3RRdWVyeSxcblx0bXV0YXRpb246IE11dGF0aW9uXG59KVxuIl19