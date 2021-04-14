import './scss/Events.scss';

function Events() {
  return (
    <div className="EventsContainer">
      <h1 className="eventsTitle">COMING EVENTS</h1>
      <article className="Events">
        <img
          className="Event"
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          alt="Event"
        />
        <img
          className="Event"
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          alt="Event"
        />
        <img
          className="Event"
          src="https://media.istockphoto.com/photos/application-programming-interface-connect-services-on-internet-and-picture-id1208498558"
          alt="Event"
        />
        <img
          className="Event"
          src="https://media.istockphoto.com/photos/application-programming-interface-connect-services-on-internet-and-picture-id1208498558"
          alt="Event"
        />
      </article>
    </div>
  );
}

export default Events;
