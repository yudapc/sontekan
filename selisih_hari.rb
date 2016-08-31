require 'date'

start_date = Date.parse('10-02-2016')
end_date = Date.parse('13-02-2016')
total_days = end_date.mjd - start_date.mjd
puts "#{total_days} Hari"