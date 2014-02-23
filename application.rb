require 'sinatra'
require 'haml'
require 'pony'
require 'sinatra/flash'
require './keepalive'

enable :sessions

get '/?' do
  haml :index
end

post '/send_message' do
  name = params[:contact][:name]
  email = params[:contact][:email]
  message = params[:contact][:message]
  spam = params[:contact][:phone]
  if [name, email, message].include?(nil||"")
    redirect '/', flash[:error] = 'Please complete for the form'
  elsif !spam.empty?
    redirect '/', flash[:error] = 'You Suck Spam!'
  else
    Pony.mail({
      to: "Stephen Korecky <skorecky@gmail.com>",
      from: "#{name} <#{email}>",
      subject: "Message from #{name}",
      body: message,
      via: :smtp,
      via_options: {
        address: "smtp.mandrillapp.com",
        port: 587,
        user_name: "skorecky@gmail.com",
        password: "9AdonRwINGpp3cb5gdZwYw",
        authentication: :plain,
        domain: "stephenkorecky.com"
      }
    })
    notice = "Thanks! I got your email. I'll get back to you shortly!"
    redirect '/', flash[:notice] = notice
  end
end