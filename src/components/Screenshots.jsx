import StyledScreenShot from './styledComponents/SscreenShots';

function Screenshots() {
  return (
    <StyledScreenShot>
      <h1 className="titleAPI">EXAMPLES OF API</h1>
      <article className="Events">
        <img
          className="event1"
          src="https://cdn.discordapp.com/attachments/828909702665601046/837261572186308618/unknown.png"
          alt="ScreenShots"
        />
        <img
          className="event2"
          src="https://cdn.discordapp.com/attachments/828909702665601046/837261782405218314/unknown.png"
          alt="ScreenShots"
        />
      </article>
    </StyledScreenShot>
  );
}

export default Screenshots;
