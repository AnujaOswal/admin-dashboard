import React from "react";
import { DashBoardData } from "./DashBoardData";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";

export default function DashboardGist() {
  return (
    <div className="dashboardflex">
      {DashBoardData.map((elem) => {
        return (
          //  Dashboard  Components
          <div
            key={elem.id}
            className="borderCard"
            style={{ borderLeft: `4px solid #${elem.color}` }}
          >
            <div style={{ width: "100%" }}>
              <p style={{ color: `#${elem.color}` }}>{elem.name}</p>
              <div className="task">
                <h4>{elem.name === "Tasks" ? elem.data + "%" : elem.data}</h4>

                {/* Progress Bar only for tasks component */}
                {elem.name === "Tasks" ? (
                  <ProgressBar
                    variant="info"
                    now={elem.data}
                    style={{
                      width: "70%",
                      margin: "0 1rem",
                      height: "0.5rem",
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Icons for each components */}
            {elem.icon === "FaCalendar" ? (
              <FaCalendar className="dashIcon" />
            ) : elem.icon === "FaDollarSign" ? (
              <FaDollarSign className="dashIcon" />
            ) : elem.icon === "FaClipboardList" ? (
              <FaClipboardList className="dashIcon" />
            ) : (
              <FaComments className="dashIcon" />
            )}
          </div>
        );
      })}
    </div>
  );
}