export default {
  module: 'Wise Notes',
  children: [
    {
      module: 'Notebooks',
      children: [
        {
          module: 'Intros', type: 'notebook', id: '',
          children: [
            {
              module: 'Intro to HTML',
              type: 'note',
              tags: ['intro', 'html', 'css']
            }
          ]
        },

        {
          module: 'Guides',
          type: 'notebook', id: '',
          children: [
            {
              module: 'Skill Guide: array.map',
              type: 'note',
              tags: ['array', 'map']
            }
          ]
        }
      ]
    }
  ]
};