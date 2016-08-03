Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      scope '/todos' do
        get '/' => 'todos#index'
        post '/' => 'todos#create'
        scope '/:id' do
          get '/' => 'todos#show'
          put '/' => 'todos#update'
          delete '/' => 'todos#destroy'
        end
      end
    end
  end
end
