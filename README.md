
## Final Game Link: https://gmt-458-web-gis.github.io/geogame-ufuckerkan/


## DOM Interaction

The DOM was heavily interacted with in this project to create the game interface. Key DOM elements, such as the input field, buttons, and image elements, were accessed and modified dynamically using JavaScript. For example:

- The input field’s value is accessed to check the player’s guess.
- The score display is updated after each guess.
- The landmark image is dynamically set based on the current landmark being guessed.
- The map view is adjusted using Leaflet based on the player's interactions.

These interactions allowed for real-time updates and an interactive user experience.

## Three Event Handlers
1. Submit Guess Button Event Handler
Description: This event handler is attached to the "Gönder" (Submit) button in the game interface.
How it works: When the player clicks the "Gönder" button, it triggers an event that retrieves the player's guess from the input field. The guess is then checked against the list of valid names (both the English and Turkish versions) for the current landmark.
Outcome:
If the guess is correct, the player is shown a success message, and the map is updated, showing the location of the landmark.
If the guess is incorrect, the player is prompted to try again with a warning and loses a point. The score is updated accordingly.
2. Map Click Event Handler
Description: This event is triggered when the user clicks anywhere on the map.
How it works: After the player has guessed the correct landmark name, they are asked to click on the map to identify where the landmark is located.
Outcome:
When the user clicks on the map, the event handler checks if the clicked location is close enough to the actual location of the landmark (within a 70-meter radius).
If the click is correct, the game moves on to the next landmark, and the score is updated.
If the click is incorrect, the user is shown how far they were from the correct location and loses a point.
3. Next Landmark Loading
Description: This event handler is responsible for loading the next landmark in the game after the player has made their guess and either succeeded or failed.
How it works: This handler is invoked after each correct or incorrect guess. It loads the next landmark's image and resets the input field, allowing the player to make their next guess.
Outcome: The game progresses with a new landmark image, and the input field is cleared for the next guess.
These event handlers enable a dynamic, interactive game experience where the player makes guesses, interacts with the map, and receives real-time feedback on their performance.

## Benefit from Closures

Closures are used effectively in this project to manage the game state and keep certain variables persistent across different parts of the game. Here's how they are beneficial:

### 1. **Game State Management**:
   - **State Variables**: Variables like `score`, `currentLandmarkIndex`, and `waitingForClick` are encapsulated within closures, ensuring they persist without being exposed globally.
   - **Encapsulation**: Closures help isolate game state management, reducing the risk of conflicts and making the code cleaner.

### 2. **Score Management with `updateScore`**:
   - The `updateScore` function accesses the `score` variable within its closure and updates it dynamically as the player progresses through the game.
   ```javascript
   function updateScore(points) {
     score += points;
   }
   ```






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
