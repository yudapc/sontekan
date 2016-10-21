require 'date'

start_date = Date.parse('10-02-2013')
end_date = Date.parse('10-02-2016')
total_month = (end_date.year * 12 + end_date.month) - (start_date.year * 12 + start_date.month)
puts "#{total_month} Bulan"