export type Note = {
  id: string;
  name: string;
  staffPosition: {
    GStaff: [x : number, y : number][];
    FStaff: [x : number, y : number][];
  }
};