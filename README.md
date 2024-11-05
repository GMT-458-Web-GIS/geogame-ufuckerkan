# Design of the GeoGame
## Overview
This GeoGame is an interactive map-based game that challenges players to identify famous landmarks around the world. Players will explore different locations on a map, view images of landmarks, and type in the correct name of each landmark to score points. The objective is to achieve the highest score possible by accurately identifying as many landmarks as possible within a given time.

# Game Mechanics
## Map Interface:

A world map will be displayed on the screen, showing multiple clickable markers in various locations.
Each marker represents a famous landmark or a culturally significant site.
The user can navigate around the map by zooming and panning to explore different regions.
## Location Markers:

Specific locations on the map will be marked with icons or pins to indicate the presence of a landmark.
When the player hovers over a marker, a tooltip with the name of the country or city might appear as a hint.
## Photo Display & Landmark Identification:

Upon clicking a location marker, a pop-up will appear showing a photo of the landmark associated with that location.
The player will need to type in the correct name of the landmark based on the image shown.
For example, if the player clicks on a marker in Paris, a photo of the Eiffel Tower will be displayed, and the player must enter "Eiffel" or "Eiffel Tower" to score points.
## Input & Validation:

An input field will be provided below the photo for the player to type their answer.
The game will check the player's answer for correctness and handle minor spelling variations to ensure fair gameplay.
Correct answers will result in a score increase, while incorrect attempts may either have a penalty or offer additional hints (e.g., the first letter of the landmark name).
## Scoring System:

Points will be awarded for each correct answer.
Additional points may be awarded based on speed, accuracy, or the difficulty level of the landmark.
A cumulative score will be displayed, and the player’s highest score will be recorded to encourage repeated play.
## Timer & Difficulty Levels:

The game will include a timer that limits how long a player has to complete the game.
Optional difficulty levels could be set to show more obscure landmarks for advanced players or provide fewer hints.
## End of Game:

When the timer runs out or when the player has guessed all landmarks, the game will display the final score.
The player will have the option to restart the game to attempt a higher score.
# User Interface Layout
Top Section: Displays the game title, instructions, and a score counter.
## Main Section:
### Map Area:
The primary interactive map where players can click markers to view landmark photos.
### Photo & Input Popup: 
A popup window or side panel that appears upon marker selection, showing the landmark photo and an input field for the answer.
### Bottom Section:
Timer and a "Hint" button if hints are enabled for gameplay.
### End Screen:
Displays final score, options to restart or share the score.
# Technologies and Libraries
## JavaScript Library:
The game will use [chosen JS library name] (e.g., Leaflet, D3.js, or OpenLayers) for map integration and interactivity.
## CSS Framework:
Optional use of a CSS framework like Bootstrap for styling and layout consistency.
Deployment: The game will be hosted as an online web application, accessible via GitHub Pages or a similar platform.
