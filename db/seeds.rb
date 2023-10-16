# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create(
  username: "lee-oreo",
  name: "Leorio Paradinight",
  user_role: "Student"
)


User.create(
  username: "gonThaFreak",
  name: "Gon Freecs",
  user_role: "Student"
)

User.create(
  username: "Killer",
  name: "Killua Zoldick",
  user_role: "Student"
)

User.create(
  username: "RedEyes",
  name: "Kurapika Kurta",
  user_role: "Student"
)

User.create(
  username: "Chairman",
  name: "Isaac Netero",
  user_role: "Coach"
)

User.create(
  username: "BigBisky",
  name: "Biscuit Kreuger",
  user_role: "Coach"
)

User.create(
  username: "Hunter",
  name: "Ging Freecs",
  user_role: "Coach"
)

rev = Review.create(
  score: 5,
  notes: "They were great"
)

Meeting.create(
  student: User.students.find_by(username: "Killer"),
  coach: User.coaches.find_by(username: "Hunter"),
  start_datetime: Time.now.beginning_of_hour - 5.hours,
  end_datetime: Time.now.beginning_of_hour - 5.hours + 2.hours,
  review_id: rev.id
)


rev = Review.create(
  score: 4,
  notes: "They were a little distracted"
)

Meeting.create(
  student: User.students.find_by(username: "RedEyes"),
  coach: User.coaches.find_by(username: "Hunter"),
  start_datetime: Time.now.beginning_of_hour - 1.day,
  end_datetime: Time.now.beginning_of_hour - 1.day + 2.hours,
  review_id: rev.id
)

Meeting.create(
  student: User.students.find_by(username: "gonThaFreak"),
  coach: User.coaches.find_by(username: "Hunter"),
  start_datetime: Time.now.beginning_of_hour + 1.hour,
  end_datetime: Time.now.beginning_of_hour + 1.hour + 2.hours
)

Meeting.create(
  student: User.students.find_by(username: "Killer"),
  coach: User.coaches.find_by(username: "Hunter"),
  start_datetime: Time.now.beginning_of_hour + 1.day,
  end_datetime: Time.now.beginning_of_hour + 1.day + 2.hours
)

Meeting.create(
  coach: User.coaches.find_by(username: "Hunter"),
  start_datetime: Time.now.beginning_of_hour + 1.day + 3.hours,
  end_datetime: Time.now.beginning_of_hour + 1.day + 5.hours
)





rev = Review.create(
  score: 5,
  notes: "they loved me"
)

Meeting.create(
  student: User.students.find_by(username: "Killer"),
  coach: User.coaches.find_by(username: "BigBisky"),
  start_datetime: Time.now.beginning_of_hour - 5.hours,
  end_datetime: Time.now.beginning_of_hour - 5.hours + 2.hours,
  review_id: rev.id
)

rev = Review.create(
  score: 2,
  notes: "I don't know why I would enter an actual low rating of myself"
)

Meeting.create(
  student: User.students.find_by(username: "RedEyes"),
  coach: User.coaches.find_by(username: "BigBisky"),
  start_datetime: Time.now.beginning_of_hour - 1.day + 1.hour,
  end_datetime: Time.now.beginning_of_hour - 1.day + 3.hours,
  review_id: rev.id
)

Meeting.create(
  student: User.students.find_by(username: "gonThaFreak"),
  coach: User.coaches.find_by(username: "BigBisky"),
  start_datetime: Time.now.beginning_of_hour - 1.hour,
  end_datetime: Time.now.beginning_of_hour + 1.hour
)

Meeting.create(
  student: User.students.find_by(username: "Killer"),
  coach: User.coaches.find_by(username: "BigBisky"),
  start_datetime: Time.now.beginning_of_hour + 1.day,
  end_datetime: Time.now.beginning_of_hour + 1.day + 2.hours
)

Meeting.create(
  coach: User.coaches.find_by(username: "BigBisky"),
  start_datetime: Time.now.beginning_of_hour + 2.days + 1.hours,
  end_datetime: Time.now.beginning_of_hour + 2.days + 3.hours
)






rev = Review.create(
  score: 4,
  notes: "He had no idea how much I lied to him"
)

Meeting.create(
  student: User.students.find_by(username: "Killer"),
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour - 3.days,
  end_datetime: Time.now.beginning_of_hour - 3.days + 2.hours,
  review_id: rev.id
)

rev = Review.create(
  score: 1,
  notes: "Apparently, I come off as grumpy? Will need to circle back on that..."
)

Meeting.create(
  student: User.students.find_by(username: "RedEyes"),
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour - 2.days + 1.hour,
  end_datetime: Time.now.beginning_of_hour - 2.day + 3.hours,
  review_id: rev.id
)

rev = Review.create(
  score: 4,
  notes: "RAGGLE FRAGLE RADDLE.. RADDA RADDA"
)

Meeting.create(
  student: User.students.find_by(username: "gonThaFreak"),
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour - 1.day,
  end_datetime: Time.now.beginning_of_hour - 1.day + 2.hours,
  review_id: rev.id
)

Meeting.create(
  student: User.students.find_by(username: "Killer"),
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour - 6.hours,
  end_datetime: Time.now.beginning_of_hour - 6.hours + 2.hours
)

Meeting.create(
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour - 4.hours,
  end_datetime: Time.now.beginning_of_hour - 4.hours + 2.hours
)

Meeting.create(
  student: User.students.find_by(username: "lee-oreo"),
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour + 4.hours,
  end_datetime: Time.now.beginning_of_hour + 6.hours
)

Meeting.create(
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour + 1.day,
  end_datetime: Time.now.beginning_of_hour + 1.day + 2.hours
)

Meeting.create(
  coach: User.coaches.find_by(username: "Chairman"),
  start_datetime: Time.now.beginning_of_hour + 2.days + 1.hours,
  end_datetime: Time.now.beginning_of_hour + 2.days + 3.hours
)
