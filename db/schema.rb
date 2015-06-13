# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150612164731) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.integer  "user_id",                        null: false
    t.string   "company",                        null: false
    t.string   "position",                       null: false
    t.string   "status",     default: "Pending"
    t.string   "url"
    t.text     "notes"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "applications", ["user_id"], name: "index_applications_on_user_id", using: :btree

  create_table "interviews", force: :cascade do |t|
    t.integer  "application_id",                       null: false
    t.datetime "datetime",                             null: false
    t.integer  "duration",       default: 30,          null: false
    t.string   "address",                              null: false
    t.string   "style",          default: "In-Person", null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  add_index "interviews", ["application_id"], name: "index_interviews_on_application_id", using: :btree

  create_table "offers", force: :cascade do |t|
    t.text     "notes"
    t.integer  "application_id", null: false
    t.datetime "due_date",       null: false
    t.integer  "salary"
    t.integer  "bonus"
    t.string   "vacation"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "offers", ["application_id"], name: "index_offers_on_application_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
