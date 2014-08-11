class AddPostsToProfiles < ActiveRecord::Migration
  def change
  	add_column :posts, :title, :body, :string
  end
end
