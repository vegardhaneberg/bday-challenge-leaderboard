import { Stat } from "../../utils/TableUtils";
import "./BarComponent.css";

interface BarComponentProps {
  stats: Stat[] | undefined;
}

const BarComponent: React.FC<BarComponentProps> = ({ stats }) => {
  const renderStatBar = (stat: Stat) => {
    return (
      <>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`stat-square ${
              index < stat.value ? "filled" : ""
            } ${getColorClass(stat.value)}`}
          />
        ))}
      </>
    );
  };
  const getColorClass = (value: number) => {
    if (value <= 3) return "low";
    if (value <= 6) return "medium";
    return "high";
  };

  return (
    <div
      className="stat-container"
      style={{
        padding: "10px",
        marginTop: "1rem",
      }}
    >
      {stats && (
        <>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "100%",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: index === 0 ? "0" : "2rem",
              }}
            >
              <h2>{stat.name}</h2>
              <div style={{ display: "flex", gap: "3px", alignSelf: "center" }}>
                {renderStatBar(stat)}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BarComponent;
