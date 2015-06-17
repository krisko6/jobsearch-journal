# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(email: 'christochris@sbcglobal.net', password:'password')
u2 = User.create(email: 'krisko643@gmail.com', password:'temporary')

a1 = Application.create(user_id: 1, company: 'AppAcademy', position: 'TA', status: 'Applied', url: 'www.appacademy.io', notes: 'Where I currently am.')
a2 = Application.create(user_id: 2, company: 'AppAcademy', position: 'TA', status: 'Applied', url: 'www.appacademy.io', notes: 'Looking for somewhere new.')
a3 = Application.create(user_id: 1, company: 'Reddit', position: 'Software Developer', status: 'Offered', url: 'www.reddit.com', notes: 'Might be good.')
a4 = Application.create(user_id: 2, company: 'PG&E', position: 'Software Developer', status: 'Interviewed', url: 'www.appacademy.io', notes: 'Interview went well.')
a5 = Application.create(user_id: 1, company: 'PG&E', position: 'Software Developer', status: 'Contacted', url: 'www.appacademy.io', notes: 'Interview Prepared.')
a6 = Application.create(user_id: 2, company: 'Reddit', position: 'Software Developer', status: 'Offered', url: 'www.reddit.com', notes: 'Looking forwrd to more')

i1 = Interview.create(application_id: 1, datetime: DateTime.new(2015,6,20), duration: 30, address: '1061 Market St.', style: 'In-Person')
i2 = Interview.create(application_id: 2, datetime: DateTime.new(2015,6,20), duration: 30, address: 'admin@appacademy.io', style: 'Skype')
i3 = Interview.create(application_id: 3, datetime: DateTime.new(2015,6,13), duration: 30, address: '520 3rd St.', style: 'In-Person')
i4 = Interview.create(application_id: 5, datetime: DateTime.new(2015,6,23), duration: 30, address: '215 Market St.', style: 'In-Person')

o1 = Offer.create(notes: 'Really nice', application_id: 3, due_date: DateTime.new(2015,6,27), salary: 80000, bonus: 5000, vacation: 10)
o2 = Offer.create(notes: 'Job looks promising', application_id: 6, due_date: DateTime.new(2015,6,27), salary: 80000, bonus: 5000, vacation: 10)
