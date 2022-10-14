import React, { useContext } from "react";
import { ThemeParagraph } from "../../styles/typography";
import { Card } from "./style";
import { IoMdTrash } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { TechContext } from "../../Contexts/TechContext";

export const Tech = ({ tech }) => {
  const { deleteTechs, gett } = useContext(TechContext);

  return (
    <Card>
      <ThemeParagraph size="titleCard">{tech.title}</ThemeParagraph>
      <div>
        <ThemeParagraph>{tech.status}</ThemeParagraph>
        <button className="btn-1" onClick={() => deleteTechs(tech.id)}>
          <IoMdTrash size={16} />
        </button>
        <button className="btn-2" onClick={() => gett(tech)}>
          <MdMenuOpen size={16} />
        </button>
      </div>
    </Card>
  );
};
