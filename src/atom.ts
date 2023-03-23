import { atom } from "recoil";

export const peopleCountAtom = atom({
    key: "people",
    default: 3,
});

export const topicAtom = atom({
    key: "topic",
    default: "",
});
