import { atom } from "recoil";

export const peopleCountAtom = atom({
    key: "people",
    default: 3,
});

export const topicAtom = atom({
    key: "topic",
    default: "",
});

export const answerAtom = atom({
    key: "answer",
    default: "",
});

export const fakeAnswerAtom = atom({
    key: "fake",
    default: "",
});
