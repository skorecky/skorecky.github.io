require 'sinatra'
require 'haml'
require 'pony'
require 'sinatra/flash'
require "./helpers"
require "./keepalive"

enable :sessions

get '/?' do
  haml :index
end

post "/send_message" do
  name = params[:name]
  email = params[:email]
  message = params[:message]
  spam = params[:phone]
  if name == "" or email == "" or message == ""
    redirect "/", flash[:error] = "Please complete for the form"
  elsif spam != ""
    redirect "/", flash[:error] = "You Suck Spam!"
  else
    Pony.mail({
      :to => 'skorecky@gmail.com',
      :from => email,
      :sender => email,
      :reply_to => email,
      :subject => "Message from #{name}",
      :body => message,
      :via => :smtp,
      :via_options => {
        :address              => 'smtp.sendgrid.net',
        :port                 => '25',
        :user_name            => 'app8340220@heroku.com',
        :password             => '3suqavbj',
        :authentication       => :plain, # :plain, :login, :cram_md5, no auth by default
        :domain               => "stevedj.com" # the HELO domain provided by the client to the server
      }
    })
    redirect "/", flash[:notice] = "Thanks! We got your email. We'll get back to you shortly!"
  end
end

helpers do
  def active_class(path)
    URI.parse(request.path_info).path =~ /#{path}/ ? 'active' : nil
  end
end