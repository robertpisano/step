# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_10_15_170046) do
  create_table "meetings", force: :cascade do |t|
    t.integer "student_id"
    t.integer "coach_id"
    t.datetime "start_datetime"
    t.datetime "end_datetime"
    t.integer "review_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coach_id"], name: "index_meetings_on_coach_id"
    t.index ["review_id"], name: "index_meetings_on_review_id"
    t.index ["student_id"], name: "index_meetings_on_student_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "score"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "{:null=>false, :unique=>true}"
    t.string "user_role", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "meetings", "users", column: "coach_id", on_delete: :cascade
  add_foreign_key "meetings", "users", column: "student_id", on_delete: :cascade
end
