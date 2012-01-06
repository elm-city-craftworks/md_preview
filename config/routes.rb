Rails.application.routes.draw do
  post "markdown/parse" => "markdown#parse"
end