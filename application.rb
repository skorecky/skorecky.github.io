require 'sinatra'
require 'haml'
require 'pony'
require 'sinatra/flash'
require './helpers'
require './keepalive'

enable :sessions

get '/?' do
  haml :index
end

post '/send_message' do
  name = params[:name]
  email = params[:email]
  message = params[:message]
  spam = params[:phone]
  if name == '' or email == '' or message == ''
    redirect '/', flash[:error] = 'Please complete for the form'
  elsif spam != ''
    redirect '/', flash[:error] = 'You Suck Spam!'
  else
    Pony.mail({
      to: 'skorecky@gmail.com',
      from: email,
      sender: email,
      reply_to: email,
      subject: "Message from #{name}",
      body: message,
      via: :smtp,
      via_options: {
        address: 'smtp.mandrillapp.com',
        port: '587',
        user_name: 'skorecky@gmail.com',
        password: '9AdonRwINGpp3cb5gdZwYw',
        authentication: :plain,
        domain: 'stephenkorecky.com'
      }
    })
    redirect '/', flash[:notice] = "Thanks! We got your email. We'll get back to you shortly!"
  end
end

helpers do
  def active_class(path)
    URI.parse(request.path_info).path =~ /#{path}/ ? 'active' : nil
  end
end