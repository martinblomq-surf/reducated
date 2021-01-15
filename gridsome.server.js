// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.loadSource(async actions => {
    const FeaturesData = require('./src/data/features.json');

    const collection = actions.addCollection({
      typeName: 'Features'
    })

    let i = 0;
    for (const feature of FeaturesData) {
      collection.addNode({
        title: feature.title,
        index: i,
        id: feature.id,
        description: feature.description,
        icon: feature.icon,
        iconcolor: feature.iconcolor
      });
      i++;
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
