import { Character } from './character.dto';

export class PeopleReq {
  count: string;
  next: string | null;
  previous: string | null;
  results: Array<Character>;
}
