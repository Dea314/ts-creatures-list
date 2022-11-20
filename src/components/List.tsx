import { IState as Props } from "../App";

interface IProps {
  creature: Props["creature"];
}

const List: React.FC<IProps> = ({ creature }) => {
  const renderList = (): JSX.Element[] => {
    return creature.map((creature) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={creature.url} alt={creature.name} />
            <h2>{creature.name}</h2>
          </div>
          <p>{creature.age} years old</p>
          <p className="List-note">{creature.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
