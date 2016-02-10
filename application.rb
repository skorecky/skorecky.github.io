require 'sinatra'
require 'haml'
require './keepalive'

enable :sessions

get '/?' do
  cache_control :public, max_age: 3600
  haml :index
end
