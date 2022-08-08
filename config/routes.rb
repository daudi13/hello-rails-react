Rails.application.routes.draw do

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  scope '/api' do
    resources :greetings, only: [:index]
  end

  get '*path', to: 'static#index', constraints: ->(req) do
  ! req.xhr? && req.format.html?
  end
    root "static#index"
end
