import React from "react";
import { WorkData } from "../../../data/work";
import Separator from "../../common/separator/Separator";
import "./work.css";
import WorkCard from "./WorkCard";

export default function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}
