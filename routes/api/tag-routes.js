const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [
        { model: Product, through: ProductTag},
      ],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
    try {
      const tag = await Tag.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          { model: Product, through: ProductTag},
        ],
      });
  
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
  
      res.status(200).json(tag);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/', async (req, res) => {
  // create a new tag
    try {
      const tag = await Tag.create(req.body);
      res.status(201).json(tag);
    } catch (err) {
      res.status(400).json({ error: 'Something Went Wrong' });
    }
  });

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const newTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
