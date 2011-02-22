require 'lib/smtp_tls'
require 'action_mailer'

class Mailer < ActionMailer::Base
  def my_email(params)
    recipients "skorecky@gmail.com"
    from       params['from_email']
    subject    "Contact from " + params['from_name']

    body :name => params['from_name'], :email => params['from_email'], :message => params['message']
  end
end

Mailer.template_root = File.dirname(__FILE__)
Mailer.delivery_method = :smtp
Mailer.smtp_settings = {
  :tls => true,
  :address => "smtp.gmail.com",
  :port => "587",
  :authentication => :plain,
  :enable_starttls_auto => true,
  :user_name => "skorecky@gmail.com",
  :password => "6Ks9:I0I4-4+gSD",
  :raise_delivery_errors => true
}
Mailer.logger = Logger.new(STDOUT)