import Character from "./character.dto";

export default interface PeopleReq {
  count: string;
  next: string | null;
  previous: string | null;
  results: Array<Character>;
}
