Rails.application.routes.draw do

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace :api , default: {format: 'json'} do
    resources :greetings, only: [:index]
  end

    root "static#index"
    get '*path', to: 'static#index'
end
