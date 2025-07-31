import dayjs from "dayjs";
import React from "react";

export function startSize(): Map<
  "S" | "M" | "L" | "XL" | "XXL" | "3XL",
  number
> {
  const size: Map<"S" | "M" | "L" | "XL" | "XXL" | "3XL", number> = new Map();
  const s: ("S" | "M" | "L" | "XL" | "XXL" | "3XL")[] = [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL",
  ];
  s.forEach((e: "S" | "M" | "L" | "XL" | "XXL" | "3XL") => {
    size.set(e, 0);
  });
  return size;
}

export function calculate(
  input: unknown | number | undefined,
  plus: unknown | number | undefined,
  minus: unknown | number | undefined
) {
  return (input as number) + (plus as number) - (minus as number);
}
export const resOk = { success: true };
export const resError = { success: false };

/*export function myMapToMapString(input: MyMap[]): Map<string, string> {
    const map: Map<string, string> = new Map
    input.forEach((v) => {
        map.set(v.key, v.value)
    })
    return map

}*/

export function isInTime(start: Date, end: Date): boolean {
  const now = new Date(Date.now());
  return now > start && now < end;
}


export function peeLookupNong<P, N>(
  pees: readonly P[],
  nongs: readonly N[]
): (P | N)[] {
  if (pees.length == 0) {
    return nongs.map(copy);
  }
  if (pees.length == 1) {
    const outs: (P | N)[] = [pees[0], ...nongs];
    return outs;
  }
  const mp = pees.length;
  const mn = nongs.length;
  let n = 0;
  let p = 0;
  const outs: (P | N)[] = [];
  let i = 0;
  if (mp > mn) {
    let count = mp / (mn + 1);
    const exc = mp % (mn + 1);
    if (exc) {
      outs.push(pees[p++]);
      count--;
    }
    let j = 0;
    while (j < count) {
      outs.push(pees[p++]);
      j++;
    }
    while (i < mn) {
      outs.push(nongs[n++]);
      if (exc > ++i) {
        outs.push(pees[p++]);
      }
      let j = 0;
      while (j < count) {
        outs.push(pees[p++]);
        j++;
      }
    }
  } else {
    let count = mn / (mp - 1);
    const exc = mn % (mp - 1);
    outs.push(pees[p++]);
    if (exc) {
      outs.push(nongs[n++]);
      count--;
    }
    let j = 0;
    while (j < count) {
      outs.push(nongs[n++]);
      j++;
    }
    while (i < mp - 2) {
      outs.push(pees[p++]);
      if (exc > ++i) {
        outs.push(nongs[n++]);
      }
      let j = 0;
      while (j < count) {
        outs.push(nongs[n++]);
        j++;
      }
    }
    outs.push(pees[p++]);
  }
  return outs;
}
export const departures = [
  "วิศวกรรมเคมี (Chemical Engineering)",
  "วิศวกรรมเคมีและกระบวนการ (นานาชาติ) (Chemical and Process Engineering)",
  "วิศวกรรมเครื่องกล (Mechanical Engineering)",
  "วิศวกรรมเรือ (Naval Architecture and Marine Engineering)",
  "วิศวกรรมยานยนต์ (Automotive Engineering)",
  "วิศวกรรมไฟฟ้า (Electrical Engineering)",
  "วิศวกรรมโยธา (Civil Engineering)",
  "วิศวกรรมโลหการและวัสดุ (Metallurgical and Materials Engineering)",
  "วิศวกรรมสิ่งแวดล้อม (Environmental Engineering)",
  "วิศวกรรมสำรวจ (Survey Engineering)",
  "วิศวกรรมทรัพยากรธรณี (Georesources Engineering)",
  "วิศวกรรมปิโตรเลียม (Petroleum Engineering)",
  "วิศวกรรมอุตสาหการ (Industrial Engineering)",
  "วิศวกรรมคอมพิวเตอร์ (Computer Engineering)",
  "วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (หลักสูตร Sandbox) (Computer Engineering and Digital Technology)",
  "วิศวกรรมนิวเคลียร์และรังสี (Nuclear and Radiological Engineering)",
  "วิศวกรรมนาโน (นานาชาติ)** (Nano-Engineering)",
  "วิศวกรรมการออกแบบและการผลิตยานยนต์ (นานาชาติ)** (Automotive Design and Manufacturing Engineering)",
  "วิศวกรรมอากาศยาน (นานาชาติ)** (Aerospace Engineering)",
  "วิศวกรรมสารสนเทศและการสื่อสาร (นานาชาติ)** (Information and Communication Engineering)",
  "วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (นานาชาติ)** (Robotics and Artificial Intelligence Engineering)",
] as const;

export function getDifferentMinute(start: Date, end: Date) {
  return dayjs(end).diff(start, "minute");
}
export function removeElementInUseStateArray<T>(input: T[]) {
  return input.filter((e, i, a) => i < a.length - 1);
}
export function modifyElementInUseStateArray<T>(
  i: number
): (v: T, array: T[]) => T[] {
  return (v: T, array: T[]) => {
    return array.map((v2: T, i2: number) => {
      if (i == i2) {
        return v;
      } else {
        return v2;
      }
    });
  };
}
export function copyArray<T>(input: T[]): T[] {
  return input.map((e) => e);
}
export async function waiting(
  update: () => Promise<void>,
  setTimeOut: (isTimeout: boolean) => void
) {
  setTimeOut(true);
  await update();
  setTimeOut(false);
}
export function copy<T>(input: T): T {
  return input;
}
export function modifyElementInUseStateArray2Dimension<T>(
  i: number,
  j: number
): (v: T, array: T[][]) => T[][] {
  return (value: T, arrays: T[][]) =>
    modifyElementInUseStateArray<T[]>(i)(
      modifyElementInUseStateArray<T>(j)(value, arrays[i]),
      arrays
    );
}
export function setTextToInt(
  set: (input: number) => void
): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const out = parseInt(event.target.value);
    if (isNaN(out)) {
      set(0);
    } else {
      set(out);
    }
  };
}
export function setTextToFloat(
  set: (input: number) => void
): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const out = parseFloat(event.target.value);
    if (isNaN(out)) {
      set(0);
    } else {
      set(out);
    }
  };
}
export function setMap<T, T2>(
  set: (setter: (input: T2) => T2) => void,
  mapIn: (v: T, array: T2) => T2
): (get: T) => void {
  return (get: T) => {
    set((array) => mapIn(get, array));
  };
}
export function setTextToString(
  set: (input: string) => void,
  keepOriginal?: boolean
): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (keepOriginal) {
      set(event.target.value);
    } else {
      set(event.target.value.replace(/\s/g, ""));
    }
  };
}

export function setBoolean(
  set: (input: boolean) => void
): (event: React.ChangeEvent<HTMLInputElement>) => void {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    set(event.target.checked);
  };
}


export function cleanString(input: string) {
  return input.replace(/\s/g, "");
}
export const downloadText = "download";

export function addItemInUseStateArray<T>(add: T): (previous: T[]) => T[] {
  return (previous) => [...previous, add];
}
export interface UpDownPack {
  up: boolean;
  down: boolean;
}
export interface UpMiddleDownPack {
  up: boolean;
  middle: boolean;
  down: boolean;
}
export class SetUpDownPack {
  private set: React.Dispatch<React.SetStateAction<UpDownPack>>;
  public readonly up: boolean;
  public readonly down: boolean;
  constructor(
    input: [UpDownPack, React.Dispatch<React.SetStateAction<UpDownPack>>]
  ) {
    this.set = input[1];
    this.up = input[0].up;
    this.down = input[0].down;
    this.setUp = (input) => {
      if (input) {
        this.set(({ down }) => ({ up: true, down }));
      } else {
        this.set({ up: false, down: false });
      }
    };
    this.setDown = (input) => {
      if (input) {
        this.set({ up: true, down: true });
      } else {
        this.set(({ up }) => ({ up, down: false }));
      }
    };
  }
  public readonly setUp: (event: boolean) => void;
  public readonly setDown: (event: boolean) => void;
  public static init(up: boolean, down: boolean): UpDownPack {
    return { up, down };
  }
}
export class SetUpMiddleDownPack {
  private set: React.Dispatch<React.SetStateAction<UpMiddleDownPack>>;
  public readonly up: boolean;
  public readonly middle: boolean;
  public readonly down: boolean;
  constructor(
    input: [
      UpMiddleDownPack,
      React.Dispatch<React.SetStateAction<UpMiddleDownPack>>
    ]
  ) {
    this.set = input[1];
    this.up = input[0].up;
    this.middle = input[0].middle;
    this.down = input[0].down;
    this.setUp = (input) => {
      if (input) {
        this.set(({ down, middle }) => ({ up: true, middle, down }));
      } else {
        this.set({ up: false, middle: false, down: false });
      }
    };
    this.setMiddle = (input) => {
      if (input) {
        this.set(({ down }) => ({ up: true, middle: true, down }));
      } else {
        this.set(({ up }) => ({ up, middle: false, down: false }));
      }
    };
    this.setDown = (input) => {
      if (input) {
        this.set({ up: true, middle: true, down: true });
      } else {
        this.set(({ up, middle }) => ({ up, middle, down: false }));
      }
    };
  }
  public readonly setUp: (event: boolean) => void;
  public readonly setMiddle: (event: boolean) => void;
  public readonly setDown: (event: boolean) => void;
  public static init(
    up: boolean,
    middle: boolean,
    down: boolean
  ): UpMiddleDownPack {
    return { up, middle, down };
  }
}
export function doIfTrue(input: () => void): (valid: boolean) => void {
  return (valid) => {
    if (valid) {
      input();
    }
  };
}


export function notify(message: string) {
  Notification.requestPermission().then((permission) => {
    if (permission == "granted") {
      new Notification(message);
    }
  });
}
