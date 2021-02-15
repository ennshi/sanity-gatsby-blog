export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602a508be65943c1160178a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bc9c1x9x',
                  apiId: '2d19ab8a-4635-46c6-a59c-ee8a6bc3929e'
                },
                {
                  buildHookId: '602a508bf649910b973a15a0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sucqm7z8',
                  apiId: 'c641d504-aef0-4d49-bdc4-cdc87ca2aa60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ennshi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sucqm7z8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
