export interface Event {
  start_time: string;
  end_time: string;
  id: number;
  title: string;
  content: string;
}

export interface DisplayEvent extends Event {
  index: number;
}

export interface DisplayDay {
  id: number;
  highlightIndex: number;
  events: DisplayEvent[];
}
