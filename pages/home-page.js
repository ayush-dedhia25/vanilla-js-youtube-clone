import VideoCard from "../components/video-card.js";

/**
 * Home Page
 *
 * @param {Object} [props]
 */
function HomePage() {
  const video1 = VideoCard({
    thumbnailUrl:
      "https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg",
    title: "home_widget (Package of the Week)",
    channelName: "Flutter",
    channelLogo:
      "https://lh3.googleusercontent.com/ogw/AGvuzYZpoaG9DZa_Dekey5lqDB6jkQ14WysnfjFLTkRW3Q=s32-c-mo",
    viewCount: "42K",
    uploadTime: "4 days ago",
  });

  return /* html */ `
    <div class="home-page-content">
      <div class="header">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" class="youtube-logo" alt="Youtube Logo" />
        <div class="left-controls">
          <span class="material-symbols-outlined">cast</span>
          <span class="material-symbols-outlined">notifications</span>
          <span class="material-symbols-outlined">search</span>
          <span class="material-symbols-outlined">account_circle</span>
        </div>
      </div>

      <div class="nav-slider">
        <div class="nav-slider-item">
          <span class="material-symbols-outlined">explore</span>
        </div>
        <div class="nav-slider-item">All</div>
        <div class="nav-slider-item">New to you</div>
        <div class="nav-slider-item">ASMR</div>
        <div class="nav-slider-item">Javascript</div>
      </div>

      <div class="home-feed">
        ${video1}
        ${video1}
        ${video1}
      </div>
    </div>
  `;
}

export default HomePage;
