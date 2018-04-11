def solution(a)
  temp = []
  a.each_with_index do |v, i|
    temp[a[i]] = true if (0 <= v)
  end
  temp.each_with_index do |v, i|
    index = i + 1
    return index unless (temp[index])
  end
  return 1
end

param_test1 = [1, 3, 6, 4, 1, 2] 
answer = solution(param_test1)
puts answer
puts answer == 5

param_test2 = [1, 2, 3] 
answer = solution(param_test2)
puts answer
puts answer == 4

param_test3 = [-1, -3]
answer = solution(param_test3)
puts answer
puts answer == 1