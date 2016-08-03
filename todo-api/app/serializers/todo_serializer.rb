class TodoSerializer < ActiveModel::Serializer
  attributes :id, :text, :completed
end
