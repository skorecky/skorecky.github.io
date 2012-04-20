require 'sinatra'
require 'haml'
require 'pony'
require 'sinatra/flash'

enable :sessions

get '/?' do
  haml :index
end

get '/contact' do
  haml :contact
end

post '/contact' do
  name = params[:name]
  email = params[:email]
  message = params[:message]
  spam = params[:phone]
  if spam != ""
    redirect "/contact", flash[:error] = "You Suck Spam!"
  else
    Pony.mail(:to => 'rkorecky@silverlininggroup.com', :from => email, :subject => "Sales Inquery from #{name}", :body => message, :via => :smtp, :via_options => {
      :address              => 'smtp.gmail.com',
      :port                 => '587',
      :enable_starttls_auto => true,
      :user_name            => 'skorecky@gmail.com',
      :password             => '6Ks9:I0I4-4+gSD',
      :authentication       => :plain, # :plain, :login, :cram_md5, no auth by default
    })
    redirect "/contact", flash[:notice] = "Thanks! We got your email. We'll get back to you shortly!"
  end
end

helpers do
  def active_class(path)
    URI.parse(request.path_info).path =~ /#{path}/ ? 'active' : nil
  end
end