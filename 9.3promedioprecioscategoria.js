db.fabian.aggregate([
  { $group: { _id: "$categoria", avgPrice: { $avg: "$precio_usd" } } }
])
