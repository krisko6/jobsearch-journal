# Phase 2: Apps Index

## Rails
### Models
* Application
* Interview

### Controllers
Api::ApplicationsController (create, destroy, index, show)
Api::InterviewsController (create, destroy)

### Views
* applications/show.json.jbuilder

## Backbone
### Models
* Application (parses nested `interviews` association)
* Interview

### Collections
* Applications
* Interviews

### Views
* ApplicationForm
* ApplicationsIndex

## Gems/Libraries
* serializeJSON
