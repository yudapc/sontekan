require 'uri'

# full_url = "https://www.mokapos.com/en/support"
full_url = "https://blog.mokapos.com/category"
uri_parse = URI.parse(full_url)
puts uri_parse.host

