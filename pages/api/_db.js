const admin = require("./_firebase");

const firestore = admin.firestore();

/**** USERS ****/

// Get user by uid
function getUser(uid) {
  return firestore.collection("users").doc(uid).get().then(format);
}

// Get user by stripeCustomerId
function getUserByCustomerId(customerId) {
  return firestore
    .collection("users")
    .where("stripeCustomerId", "==", customerId)
    .get()
    .then(format)
    .then((docs) => (docs ? docs[0] : null)); // Get first result
}

// Update an existing user
function updateUser(uid, data) {
  return firestore.collection("users").doc(uid).update(data);
}

function updateUserByCustomerId(customerId, data) {
  return getUserByCustomerId(customerId).then((user) => {
    return updateUser(user.id, data);
  });
}

/**** ORDERS ****/

// Get order by uid
function getOrder(uid) {
  return firestore.collection("orders").doc(uid).get().then(format);
}

function updateOrder(uid, data) {
  return firestore.collection("orders").doc(uid).update(data);
}

function getOrderByCustomerId(customerId) {
  return firestore
    .collection("orders")
    .where("stripeCustomerId", "==", customerId)
    .get()
    .then(format)
    .then((docs) => (docs ? docs[0] : null)); // Get first result
}

// Update a user by their stripeCustomerId
function updateOrderByCustomerId(customerId, data) {
  return getOrderByCustomerId(customerId).then((order) => {
    return updateOrder(order.id, data);
  });
}

/**** HELPERS ****/

// Format Firestore response (handles a collection or single doc)
function format(response) {
  if (response.docs) {
    return response.docs.map(getDoc);
  } else {
    return getDoc(response);
  }
}

// Get doc data and merge in doc.id
function getDoc(doc) {
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

module.exports = {
  getUser,
  getOrder,
  getOrderByCustomerId,
  getUserByCustomerId,
  updateOrder,
  updateOrderByCustomerId,
  updateUserByCustomerId,
};
