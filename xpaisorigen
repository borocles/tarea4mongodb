db.fabian.aggregate([
  { $group: { _id: "$pais_origen_garantia", total: { $count: {} } } },
  { $sort: { total: -1 } }
])
