class UrbanYoga
  include HTTParty

  def initialize
  end

  def programs
    program_data = self.class.get('https://api.myjson.com/bins/5bdb3')
    program_data
  end

  def prices
    price_data = self.class.get('https://api.myjson.com/bins/17oy7')
    price_data
  end
end