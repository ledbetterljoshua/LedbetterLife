class Pin < ActiveRecord::Base
	belongs_to :user

	has_attached_file :image, :styles => { :medium => "700x700>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
end
