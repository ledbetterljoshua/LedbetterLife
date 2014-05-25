App::Application.routes.draw do
  resources :posts
  resources :pins

  devise_for :users
  root "posts#index"

  get "main" => "pages#main"
  get "joshua" => "pages#joshua"
  get "pins" => "pages#pins"
  get "my_page" => "pages#my_page"
end
