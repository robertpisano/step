class Review < ApplicationRecord
  has_one :meeting

  # validates :score, numericality: { only_integer: true, less_than_or_equal_to: 5, greater_than_or_equal_to: 1}
end
