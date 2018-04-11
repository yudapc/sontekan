def fibonacci(n)
  a = 0
  b = 1

  n.times do
    temp = a
    a = b
    b = temp + b
  end

  return a
end

# puts fibonacci(10)

15.times do |n|
  result = fibonacci(n)
  puts result
end