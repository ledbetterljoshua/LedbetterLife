App::Application.routes.draw do
  resources :profiles

  resources :avatars

  get "profiles/show"
  resources :posts
  resources :pins

  devise_for :users
  root "pages#joshua"
  

  get "portfolio" => "pages#portfolio"
  get "joshua" => "pages#joshua"
  get "pins" => "pages#pins"
  get "my_page" => "pages#my_page"
end
