const asyncHandler = require("express-async-handler")

/**
 * @description get goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => { 
  res.json({ message: "Get goals" })
})

/**
 * @description get goal
 * @route GET /api/goals/:id
 * @access Private
 */
const getGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Get goal ${req.params.id}` });
})

/**
 * @description set goal
 * @route POST /api/goals
 * @access Private
 */
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400)
    throw new Error("text is required")
  }
  res.json({ message: "Create goal" })
})

/**
 * @description update goal
 * @route PUT /api/goals
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` })
})

/**
 * @description delete goal
 * @route DELETE /api/goals
 * @access Private
 */
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Delete goal ${req.params.id}` });
})

module.exports = {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};