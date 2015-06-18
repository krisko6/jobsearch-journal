# Jobsearch Journal

[Heroku link][heroku]

[heroku]: https://enigmatic-escarpment-1495.herokuapp.com

## Minimum Viable Product

Jobsearch Journal is an application to allow users to keep track of the status of
job applications and scheduled interviews during a job search. Users can:

- [X] Create user accounts
- [X] Create sessions (log in)
- [X] Add new jobs they have applied for
- [X] Change the status of jobs they have applied for
      (applied, contacted, interviewed, offered, turned down, pending, hired)
- [X] Schedule interviews for each job.
- [X] See when the next interviews are scheduled.
- [X] Keep track of offers

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Job Creation (~1 day)
This will be a very basic implementation of auth. Figuring out exactly how to
tie it in with Backbone will be the hardest part of the challenge. I will also
attempt to push it up to Heroku, though I'll need a lot of help for that.

[Details][phase-one]

### Phase 2: Apps Index (~2 days)
The next step is for creating a system for the user to view the status of their
job applications. I will also need to create all of the models. They should be able to view the information about each job, as well as create new jobs

[Details][phase-two]

### Phase 3: Editing Applications (~0.5 day)
Users can alter the status of each job application. They should be able to
add notes and change the status of each application.

[Details][phase-three]

### Phase 4: Scheduling Interviews (~1 day)
Users should be able to schedule and unschedule interviews for each job
application. They will set the time, duration, interview type, and address,
skype name,or phone number. A new interview cannot conflict with any previously
scheduled interviews.

[Details][phase-four]

## Phase 5: Interview Notification (~1 day)
User should be able to get a notification about when their next interview is,
as well as a simple motivational message.

[Details][phase-five]

## Phase 6: Offers (~1 day)
User should be able to add and keep track of offers, for any applications with
"offered" as their status. A new model for offers will be added, with similar
functionailty and structure to interviews.

[Details][phase-six]

### Bonus Features (TBD)

- [X] Pagination/infinite scroll
- [ ] Accordion view for jobs.
- [X] Search/Filter for jobs.
- [ ] User avatars (via gravatar)
- [X] Email notification for an interview.
- [X] Multiple Sessions
- [X] JQuery UI transitions

### TA Suggestions

* Filter applications (checkboxes) X
* Change application status via dropdown in applications index (make index items subviews) X
* Composite view candidate: interview index page (each interview item is a subview) X
* Rescue ArgumentError in controller to render nicer errors X
* escape html is jst templates X

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
