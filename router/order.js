

const express = require("express");
const { order_place, getOrder, getOrders, getAdmin_orders, change_admin_order_status, get_order } = require("../controllers/order");
const userAuth = require("../middleware/userAuth.js")

const orderRoute = express()

orderRoute.route("/order/place").post( userAuth, order_place)
orderRoute.route("/order/view").get( userAuth, getOrder) 
orderRoute.route("/my/orders").get( userAuth, getOrders)
orderRoute.route("/admin/orders").get(userAuth, getAdmin_orders) 
orderRoute.route("/admin/order/status/change/:id").patch(userAuth, change_admin_order_status)
orderRoute.route("/order/:id").get(userAuth, get_order)


module.exports = orderRoute;