class Post < ActiveRecord::Base
	belongs_to :user
	has_one :profile
	has_attached_file :image, :styles => { :medium => "200x200>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
end
	


