/**
 * Youtube video card component
 *
 * @param {Object} props - Video Card Data
 * @param {string} props.thumbnailUrl - Thumbnail image url of the video
 * @param {string} props.title - Title of the video
 * @param {string} props.channelName - Channel name of the video
 * @param {string} props.channelLogo - Channel logo of the video
 * @param {number} props.viewCount - Number of views on the video
 * @param {string} props.uploadTime - Upload time of the video
 *
 * @returns {string}
 */
function VideoCard({
  thumbnailUrl,
  title,
  channelName,
  channelLogo,
  viewCount = 0,
  uploadTime,
}) {
  return /* html */ `
    <div class="video-card">
      <div class="video-card-thumbnail" style="background-image: url('${thumbnailUrl.trim()}');">
      </div>
      <div class="video-card-content">
        <div class="video-uploader-logo-container">
          <img src="${channelLogo.trim()}" class="video-uploader-logo" alt="Channel logo" />
        </div>
        <div class="video-content-wrapper">
          <h3 class="video-title">${title.trim()}</h3>
          <p class="video-details">${channelName.trim()} • ${viewCount} • ${uploadTime}</p>
        </div>
      </div>
    </div>
  `;
}

export default VideoCard;
