import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'linkAovivo.update': (id, url) => {
    check(
      url,
      Match.Where((url) => url.length),
    );

    LinkAovivo.update({ _id: id }, { url, updatedAt: new Date() });
  },
});

export const LinkAovivo = new Mongo.Collection('linkAovivo');
