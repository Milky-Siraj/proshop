import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc  create new order
// @route POST/api/orders
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("addOrderItems not implemented yet");
});

// @desc  Get logged in user's orders
// @route GET/api/orders/myorders
// @access private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders not implemented yet");
});

// @desc  Get order by ID
// @route GET/api/orders/:id
// @access private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("getOrderById not implemented yet");
});

// @desc  Update order to paid
// @route GET/api/orders/:id/pay
// @access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("updateOrderToPaid not implemented yet");
});

// @desc  Update order to delivered
// @route GET/api/orders/:id/deliver
// @access private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("updateOrderToDelivered not implemented yet");
});

// @desc  Get all orders
// @route GET/api/orders
// @access private/admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("getOrders not implemented yet");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
