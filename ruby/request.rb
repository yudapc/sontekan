# Source
# https://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html

require 'net/http'

#GET
Net::HTTP.get('musik.boxgue.com', '/index.html') # => String

# GET by URI
uri = URI('http://musik.boxgue.com/chords?page=2')
Net::HTTP.get(uri) # => String

# Get with dynamic parameters
uri = URI('http://musik.boxgue.com/search')
params = { :limit => 10, :page => 3 }
uri.query = URI.encode_www_form(params)
res = Net::HTTP.get_response(uri)
puts res.body if res.is_a?(Net::HTTPSuccess)

# POST
uri = URI('http://www.example.com/search.cgi')
res = Net::HTTP.post_form(uri, 'q' => 'ruby', 'max' => '50')
puts res.body

# POST with multiple values
uri = URI('http://www.example.com/search.cgi')
res = Net::HTTP.post_form(uri, 'q' => ['ruby', 'perl'], 'max' => '50')
puts res.body
