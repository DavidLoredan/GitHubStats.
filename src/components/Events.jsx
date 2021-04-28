import { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.scss';

function Events() {
  const [actu, setActu] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f58891b4575e4349939c7f3f38aff6ca'
      )
      .then(({ data }) => {
        setActu(data.articles);
      });
  }, []);

  return (
    <div className="InfoContainer">
      <h1 className="InfoTitle">WHAT&apos;S NEW ?</h1>
      <div className="Infos">
        {actu
          .sort(function compare(repoA, repoB) {
            return repoB.publishedAt - repoA.publishedAt;
          })
          .slice(0, 2)
          .map((subject) => {
            return (
              <div className="SubjectInfo">
                <img
                  src={subject.urlToImage}
                  className="SubjectImage"
                  alt="SubjectImage"
                />
                <p className="SubjectTitle">
                  <b>TITLE</b> : {subject.title}
                </p>
                <p className="SubjectDesc">
                  <b>DESCRIPTION</b> : {subject.description}
                </p>
                <p className="SubjectUrl">
                  <b>URL</b> :{' '}
                  <a href={subject.url} target="_blank" rel="noreferrer">
                    {subject.url}
                  </a>
                </p>
                <p className="SubjectDate">
                  <b>PUBLICATION DATE</b> :
                  {subject.publishedAt.substring(0, 10)} <br />
                  {subject.publishedAt.substring(11, 19)}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Events;
