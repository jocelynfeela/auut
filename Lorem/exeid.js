function hasIntersection() {
  var collections = _.rest(arguments);
  return _.some(_.first(arguments), function(item) {
    return _(collections)
      .chain()
      .map(_.ary(_.partial(_.includes, item), 1))
      .compact()
      .size()
      .isEqual(collections.length)
      .value();
  });
}
