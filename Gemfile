source 'https://rubygems.org'
ruby "2.0.0"

# PostgreSQL driver
gem 'pg'

# Sinatra driver
gem 'sinatra'
gem 'sinatra-contrib'

# Use Thin for our web server
gem 'thin'

# activerecord ORM
gem 'activesupport'
gem 'activerecord'

# For api calls
gem 'nokogiri', '~> 1.6.6.2'

# Needed for development
gem 'rake'
gem 'shotgun'

group :test do
  gem 'shoulda-matchers'
  gem 'rack-test'
  gem 'capybara'
  gem 'selenium-webdriver'
end

group :test, :development do
  gem 'rspec'
  gem 'factory_girl'
  gem 'faker'
end

