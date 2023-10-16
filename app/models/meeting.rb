class Meeting < ApplicationRecord
  belongs_to :student, class_name: "User", optional: true
  belongs_to :coach, class_name: "User"
  belongs_to :review, optional: true


  # validates :start_datetime, comparison: { equal_to: start_datetime.beginning_of_hour }
  # vaildates :end_datetime, comparison: { equal_to: end_datetime.beginning_of_hour }
  # vaildates :end_datetime, comparison: { equal_to: start_datetime + 2.hours }

end
