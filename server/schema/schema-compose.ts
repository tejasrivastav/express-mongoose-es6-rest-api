import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import User from '../user/user.model';
import Author from "../model/author";
import book from '../model/book';

// STEP 1: Add your collections details
const models: Array<any> = [
  {
    key: 'User',
    model: User,
    customizationOptions: {}
  },
  {
    key: 'Author',
    model: Author
  },
  {
    key: 'Book',
    model: book,
    relations: [
      {
        key: 'Author',
        resolver(modelTC: any) {
          return modelTC.getResolver('findById');
        },
        prepareArgs: { // resolver `findByIds` has `_ids` arg, let provide value to it
          _id: (source: any) => source.authorId,
        },
        projection: { authorId: 1 }
      }
    ]
  }
];

models.forEach(model => {
  // STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
  const customizationOptions = model.customizationOptions || {}; // left it empty for simplicity, described below
  const modelTC = composeWithMongoose(model.model, customizationOptions);
  model.modelTC = modelTC;

  // STEP 3: Add needed CRUD User operations to the GraphQL Schema
  // via graphql-compose it will be much much easier, with less typing
  schemaComposer.Query.addFields({
    [model.key+'ById']: modelTC.getResolver('findById'),
    [model.key+'ByIds']: modelTC.getResolver('findByIds'),
    [model.key+'One']: modelTC.getResolver('findOne'),
    [model.key+'Many']: modelTC.getResolver('findMany'),
    [model.key+'Count']: modelTC.getResolver('count'),
    [model.key+'Connection']: modelTC.getResolver('connection'),
    [model.key+'Pagination']: modelTC.getResolver('pagination'),
  });

  schemaComposer.Mutation.addFields({
    [model.key+'CreateOne']: modelTC.getResolver('createOne'),
    [model.key+'CreateMany']: modelTC.getResolver('createMany'),
    [model.key+'UpdateById']: modelTC.getResolver('updateById'),
    [model.key+'UpdateOne']: modelTC.getResolver('updateOne'),
    [model.key+'UpdateMany']: modelTC.getResolver('updateMany'),
    [model.key+'RemoveById']: modelTC.getResolver('removeById'),
    [model.key+'RemoveOne']: modelTC.getResolver('removeOne'),
    [model.key+'RemoveMany']: modelTC.getResolver('removeMany'),
  });
});

models.forEach(model => {
  let modelTC = model.modelTC;
  if(model.relations){
    model.relations.forEach((relation: any)=>{
      let relationOts: any = {...relation};
      relationOts.resolver = () => {
        let mod = models.find((mod)=>mod.key===relation.key);
        return relation.resolver(mod.modelTC);
      };
      modelTC.addRelation(relation.key,relationOts);
    })
  }
})

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;
