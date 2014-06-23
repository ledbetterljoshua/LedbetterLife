class Profile < ActiveRecord::Base
	belongs_to :user
	has_many :avatars
	has_many :posts
	has_many :pins
end
