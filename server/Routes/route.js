const express = require('express');
const router = express.Router();
const Todo = require('../Model/Todo');

// Add a new todo
router.post('/todos', async (req, res) => {
  try {
    const { data } = req.body;

    const newTodo = new Todo({
      data: data
    });

    await newTodo.save();

    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Toggle todo status
router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    todo.done = !todo.done;
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a todo
router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const todo = await Todo.findById(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    todo.data = data;
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a todo
router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      throw new Error('Todo not found');
    }

    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
