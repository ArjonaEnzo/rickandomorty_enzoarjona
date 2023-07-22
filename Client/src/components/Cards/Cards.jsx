  import Card from "../Card/Card";
import styled from "./Cards.module.css";
export default function Cards({ characters, onClose }) {
  return (
    <div className={styled.constein}>
      {characters.map((e) => {
        return (
          <Card
            key={e.id}
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            onClose={onClose}
            gender={e.gender}
            origin={e.origin.name}
            image={e.image}
          />
        );
      })}
    </div>
  );
}
