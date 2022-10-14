import React, { useContext } from "react";
import { ThemeParagraph } from "../../styles/typography";
import { Card } from "./style";
import { IoMdTrash } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { TechContext } from "../../Contexts/TechContext";

export const Tech = ({ tech }) => {
  const { deleteTechs, setIsShowModalUpdate } = useContext(TechContext);

  return (
    <Card>
      <ThemeParagraph size="titleCard">{tech.title}</ThemeParagraph>
      <div>
        <ThemeParagraph>{tech.status}</ThemeParagraph>
        <button onClick={() => deleteTechs(tech.id)}>
          <IoMdTrash size={16} />
        </button>
        <button onClick={() => setIsShowModalUpdate(true)}>
          <MdMenuOpen size={16}/>
        </button>
      </div>
    </Card>
  );
};
