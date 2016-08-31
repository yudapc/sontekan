#
# GET with dinamic parameter
# Source
# http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html
#
require 'net/http'

destination_url = "http://mokapos-test.ddns.net:3001/users"
uri = URI(destination_url)
params = { q: 'trial', start_date: '01/08/2016', end_date: '29/08/2016' }
uri.query = URI.encode_www_form(params)

res = Net::HTTP.get_response(uri)
puts res.body if res.is_a?(Net::HTTPSuccess)