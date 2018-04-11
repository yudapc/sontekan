arr = [
  { name: 'ahmad', email: 'ahmad@yahoo.com', published_count: 2 },
  { name: 'jaki', email: 'jaki@jaki.co', published_count: 5 },
  { name: 'gardah', email: 'issue@gmail.com', published_count: 7 },
]
total = arr.map {|x| x[:published_count]}.inject :+
puts total