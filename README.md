<div id="header">
  <h1> Revi Travel</h1>
  <p> Revi Travel helps users discover and share the best hidden gems for one-day adventures. Users can browse a collection of unique destinations, each with a short description and location details. Additionally, they can contribute by sharing their own hidden gems for others to explore. </p>
  <div align="center">
    <span font-size="1.55rem"><strong><a href="https://revi-travel.netlify.app" target="_blank">Live Site</a></strong></span>
  </div>
  
</div>
<div align="center">&nbsp;
   <img src="https://github.com/user-attachments/assets/8d27edc1-2a4f-4503-8c6b-9bf58202e9ce" alt="A gif capturing the screen as the user searches for 'Beef' on the website, before scrolling down, exploring the page." width="82.5%"/>
</div>
<div>
  <h2>How it's made:</h2>
  <div align="center">
    <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="ReactJS Logo" height="27.5"/>&nbsp;
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=orange" alt="Vite Logo" height="27.5"/>&nbsp;
    <img src="https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss" alt="Tailwind CSS Logo" height="27.5"/>&nbsp;
    <img src="https://img.shields.io/badge/cloudinary-3F5FFF?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary Logo" height="27.5"/>&nbsp;
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Axios&color=022915&logo=Axios&logoColor=FFFFFF&label=" alt="Cloudinary Logo" height="27.5"/>&nbsp;
  </div>
  <p>The app is built to enable users to interact with various functionalities including making requests through Axios for creating, updating, and deleting posts, as well as managing user authentication with account registration and login. When uploading a posts, Cloudinary is integrated to handle image storage and hosting.</p>
  <p>React Router DOM is employed to enable dynamic routing, allowing users to easily switch between the homepage, post pages, account page and more. Additionally, React Toastify is implemented for user-friendly notifications, ensuring that users receive real-time responses to their specific requests. </p>
</div>
<div>
  <h2>Install</h2>
  <code>npm install</code>
  <ul>
    <li><strong>axios</strong>: Sending requests & interacting with the server.</li>
    <li><strong>cloudinary</strong>: Image storage & hosting.</li>
    <li><strong>react</strong>: Library for building user interfaces based on components.</li>
    <li><strong>react-dom</strong>:  Entry point to the DOM and server renderers for React.</li>
    <li><strong>react-icons</strong>: Include popular icons in your React projects easly with react-icons.</li>
    <li><strong>react-responsive-carousel</strong>: Lightweight & customizable carousel component.</li>
    <li><strong>react-router-dom</strong>: Route configuration and data loading.</li>
    <li><strong>react-spinners</strong>: Collection of loading spinners for your React app.</li>
    <li><strong>react-toastify</strong>: Allows you to add notifications to your app with ease.</li>
  </ul>
</div>
<div>
  <h2>Optimization</h2>
  <ul>
    <li>Implementation of commenting functionality to increase user engagement with posts.</li>
    <li>Map Integration - Improves user experience by providing an interactive geographical perspective of the shared locations</li>
    <li>Add the ability to save/favourite posts - using local storage or a database. Allows the app to offer a more personalized experience, encouraging users to return and explore their saved content easily.</li>
  </ul>
</div>
<div>
  <h2>Lessons Learned</h2>
  <p><strong>Loader vs useEffect</strong> - Loaders allow data to be fetched before the component renders. This prevents rendering the component with an empty state, and then re-rendering once the data is fetched (an issue I faced when using useEffect). Simply put, loaders are useful when you want to declaratively fetch data before rendering a component, specifically when working with React Router, while useEffect would be employed when data fetching/side effects that occur happen after the component is already rendered. </p>
  <p><strong>Routing implementation within SPA</strong> - Using react-router-dom to manage different 'pages' & navigation between views.</p>
</div>
  

    
 

  
