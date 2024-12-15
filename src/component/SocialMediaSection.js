import React from 'react';
import './SocialMediaSetion.css';
const SocialMediaSetion = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/jipanali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank", "noopener noreferrer");
  };
  const handleClick2 = () => {
    window.open("https://x.com/JipanAli?t=nGdyNLR3kUH5funUWETr2w&s=08", "_blank", "noopener noreferrer");
  };
  const handleClick3 = () => {
    window.open("https://youtube.com/@jipan-j2p?si=dQEBO2DFG10EoNbn", "_blank", "noopener noreferrer");
  };
  const handleClick4 = () => {
    window.open("https://github.com/jipanali", "_blank", "noopener noreferrer");
  };
  return (
    <div className="SocialMediaSetion">
      <ul>

        <button className="button"onClick={handleClick}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM7.056 20H3.711V9H7.056V20ZM5.383 7.661C4.229 7.661 3.289 6.721 3.289 5.567C3.289 4.413 4.229 3.473 5.383 3.473C6.537 3.473 7.477 4.413 7.477 5.567C7.477 6.721 6.537 7.661 5.383 7.661ZM20.056 20H16.711V14.556C16.711 13.392 16.703 11.929 15.211 11.929C13.703 11.929 13.484 13.079 13.484 14.463V20H10.139V9H13.328V10.277H13.375C13.811 9.44 14.866 8.556 16.461 8.556C19.251 8.556 20.056 10.435 20.056 12.929V20Z"
              fill="currentColor"
            />
          </svg>

        </button>

        <button className="button"onClick={handleClick2}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              clip-rule="evenodd"
              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>

        <button className="button"onClick={handleClick3}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              clip-rule="evenodd"
              d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>

        <button className="button"onClick={handleClick4}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              clip-rule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>


      </ul>
    </div>
  );
};

export default SocialMediaSetion;
