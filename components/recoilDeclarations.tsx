import { atom } from "recoil";
import DataType from "./datatype";

export const loginStatus = atom<Boolean>({
  key: "login",
  default: false,
})

export const allSemsData = atom<DataType[][]>({
  key: "semall",
  default: [],
});

export const semCount = atom<number>({
  key: "sems-to-display",
  default: 0,
})

export const Sem1Data = atom<DataType[]>({
  key: "sem1",
  default: [],
});

export const Sem2Data = atom<DataType[]>({
  key: "sem2",
  default: [],
});

export const Sem3Data = atom<DataType[]>({
  key: "sem3",
  default: [],
});

export const Sem4Data = atom<DataType[]>({
  key: "sem4",
  default: [],
});

export const Sem5Data = atom<DataType[]>({
  key: "sem5",
  default: [],
});

export const Sem6Data = atom<DataType[]>({
  key: "sem6",
  default: [],
});

export const Sem7Data = atom<DataType[]>({
  key: "sem7",
  default: [],
});

export const Sem8Data = atom<DataType[]>({
  key: "sem8",
  default: [],
});

export const Sem9Data = atom<DataType[]>({
  key: "sem9",
  default: [],
});

export const Sem10Data = atom<DataType[]>({
  key: "sem10",
  default: [],
});

export const Sem11Data = atom<DataType[]>({
  key: "sem11",
  default: [],
});

export const Sem12Data = atom<DataType[]>({
  key: "sem12",
  default: [],
});

export const Sem13Data = atom<DataType[]>({
  key: "sem13",
  default: [],
});

export const Sem14Data = atom<DataType[]>({
  key: "sem14",
  default: [],
});

export const Sem15Data = atom<DataType[]>({
  key: "sem15",
  default: [],
});

export const Sem16Data = atom<DataType[]>({
  key: "sem16",
  default: [],
});
