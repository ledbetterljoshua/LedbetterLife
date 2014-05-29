class Pin < ActiveRecord::Base
	belongs_to :user

	def previous
  Pin.where(["id < ?", id]).order(:id).last
	end

	def next
  Pin.where(["id > ?", id]).order(:id).first
	end

	has_attached_file :image, :styles => { :medium => "700x700>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

end

