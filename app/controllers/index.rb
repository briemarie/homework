require 'nokogiri'

get '/' do
  # API calls
  # programs_api = "https://api.myjson.com/bins/5bdb3"

  # doc = Nokogiri::HTML(open(programs_api))
  # @program_data = doc.xpath("")

  # pricing_api = "https://api.myjson.com/bins/17oy7"

  # doc = Nokogiri::HTML(open(programs_api))
  # @pricing_data = doc.xpath("")

  #Template rendering
  erb :index
end



