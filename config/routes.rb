App::Application.routes.draw do
  resources :pins

  devise_for :users
  root "pages#home"

  get "about" => "pages#about"
  get "contact" => "pages#contact"
  get "my_page" => "pages#my_page"
end
