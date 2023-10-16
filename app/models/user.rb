class User < ApplicationRecord
  has_many :meetings

  scope :coaches, -> { where(user_role: COACH) }
  scope :students, -> { where(user_role: STUDENT) }

  ACCEPTABLE_ROLES = [
    COACH = "Coach",
    STUDENT = "Student"
  ]
end
