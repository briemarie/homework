require 'httparty'

get '/' do
  # API calls

  data = UrbanYoga.new
  @programs = data.programs
  @prices = data.prices

  # Template rendering
  erb :index
end



