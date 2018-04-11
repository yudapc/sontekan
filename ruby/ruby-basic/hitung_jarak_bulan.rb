require 'date'
start_date = Date.parse '01-01-2017'
end_date = Date.parse '29-08-2017'
total_months = (end_date.year * 12 + end_date.month) - (start_date.year * 12 + start_date.month)
puts total_months