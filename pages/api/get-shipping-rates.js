const requireAuth = require("./_require-auth.js");

var shippo = require("shippo")(process.env.SHIPPO_API_KEY);

export default requireAuth(async (req, res) => {
  const body = req.body;
  const user = req.user;

  const address = body.address;
  const dimensions = body.dimensions;

  try {
    var addressFrom = {
      name: address.contactName,
      street1: address.streetAddress,
      street2: address.streetAddress2 || null,
      city: address.city,
      state: address.state,
      zip: address.zipCode,
      country: address.country,
    };

    var addressTo = {
      name: "Carbon Undone, Inc.",
      street1: "2590 Walnut St",
      street2: "Suite 21",
      city: "Denver",
      state: "CO",
      zip: "80205",
      country: "US",
    };

    var parcel = {
      length: String(dimensions.length),
      width: String(dimensions.width),
      height: String(dimensions.height),
      distance_unit: String(dimensions.dimensionUnits),
      weight: String(dimensions.weight),
      mass_unit: String(dimensions.weightUnits),
    };

    await shippo.shipment.create(
      {
        address_from: addressFrom,
        address_to: addressTo,
        parcels: [parcel],
        async: false,
      },
      function (err, shipment) {
        // asynchronously called
        try {
          const rates = shipment.rates;

          const lowestRate = rates.reduce(
            (min, b) => Math.min(min, Number(b.amount)),
            rates[0].amount
          );

          const selected = rates.filter((rate) => {
            return rate.amount == lowestRate;
          });
          console.log(selected);
          return res.status(200).send({ status: "SUCCESS", data: selected });
        } catch {
          return res.status(400).send({ status: "FAILED", data: err });
        }
      }
    );
    // console.log(shipment);
  } catch (error) {
    console.log("shippo-get-rates", error);

    // Return error response
    res.send({ status: "error", code: error.code, message: error.message });
  }
});
