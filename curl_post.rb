#
# GET with dinamic parameter
# Source
# http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html
#
require 'net/http'

destination_url = "https://www.google.com/recaptcha/api/siteverify"
uri = URI(destination_url)
res = Net::HTTP.post_form(uri, 'secret' => '6LereigTAAAAAEmoyFe8Qfur6gELkkGNy-vtDJOB', 'response' => 'dIkjch', 'remoteip' => '127.0.0.1')
puts res.body.class