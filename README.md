# Population-Management-System
This is a system that manages the population of states in Nigeria

## Features
* Users can create location
* Users can get all locations
* Users can get a single location
* Users can update a location detail
* Users can delete a location detail

## API
### POST ('/api/v1/location/population')
* location, malePopulation, femalePopulation

### GET ('/api/v1/location/population')

### GET A SINGLE LOCATION ('/api/v1/location/population/:locationId')

### UPDATE (/api/v1/location/population/:locationId)
* location, malePopulation, femalePopulation

### DELETE (/api/v1/location/population/:locationId)
* location, malePopulation, femalePopulation