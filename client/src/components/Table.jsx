import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Table(
  props
) {
  console.log(props.data)
  if (!props.data)
    return <p>Error : Component List expects an iterable "data" props</p>;
  return (
    <table>
      <thead>
        <tr>
          {props.columns && props.columns.map((v, i) => (
            <th key={i}>{v}</th>
          ))}
          <th>edit</th>
          <th>trash</th>
        </tr>
      </thead>
      <tbody>
        {Boolean(props.data.length) ? (
          props.data.map((d, i) => (
            <tr key={i}>
              {props.columns && props.columns.map((v, j) => (
                <td key={j}>{d[v]}</td>
              ))}
              <td>
                <FontAwesomeIcon className="is-clickable fa-lg" icon={faBars} />
              </td>
              <td>
                <FontAwesomeIcon className="is-clickable fa-lg" icon={faBars} onClick={() => props.handler(d._id, "delete")} />
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
