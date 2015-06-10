class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.integer :user_id, null:false
      t.string :company, null: false
      t.string :position, null: false
      t.string :status, default: 'Pending'
      t.string :url
      t.text :notes
      t.timestamps null: false
    end

    add_index :applications, :user_id
  end

end
