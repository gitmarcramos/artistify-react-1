import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StylesAdmin({ data, deleteHandler }) {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>color</th>
          <th>edit</th>
          <th>trash</th>
        </tr>
      </thead>
      <tbody>
        {Boolean(data.length) ? (
          data.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.color}</td>
              <td>
                <FontAwesomeIcon className="is-clickable fa-lg" icon={faBars} />
              </td>
              <td>
                <FontAwesomeIcon
                  className="is-clickable fa-lg"
                  icon={faTrash}
                  onClick={() => deleteHandler(d._id)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Sorry, no data yet ...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
