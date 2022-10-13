import React, { useContext } from "react";
import { ThemeParagraph } from "../../styles/typography";
import { Card } from "./style";
import { IoMdTrash } from "react-icons/io";
import { TechContext } from "../../Contexts/TechContext";

export const Tech = ({ tech }) => {
  const {deleteTechs} = useContext(TechContext)

  return (
    <Card>
      <ThemeParagraph size="titleCard">{tech.title}</ThemeParagraph>
      <div>
        <ThemeParagraph>{tech.status}</ThemeParagraph>
        <button onClick={() => deleteTechs(tech.id)}>
          <IoMdTrash size={16} />
        </button>
      </div>
    </Card>
  );
};
