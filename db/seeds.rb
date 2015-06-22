# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(email: 'christochris@sbcglobal.net', password:'password')

a1 = Application.create(user_id: 1, company: 'AppAcademy', position: 'TA', status: 'Applied', url: 'www.appacademy.io', notes: 'Where I currently am.')
a2 = Application.create(user_id: 1, company: 'Reddit', position: 'Software Developer', status: 'Offered', url: 'www.reddit.com', notes: 'Might be good.')
a3 = Application.create(user_id: 1, company: 'PG&E', position: 'Software Developer', status: 'Contacted', url: 'www.pge.com', notes: 'Interview Prepared.')
a4 = Application.create(user_id: 1, company: 'Zendesk', position: 'Software Engineer', status: 'Applied', url: 'www.zendesk.com', notes: 'Where I currently am.')
a5 = Application.create(user_id: 1, company: 'LinkedIn', position: 'Web Developer', status: 'Pending', url: 'www.linkedin.com', notes: 'Considering applying.')
a6 = Application.create(user_id: 1, company: 'Google', position: 'YouTube Developer', status: 'Interviewed', url: 'www.youtube.com', notes: 'Might be good.')
a7 = Application.create(user_id: 1, company: 'Apple', position: 'iOS Developer', status: 'Declined', url: 'www.apple.com', notes: 'Turned down.')
a8 = Application.create(user_id: 1, company: 'Pinterest', position: 'Software Developer', status: 'Declined', url: 'www.pinterest.com', notes: 'No interest in the position.')
a9 = Application.create(user_id: 1, company: 'Smule', position: 'Android Developer', status: 'Pending', url: 'www.smule.com', notes: 'Considering applying.')
a10 = Application.create(user_id: 1, company: 'Twitter', position: 'Android Developer', status: 'Contacted', url: 'www.twitter.com', notes: 'Considering applying.')


i1 = Interview.create(application_id: 1, datetime: DateTime.new(2015,7,25), duration: 30, address: '1061 Market St.', style: 'In-Person')
i2 = Interview.create(application_id: 2, datetime: DateTime.new(2015,6,20), duration: 30, address: '520 3rd St.', style: 'In-Person')
i3 = Interview.create(application_id: 3, datetime: DateTime.new(2015,7,27), duration: 30, address: '1-(800)-743-5000', style: 'Phone')
i4 = Interview.create(application_id: 6, datetime: DateTime.new(2015,6,18), duration: 50, address: 'Online Technical Test', style: 'Other')
i5 = Interview.create(application_id: 7, datetime: DateTime.new(2015,6,15), duration: 30, address: 'admin@apple.com', style: 'Skype')


o1 = Offer.create(notes: 'Really nice.', application_id: 2, due_date: DateTime.new(2015,8,1), salary: 80000, bonus: 5000, vacation: 10)
o2 = Offer.create(notes: 'Didnt care for the offer', application_id: 8, due_date: DateTime.new(2015,6,27), salary: 60000, bonus: 4000, vacation: 10)
