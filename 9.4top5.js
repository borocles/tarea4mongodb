db.fabian.aggregate([
  { $sort: { review_count: -1 } },
  { $limit: 5 }
])
