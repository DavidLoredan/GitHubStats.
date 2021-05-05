import { useEffect, useState } from 'react';
import axios from 'axios';
import StyledEvent from './styledComponents/Sevents';

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
    <StyledEvent>
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
                <a
                  href={subject.url}
                  target="_blank"
                  rel="noreferrer"
                  key={subject.title}
                >
                  <div className="SubjectInfo">
                    <img
                      src={subject.urlToImage}
                      className="SubjectImage"
                      alt="SubjectImage"
                    />
                    <p className="SubjectTitle">{subject.title}</p>
                    <p className="SubjectDesc">{subject.description}</p>
                    <p className="SubjectDate">
                      <b>Published on</b> {subject.publishedAt.substring(0, 10)}{' '}
                    </p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </StyledEvent>
  );
}

export default Events;
