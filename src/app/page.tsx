"use client";
import React from "react";
import { TextField } from "@mui/material";
import {
  addItemInUseStateArray,
  modifyElementInUseStateArray,
  setMap,
  setTextToInt,
} from "@/components/setup";
export default function Home() {
  const [inHours, setInHours] = React.useState<number[]>([]);
  const [inMinutes, setInMinutes] = React.useState<number[]>([]);
  const [outHours, setOutHours] = React.useState<number[]>([]);
  const [outMinutes, setOutMinutes] = React.useState<number[]>([]);
  const [indexes, setIndexes] = React.useState<number[]>([]);
  const someOfInHour = inHours.reduce((a, b) => a + b, 0);
  const someOfInMinute = inMinutes.reduce((a, b) => a + b, 0);
  const someOfOutHour = outHours.reduce((a, b) => a + b, 0);
  const someOfOutMinute = outMinutes.reduce((a, b) => a + b, 0);
  const totalMinute = someOfOutMinute - someOfInMinute;
  const totalHour = someOfOutHour - someOfInHour;
  const final = totalHour + totalMinute / 60;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
        <tr>
          <th>เวลามา ชม</th> <th>เวลามา นาที</th>
          <th>เวลากลับ ชม</th> <th>เวลากลับ นาที</th>
        </tr>
        {indexes.map((index) => (
          <tr key={index}>
            <td>
              <TextField
                onChange={setTextToInt(
                  setMap(setInHours, modifyElementInUseStateArray(index))
                )}
                value={inHours[index].toString()}
                type="number"
              />
            </td>
            <td>
              <TextField
                onChange={setTextToInt(
                  setMap(setInMinutes, modifyElementInUseStateArray(index))
                )}
                value={inMinutes[index].toString()}
                type="number"
              />
            </td>
            <td>
              <TextField
                onChange={setTextToInt(
                  setMap(setOutHours, modifyElementInUseStateArray(index))
                )}
                value={outHours[index].toString()}
                type="number"
              />
            </td>
            <td>
              <TextField
                onChange={setTextToInt(
                  setMap(setOutMinutes, modifyElementInUseStateArray(index))
                )}
                value={outMinutes[index].toString()}
                type="number"
              />
            </td>
          </tr>
        ))}
      </table>
      final {final}
      <button
        onClick={() => {
          setIndexes((previous) => [...previous, previous.length]);
          setInHours(addItemInUseStateArray(8));
          setInMinutes(addItemInUseStateArray(0));
          setOutHours(addItemInUseStateArray(17));
          setOutMinutes(addItemInUseStateArray(0));
        }}
      >
        add
      </button>
    </main>
  );
}
