class CreateInterviews < ActiveRecord::Migration
  def change
    create_table :interviews do |t|
      t.integer :application_id, null: false
      t.datetime :datetime, null: false
      t.integer :duration, default: 30, null: false
      t.string :address, null: false
      t.timestamps null: false
    end

    add_index :interviews, :application_id
  end
end
