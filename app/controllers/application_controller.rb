class ApplicationController < ActionController::API
  before_action :set_headers

  def set_headers()
    response.set_header("Access-Control-Allow-Origin", "*")
    response.set_header("Access-Control-Allow-Credentials", true)
  end
end
