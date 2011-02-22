require 'rubygems'
require 'sinatra'
require 'haml'
require 'rack-flash'
require File.join(Sinatra::Application.root, 'lib', 'mailer')

use Rack::Session::Cookie
use Rack::Flash

error do
	e = request.env['sinatra.error']
	puts e.to_s
	puts e.backtrace.join("\n")
	"Application error"
end

layout 'layout'

### Public

get '/' do
  haml :index
end

post '/send_mail' do
  Mailer.deliver_my_email(params)
  flash[:notice] = "Message sent. Thank you!"
  redirect '/'
end

if __FILE__ == $0
  set(:run, false)
end