Rails.application.routes.draw do
  get 'meetings/:user_id' => "meetings#index"
  post 'meetings' => "meetings#create"
  post 'meetings/:meeting_id' => "meetings#update"

  get 'review/:review_id' => "review#show"
  post 'review' =>  "review#create"

  get 'student/:student_id' => "student#show"

  get 'coach/index'
  get 'coach/:coach_id' => "coach#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
