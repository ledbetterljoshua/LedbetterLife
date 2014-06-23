class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

 	has_many :pins 
 	has_many :posts
 	has_many :avatars
 	has_one :profile

 	validates :name, presence: true

end
