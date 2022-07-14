const express = require('express')
const router = express.Router()
const Model = require('../models/model')


// Post Method
router.post('/post', async (req, res) => {
  const data = new Model({
    isFeatured: req.body.isFeatured,
    path: req.body.path,
    recipe: {
      ingredients: req.body.recipe.ingredients,
      amount: req.body.recipe.amount,
      notes: req.body.recipe.notes
    }
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Get all Method
router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get by path
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await Model.find({ path: req.params.id })
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update by ID
router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const result = await Model.findByIdAndUpdate(id, updatedData, options)

    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted :(`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router