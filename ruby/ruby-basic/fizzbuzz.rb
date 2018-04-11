(1..30).each do |i|
  x = ''
  x += 'Fizz' if i%3==0
  x += 'Buzz' if i%5==0
  puts(x.empty? ? i : x);
end