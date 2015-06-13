class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.text :notes
      t.integer :application_id, null: false
      t.datetime :due_date, null: false
      t.integer :salary
      t.integer :bonus
      t.string :vacation
      t.timestamps null: false
    end

    add_index :offers, :application_id
  end
end
