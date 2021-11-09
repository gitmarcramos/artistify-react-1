import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Table(
  {data, columns, handler, component}
  
) {
  console.log(data)
  if (!data)
    return <p>Error : Component List expects an iterable "data" props</p>;
  return (
    <table>
      <thead>
        <tr>
          {component && columns.map((v, i) => (
            <th key={i}>{v}</th>
          ))}
          {/* {component.map((v, i) => (<th key={i}>{v}</th>))} */}
          <th>edit</th>
          <th>trash</th>
        </tr>
      </thead>
      <tbody>
        {Boolean(data.length) ? (
          data.map((d, i) => (
            <tr key={i}>
              {columns &&columns.map((v, j) => (
                <td key={j}>{d[v]}</td>
              ))}
              <td>
                <FontAwesomeIcon className="is-clickable fa-lg" icon={faBars} />
              </td>
              <td>
                <FontAwesomeIcon className="is-clickable fa-lg" icon={faBars} onClick={() => data.handler(d._id, "delete")} />
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
