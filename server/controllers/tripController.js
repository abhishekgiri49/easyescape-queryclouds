const Trip = require("../models/Trip");
// const Config = require("./../config/config.js");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const { package, user, totalAmount, _id } = req.body;

    const customer = await stripe.customers.create();
    const product = await stripe.products.create({
      name: package.title,
    });
    const metadata = {
      packageId: package._id,
      userId: user._id,
      orderId: _id,
      // Add any other metadata fields you need
    };
    const amount = Math.round(totalAmount * 100);
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: amount,
      currency: "CAD",
    });
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer: customer.id,
      return_url: `${
        process.env.CLIENT_PUBLIC_URL
          ? process.env.CLIENT_PUBLIC_URL
          : Config.CLIENT_PUBLIC_URL
      }/return?session_id={CHECKOUT_SESSION_ID}`,
      metadata: metadata,
    });

    // // Return the session ID to the client
    res.status(201).json({
      status: 201,
      message: "success",
      data: { clientSecret: session.client_secret },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      data: error,
      message: "Internal Server Error",
    });
  }
};
const getReturnStatus = async (req, res) => {
  try {
    const { sessionId } = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // Return the session ID to the client
    // console.log(session)
    const metaData = session.metadata || {};
    if (!metaData.orderId) throw new Error("No Order Id Found");
    if (session.status === "complete") {
      updateStatusById(metaData.orderId, "Booked", "Paid", session);
    }

    res.status(201).json({
      status: 201,
      message: "success",
      data: {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      data: error,
      message: "Internal Server Error",
    });
  }
};
const refundPayment = async (req, res) => {
  try {
    const { tripId } = req.params.id;

    res.status(201).json({
      status: 201,
      message: "success",
      data: {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      data: error,
      message: "Internal Server Error",
    });
  }
};
//  ------------------------------ Payment Intent APIS ----------------------------
//create trip
const create = async (req, res) => {
  try {
    const {
      bookingDate,
      numberOfPeople,
      totalAmount,
      grossAmount,
      email,
      phone,
      totalTax,
      specialRequest,
      departureDate,
      returnDate,
      paymentMethod,
      packageId,
      userId,
    } = req.body;
    let updateFields = {
      bookingDate: Date.now(),
      numberOfPeople,
      totalAmount,
      grossAmount,
      email,
      phone,
      totalTax,
      bookingStatus: "Pending",
      specialRequest,
      departureDate,
      returnDate,
      paymentMethod,
      paymentStatus: "Pending",
      package: packageId,
      user: userId,
    };

    const newTrip = new Trip(updateFields);
    const savedTrip = await newTrip.save();
    res.status(201).json({ status: 201, message: "success", data: savedTrip });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all trips
const getAll = async (req, res) => {
  try {
    const trips = await Trip.find().populate(["user", "package"]);
    // Sort by date descending
    res.status(200).json({ status: 201, data: trips, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};
const getAllByUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const query = {};

    // Assuming you have the user's ID stored in req.user.id after authentication
    const userId = req.user._id;
    if (!userId) throw new Error("No User Id Provided");

    query.user = userId;
    // Query trips where the user field matches the logged-in user's ID
    const trips = await Trip.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .populate(["user", "package"]);

    const count = await Trip.countDocuments(query);

    const result = {
      trips: trips,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    };
    res.json({
      status: 200,
      data: result,
      message: "All trips of the logged-in user",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};
// Get a specific trip by ID
const getById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id).populate([
      "user",
      "package",
    ]);
    if (!trip)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Trip not found" });
    res.json({ status: 200, data: trip, message: "Trip details" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update a Item by ID
const updateById = async (req, res) => {
  try {
    const {
      bookingDate,
      numberOfPeople,
      totalAmount,
      grossAmount,
      email,
      phone,
      totalTax,
      bookingStatus,
      specialRequest,
      departureDate,
      returnDate,
      paymentMethod,
      paymentStatus,
      packageId,
      userId,
    } = req.body;
    let updateFields = {
      bookingDate,
      numberOfPeople,
      totalAmount,
      grossAmount,
      email,
      phone,
      totalTax,
      bookingStatus,
      specialRequest,
      departureDate,
      returnDate,
      paymentMethod,
      paymentStatus,
      package: packageId,
      user: userId,
    };
    // console.log(updateFields);
    // Check if the fields are provided or not
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );
    if (!updatedTrip)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Trip not found" });
    res.json({
      status: 200,
      data: updatedTrip,
      message: "Trip updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Delete a  by ID
const deleteById = async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "Trip not found" });
    res.json({ status: 200, data: [], message: "Trip Deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update status of an Item by ID
const updateStatusById = async (id, bStatus, pStatus, session) => {
  try {
    let updateFields = {
      bookingStatus: bStatus,
      paymentStatus: pStatus,
      paymentMethod: "card",
      paymentIntent: session.payment_intent,
      paymentSessionId: session.id, // Reset the field to empty string when
    };

    // Await the execution of the query and get the updated document
    const updatedTrip = await Trip.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    // Check if the updatedTrip is null or not
    if (!updatedTrip) return false;

    // Return the updated document
    return updatedTrip;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  createCheckoutSession,
  getReturnStatus,
  create,
  getAll,
  getAllByUser,
  getById,
  updateById,
  deleteById,
};
