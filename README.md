# NASA APOD Web App

## Technologies Used

- **React + Vite (Javascript)**

- **Redux Toolkit**

- **Axios**: Axios is used for making HTTP requests to the NASA APOD API to fetch Astronomy Picture of the Day data.

## Approach

The web app follows a component-based architecture, with key components including `ApodItem`, `DateSelection`, and `Card`.

- **Date Selection**: The user can select a date range using the `DateSelection` component.

- **Card Display**: Astronomy Picture of the Day data is displayed in card format using the `Card` component. Users can click on a card to view detailed information.

- **Detailed View**: Clicking on a card opens the detailed view, showing the selected image, copyright info if provided, title, date, and explanation. Users can go back to the card list using the "Go Back to List" button.

## Usage Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app with `npm start`.

## Unsolved Problems

Currently, users can only navigate back to the list by clicking the "Go Back to List" button. Implementing browser navigation (using the browser's back icon) for a more seamless user experience is a potential improvement.
