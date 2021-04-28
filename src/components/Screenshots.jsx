import StyledScreenShot from './styledComponents/SscreenShots';

function Screenshots() {
  return (
    <StyledScreenShot>
      <h1 className="titleAPI">EXAMPLES OF API</h1>
      <article className="Events">
        <img
          className="event1"
          src="https://www.linkpicture.com/q/screenshotAPI.png"
          alt="ScreenShots"
        />
        <img
          className="event2"
          src="https://www.linkpicture.com/q/screenshotAPI.png"
          alt="ScreenShots"
        />
      </article>
    </StyledScreenShot>
  );
}

export default Screenshots;
