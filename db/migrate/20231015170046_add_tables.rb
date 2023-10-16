class AddTables < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username, { null: false, unique: true }
      t.string :user_role, null: false
      t.string :name, null: false
      t.timestamps
    end

    create_table :reviews do |t|
      t.integer :score
      t.text :notes
      t.timestamps
    end

    create_table :meetings do |t|
      t.references :student, null: true, foreign_key: {to_table: :users, on_delete: :cascade}
      t.references :coach, null: true, foreign_key: {to_table: :users, on_delete: :cascade}
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.references :review , null: true
      t.timestamps
    end
  end
end
