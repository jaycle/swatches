# Swatch App
Contains a basic swatch app with both client and server code. Swatch app allows browsing of colors by category and picking one
at random. The colors/swatches are stored in a database.

## Backend
Leverages express and sequelize with postgres database. The database is seeded with values spanning the project's labeling of colors.

### Development
- Obtain postgres (docker or native)
- cd into `server/` and run dev server with `npm run dev`.

## Frontend
React application started with create-react-app.

### Development
Develop with `npm run start`. Production build with `npm run build`.

## URL
The app can be found at https://fierce-ocean-48791.herokuapp.com/.

## Remaining Work
- Search functionality
- Darken/lighten functionality
- Filter colors only once (performance)
- Responsive (mobile) view
