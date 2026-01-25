export interface Stop {
  name: string;
  loc: string;
  context: string;
  todo: string[];
  link: string;
}

export interface Circuit {
  id: string;
  name: string;
  icon: string;
  desc: string;
  stops: Stop[];
}

export interface Category {
  category: string;
  circuits: Circuit[];
}
