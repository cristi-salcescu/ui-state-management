import action from "../actions";
import reducer from "./reducer";

const SAMPLE_NOTES = [
  {
    id: 1,
    title: "Note1",
    content: "Here are my notes for React",
    categoryID: 1
  },
  {
    id: 2,
    title: "Vue",
    content: "Here are my notes for Vue",
    categoryID: 2
  }
];

test("Notes can be set", function() {
  //arrange
  const state =  { notes: [] };
  const newNotes = SAMPLE_NOTES;

  //act
  const newState = reducer(state, action.setNotes(newNotes));

  //assert
  expect(newState.notes).toEqual(newNotes);
});

test("Note can be added", function() {
  //arrange
  const state =  { notes: SAMPLE_NOTES };

  const newNote = {
    title: "Functional"
  }

  //act
  const newState = reducer(state, action.saveNote(newNote));

  //assert
  expect(newState.notes.length).toEqual(3);
});

test("Note can be edited", function() {
  //arrange
  const state =  { notes: SAMPLE_NOTES };

  const newNote = {
    id: 2,
    title: "Vue",
    content: "Here are my new notes"
  }

  //act
  const newState = reducer(state, action.saveNote(newNote));

  //assert
  expect(newState.notes.length).toEqual(2);
});