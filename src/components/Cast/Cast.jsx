// import css from './cast.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getCast,
  getPosterPath,
} from 'components/services/ApiService/ApiService';
const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const FeachCast = async () => {
      try {
        const data = await getCast(id);
        const cast = [];
        data.cast.forEach(element => {
          const alreadyExistElement = cast.find(
            existingElement => existingElement.id === element.id
          );
          if (!alreadyExistElement) {
            cast.push(element);
          }
        });

        setActors(cast);
      } catch ({ response }) {
        console.log(response.date.messege);
      }
    };
    FeachCast();
  }, [id]);

  const elements = actors.map(({ id, profile_path, name }) => (
    <li key={id}>
      <img src={getPosterPath(profile_path, 200)} alt={name} />
      <p>{name}</p>
    </li>
  ));
  return (
    <>
      {actors && actors.length > 0 ? (
        <ul>{elements}</ul>
      ) : (
        <div>We don't have any cast for this movie</div>
      )}
    </>
  );
};
export default Cast;
